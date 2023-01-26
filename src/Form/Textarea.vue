<template>
  <div class="styleTextarea group mt-10">
    <textarea
      :id="formId"
      placeholder=" "
      :type="type"
      class="peer p-2"
      rows="4"
      cols="50"
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
      return this.id || `textarea-${this.compId}`;
    },
  },
};
</script>

<style>
/* These all use :where() so that additional classes automatically win out in
 * the cascade */

/* Base styles */

:where(.styleTextarea) {
  @apply relative;
  margin-top: var(--styleTnput-default-heading-space);
}

:where(.styleTextarea textarea) {
  @apply outline-none w-full rounded-3xl border-2;
  border-color: var(--styleTnput-border-colour);
}

:where(.styleTextarea) textarea {
  @apply pt-1.5;
}

:where(.styleTextarea label) {
  @apply absolute left-4 -top-3.5 bg-white text-sm transition-all;
  color: var(--styleTnput-label-colour);
}

/* Invalid styles */
:where(.styleTextarea textarea:invalid:not(:placeholder-shown)) {
  border-color: var(--styleTnput-invalid-border-colour);
}

:where(.styleTextarea textarea:invalid:not(:placeholder-shown) + label) {
  color: var(--styleTnput-invalid-label-colour);
}

/* Placeholder shown styles */
:where(.styleTextarea textarea:placeholder-shown + label) {
  @apply top-4 text-base;
  color: var(--styleTnput-placeholder-colour);
}

/* Focus styles */
:where(.styleTextarea textarea:focus) {
  border-color: var(--styleTnput-focus-border-colour);
}

:where(.styleTextarea textarea):focus-visible {
  @apply outline-none;
}

:where(.styleTextarea textarea:focus + label) {
  @apply -top-3.5 text-sm;
  color: var(--styleTnput-focus-label-colour);
}

/* Invalid + focus styles */
:where(.styleTextarea textarea:focus:invalid:not(:placeholder-shown) + label) {
  color: var(--styleTnput-invalid-label-colour);
}
</style>
