<template>
  <div class="container"
    :class="{ 'freeze-card': card.isCardFreeze, 'cancelled-card': card.isCancelled }"
  >
    <div class="show-card-number">
      <div class="show-card-number-button" @click="toggleShowCard">
        <img src="../assets/ShowNumber.svg" alt="ShowNumber" />
        <div class="show-card-number-label">{{ showCardNumberLabel }}</div>
      </div>
    </div>
    <div class="card">
      <div class="card-container">
        <div class="long-logo">
          <img src="../assets/LongLogo.svg" alt="LongLogo" />
        </div>
        <div class="card-name">{{ card.cardName }}</div>
        <div class="card-no">
          <span>{{ number[0] }}</span>
          <span>{{ number[1] }}</span>
          <span>{{ number[2] }}</span>
          <span>{{ number[3] }}</span>
        </div>
        <div class="card-row">
          <div class="card-expiry-date">Thru: {{ expiryDate }}</div>
          <div class="card-cvv-no">CVV: {{ cvvNo }}</div>
        </div>
        <span v-if="card.isCancelled">Cancelled</span>
        <div class="visa-logo">
          <img src="../assets/VisaLogo.svg" alt="VisaLogo" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  data() {
    return {
      showCardNumber: false,
    };
  },
  props: {
    card: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    showCardNumberLabel() {
      return this.showCardNumber ? 'Hide card number' : 'Show card number';
    },
    number() {
      const nums = [];
      if (this.showCardNumber) {
        for (let i = 0; i < 4; i += 1) {
          nums.push(this.card.cardNo.toString().substr(i * 4, 4));
        }
      } else {
        for (let i = 0; i < 3; i += 1) {
          nums.push('●●●●');
        }
        nums.push(this.card.cardNo.toString().substr(3 * 4, 4));
      }
      return nums;
    },
    cvvNo() {
      return this.showCardNumber ? this.card.cardCVVNo : '●●●●';
    },
    expiryDate() {
      const d = new Date(this.card.cardExpirationDate);
      const mm = d.getMonth() + 1;
      const yyyy = d.getFullYear();
      return `${mm}/${yyyy}`;
    },
  },
  methods: {
    toggleShowCard() {
      if (!this.card.isCardFreeze && !this.card.isCancelled) {
        this.showCardNumber = !this.showCardNumber;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  .show-card-number {
    .show-card-number-button {
      margin-left: auto;
      background-color: #FFFFFF;
      width: 140px;
      padding: 5px;
      display: flex;
      justify-content: center;
      border-radius: 5px 5px 0px 0px;
      padding-bottom: 15px;
      z-index: -1;
      color: #01D167;
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      img {
        margin-right: 5px;
      }
      .show-card-number-label {
        width: 110px;
      }
    }
  }
  .card {
    background-color: #01D167;
    height: 246px;
    border-radius: 10px;
    width: 100%;
    position: relative;
    top: -10px;
    .card-container {
      padding: 25px;
      font-family: 'Open Sans';
      color: #FFFFFF;
      .long-logo {
        display: flex;
        justify-content: end;
        margin-bottom: 24px;
      }
      .card-name {
        font-weight: 700;
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 24px;
      }
      .card-no {
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
        margin-bottom: 15px;
        span {
          margin-right: 24px;
          display: inline-block;
          width: 33px;
        }
      }
      .card-row {
        display: flex;
        margin-bottom: 20px;
        .card-expiry-date {
          font-weight: 700;
          font-size: 14px;
          line-height: 19px;
          margin-right: 40px;
        }
        .card-cvv-no {
          font-weight: 700;
          font-size: 14px;
          line-height: 19px;
        }
      }
      .visa-logo {
        display: flex;
        justify-content: end;
      }
    }
  }
  &.freeze-card {
    .show-card-number {
      .show-card-number-button {
        color: #DDDDDD;
        img {
          opacity: 0.5;
        }
      }
    }
    .card {
      background-color: #61ad86;
    }
  }
  &.cancelled-card {
    .show-card-number {
      .show-card-number-button {
        color: #DDDDDD;
        img {
          opacity: 0.5;
        }
      }
    }
    .card {
      background-color: #586d62;
    }
  }
}
</style>
