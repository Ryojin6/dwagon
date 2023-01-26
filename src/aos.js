/* eslint-disable no-underscore-dangle, no-param-reassign */
function processOptions(value) {
  let options = value;
  if (typeof value === 'function') {
    // Simple options (callback-only)
    options = {
      callback: value,
    };
  }
  return options;
}

function deepEqual(val1, val2) {
  if (val1 === val2) return true;
  if (typeof val1 === 'object') {
    for (const key in val1) {
      if (!deepEqual(val1[key], val2[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
}

class VisibilityState {
  constructor(el, options, vnode) {
    this.el = el;
    this.observer = null;
    this.frozen = false;
    this.createObserver(options, vnode);
  }

  get threshold() {
    return this.options.intersection &&
      typeof this.options.intersection.threshold === 'number'
      ? this.options.intersection.threshold
      : 0;
  }

  createObserver(options, vnode) {
    if (this.observer) {
      this.destroyObserver();
    }

    if (this.frozen) return;

    this.options = processOptions(options);

    this.switchClasses = (show) => {
      let remove = '';
      let add = '';

      if (show) {
        remove = this.el.getAttribute('aos-from');
        add = this.el.getAttribute('aos-to');
      } else {
        remove = this.el.getAttribute('aos-to');
        add = this.el.getAttribute('aos-from');
      }

      remove = (remove || '').split(/\s+/g).filter(Boolean);
      add = (add || '').split(/\s+/g).filter(Boolean);

      if (remove.length) {
        this.el.classList.remove(...remove);
      }
      if (add.length) {
        this.el.classList.add(...add);
      }
    };

    this.callback = (result, entry) => {
      if (this.options.callback) {
        this.options.callback(result, entry);
      }
      this.switchClasses(result);
      if (result && this.options.once) {
        this.frozen = true;
        this.destroyObserver();
      }
    };

    this.oldResult = undefined;

    this.observer = new IntersectionObserver((entries) => {
      let entry = entries[0];

      if (entries.length > 1) {
        const intersectingEntry = entries.find((e) => e.isIntersecting);
        if (intersectingEntry) {
          entry = intersectingEntry;
        }
      }

      if (this.callback) {
        // Use isIntersecting if possible because browsers can report
        // isIntersecting as true, but intersectionRatio as 0, when something
        // very slowly enters the viewport.
        const result =
          entry.isIntersecting && entry.intersectionRatio >= this.threshold;
        if (result === this.oldResult) return;
        this.oldResult = result;
        this.callback(result, entry);
      }
    }, this.options.intersection);

    // Wait for the element to be in document
    vnode.context.$nextTick(() => {
      if (this.observer) {
        this.observer.observe(this.el);
      }
    });
  }

  destroyObserver() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    // Cancel throttled call
    if (this.callback && this.callback._clear) {
      this.callback._clear();
      this.callback = null;
    }
  }
}

function bind(el, { value }, vnode) {
  const state = new VisibilityState(el, value || {}, vnode);
  el._vue_visibilityState = state;
}

function unbind(el) {
  const state = el._vue_visibilityState;
  if (state) {
    state.destroyObserver();
    delete el._vue_visibilityState;
  }
}

function update(el, { value, oldValue }, vnode) {
  if (deepEqual(value, oldValue)) return;
  const state = el._vue_visibilityState;
  if (!value) {
    unbind(el);
    return;
  }
  if (state) {
    state.createObserver(value, vnode);
  } else {
    bind(el, { value }, vnode);
  }
}

export default {
  bind,
  update,
  unbind,
};
