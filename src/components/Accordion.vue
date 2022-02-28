<template>
  <div class="accordion">
    <div class="header-container"
      @click="ToggleOpen()"
    >
      <slot name="header"></slot>
      <img v-if="!isOpen"
          src="../assets/DownArrow.svg"
          alt="DownArrow"
      />
      <img v-if="isOpen"
          src="../assets/UpArrow.svg"
          alt="UpArrow"
      />
    </div>
    <div class="body-container" v-show="isOpen">
      <slot name="body"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Accordion',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpen: this.open,
    };
  },
  methods: {
    ToggleOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style lang="scss" scoped>
  .accordion {
    .header-container {
      height: 72px;
      background-color: #FAFCFF;
      border: 1px solid #F5F5F5;
      border-radius: 5px;
      color: #0C365A;
      font-family: 'Open Sans';
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
       -webkit-box-shadow: -1px 0px 8px 0px rgba(0,0,0,0.2);
      -moz-box-shadow: -1px 0px 8px 0px rgba(0,0,0,0.2);
      box-shadow: -1px 0px 8px 0px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0px 20px;
    }
    .body-container {
      border: 1px solid #F0F0F0;
      padding: 0px 20px;
      border-radius: 0px 0px 15px 15px;
    }
  }
</style>
