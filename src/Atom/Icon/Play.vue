<template>
  <div
    class="relative z-10"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 450">
      <g fill="#0c0f14" data-name="Group 21">
        <g data-name="Ellipse 2">
          <circle cx="225" cy="225" r="225" stroke="none" />
          <circle cx="225" cy="225" r="224.5" />
        </g>
        <g data-name="Polygon 1">
          <path
            d="M163.21 129.473l168.511 97.393L163.3 324.104z"
            :fill="hover ? '#fff' : '#fff'"
          />
          <path
            fill="#fff"
            d="M164.211 131.206l.086 191.162 165.423-95.507-165.509-95.655m-1-1.733l168.508 97.389L163.298 324.1l-.087-194.627z"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
};
</script>
