<template>
  <div class="card-action-container">
    <div class="card-action" @click="ToggleFreezeCard">
      <img class="card-action-icon" src="../assets/FreezeCard.svg" alt="FreezeCard"/>
       <div class="card-action-label">{{ freezeCardLabel }}</div>
    </div>
    <div class="card-action">
      <img class="card-action-icon" src="../assets/SetSpendLimit.svg" alt="SetSpendLimit"/>
      <div class="card-action-label">Set spend limit</div>
    </div>
    <div class="card-action">
      <img class="card-action-icon" src="../assets/GPay.svg" alt="AddToGPay"/>
      <div class="card-action-label">Add to GPay</div>
    </div>
    <div class="card-action">
      <img class="card-action-icon" src="../assets/ReplaceCard.svg" alt="ReplaceCard"/>
      <div class="card-action-label">Replace Card</div>
    </div>
    <div class="card-action"
      :class="{ 'card-cancelled': isCardCancelled }"
      @click="CancelCard"
    >
      <img class="card-action-icon" src="../assets/DeactivateCard.svg" alt="CancelCard"/>
      <div class="card-action-label">Cancel Card</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardActions',
  props: {
    isFreezeCard: {
      type: Boolean,
      default: false,
    },
    isCardCancelled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    freezeCardLabel() {
      return this.isFreezeCard ? 'Unfreeze card' : 'Freeze card';
    },
  },
  methods: {
    ToggleFreezeCard() {
      this.$emit('toggleFreezeCard', this.isFreezeCard);
    },
    CancelCard() {
      this.$emit('cancelCard');
    },
  },
};
</script>
<style lang="scss" scoped>
  .card-action-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0px 20px;
    .card-action {
      text-align: center;
      width: 70px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0px;
      }
      .card-action-icon {
        height: 32px;
        width: 32px;
      }
      .card-action-label {
        font-family: 'Open Sans';
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #0C365A;
      }
      &.card-cancelled {
        .card-action-icon {
          opacity: 0.5;
        }
        .card-action-label {
          opacity: 0.5;
        }
      }
    }
  }
</style>
