<template>
  <div class="styleInput group">
    <input
      :id="formId"
      placeholder=" "
      :type="type"
      class="peer p-2"
      :class="inputClass"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
    <label :for="formId" :class="labelClass"><slot /></label>
  </div>
</template>

<script>
let id = 1;

export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    labelClass: {
      type: String,
      default: '',
    },
    inputClass: {
      type: String,
      default: '',
    },
  },
  data() {
    const compId = id;
    id += 1;
    return { compId };
  },
  computed: {
    formId() {
      return this.id || `input-${this.compId}`;
    },
  },
};
</script>

<style>
/* These all use :where() so that additional classes automatically win out in
 * the cascade */

/* Base styles */
:where(.styleInput) {
  @apply relative;
  margin-top: var(--styleInput-default-heading-space);
}

:where(.styleInput input) {
  @apply outline-none h-14 w-full rounded-3xl border-2;
  border-color: var(--styleInput-border-colour);
}

:where(.styleInput label) {
  @apply absolute left-4 -top-3.5 bg-white text-sm transition-all;
  color: var(--styleInput-label-colour);
}

/* Invalid styles */
:where(.styleInput input:invalid:not(:placeholder-shown)) {
  border-color: var(--styleInput-invalid-border-colour);
}

:where(.styleInput input:invalid:not(:placeholder-shown) + label) {
  color: var(--styleInput-invalid-label-colour);
}

/* Placeholder shown styles */
:where(.styleInput input:placeholder-shown + label) {
  @apply top-1/2 -translate-y-1/2 text-base;
  color: var(--styleInput-placeholder-colour);
}

/* Focus styles */
:where(.styleInput input:focus) {
  border-color: var(--styleInput-focus-border-colour);
}

:where(.styleInput input):focus-visible {
  @apply outline-none;
}

:where(.styleInput input:focus + label) {
  @apply -top-3.5 -translate-y-0 text-sm;
  color: var(--styleInput-focus-label-colour);
}

/* Invalid + focus styles */
:where(.styleInput input:focus:invalid:not(:placeholder-shown) + label) {
  color: var(--styleInput-invalid-label-colour);
}
</style>
