<script>
export default {
  name: 'IconComponent',
  props: {
    name: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<template>
  <div class="icon__body">
    <svg
      v-if="name === 'search'"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="'none'"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>

    <!-- search icon end -->
  </div>
</template>

<style lang="scss">
.right_arrow {
  position: relative;
  top: 1px;
  margin-left: 10px;
  padding-top: 1px;
  @media screen and(max-width: 62em) {
    margin-left: 8px;
    padding-top: 3px;
  }
  @media screen and(max-width: 48em) {
    margin-left: 6px;
    padding-top: 3px;
    width: 14px;
    height: 12px;
  }
}
</style>
