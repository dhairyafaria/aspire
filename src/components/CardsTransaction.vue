<template>
  <Accordion>
    <template #header>
      <div class="header-items">
        <img src="../assets/RecentTransactions.svg" alt="RecentTransaction"/>
        <div>Recent transactions</div>
      </div>
    </template>
    <template #body>
      <div class="transaction-container">
        <div class="recent-transactions">
          <div v-for="recentTransaction in recentTransactions"
            :key="recentTransaction.id"
            class="recent-transaction"
          >
            <div class="image"
              :class="getRecentTransactionImageClass(recentTransaction.image)"
            >
              <img :src="require(`../assets/${recentTransaction.image}.svg`)"
                :alt="recentTransaction.image"
              />
            </div>
            <div class="transaction-detail">
              <div class="transaction-row">
                <div class="transaction-name">
                  {{ recentTransaction.name }}
                </div>
                <div class="transaction-amount"
                    :class="{ 'positive': recentTransaction.amount > 0 }"
                >
                  {{ getTransactionAmount(recentTransaction.amount) }}
                  <img src="../assets/Next.svg" alt="Next"/>
                </div>
              </div>
              <div class="transaction-date">
                {{ getTransactionDate(recentTransaction.date) }}
              </div>
              <div class="transaction-message">
                <div class="transaction-message-image">
                  <img src="../assets/BusinessAndFinance.svg" alt="BusinessAndFinance"/>
                </div>
                {{ recentTransaction.message }}
              </div>
            </div>
          </div>
        </div>
        <div class="view-all-transaction-card">
          View all card transactions
        </div>
      </div>
    </template>
  </Accordion>
</template>
<script>
import Accordion from '@/components/Accordion.vue';

export default {
  name: 'CardsTransaction',
  components: {
    Accordion,
  },
  props: {
    recentTransactions: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    getRecentTransactionImageClass(image) {
      const classes = {
        Flights: 'flights',
        FileStorage: 'file-storage',
        MegaPhone: 'mega-phone',
      };
      return classes[image];
    },
    getTransactionDate(d) {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
      const dateObj = new Date(d);
      const month = monthNames[dateObj.getMonth()];
      const day = String(dateObj.getDate()).padStart(2, '0');
      const year = dateObj.getFullYear();
      return `${day} ${month} ${year}`;
    },
    getTransactionAmount(amount) {
      const amountStr = amount.toString();
      if (amount < 0) {
        return `${amountStr.substring(0, 1)} S$ ${amountStr.substring(1, amountStr.length)}`;
      }
      return `S$ ${amountStr}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.header-items {
  display: flex;
  align-items: center;
  img {
    margin-right: 12px;
  }
}
::v-deep .body-container{
  background-color: #EDFFF5;
}
.transaction-container {
  .recent-transactions {
    background-color: #ffffff;
    padding: 0px 20px;
    border-bottom: 1px solid #F0F0F0;
    border-radius: 0px 0px 8px 8px;
    .recent-transaction {
      padding-bottom: 10px;
      padding-top: 20px;
      border-bottom: 1px solid #F5F5F5;
      display: flex;
      &:last-child {
        border-bottom: none;
      }
      .image {
        height: 48px;
        width: 48px;
        border-radius: 48px;display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
        &.file-storage {
          background-color: #009DFF1A;
        }
        &.flights {
          background-color: #00D6B51A;
        }
        &.mega-phone {
          background-color: #F251951A;
        }
        img {
          height: 16px;
          width: 16px;
        }
      }
      .transaction-detail {
        width: 100%;
        max-width: 250px;
        .transaction-row {
          font-family: 'Open Sans';
          font-weight: 600;
          font-size: 14px;
          line-height: 18px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
          .transaction-name {
            color: #222222;
          }
          .transaction-amount {
            text-align: right;
            color: #222222;
            &.positive {
              color: #01D167;
            }
            img {
              margin-left: 5px;
            }
          }
        }
        .transaction-date {
          font-family: 'Open Sans';
          font-weight: 400;
          font-size: 13px;
          line-height: 18px;
          color: #AAAAAA;
          margin-bottom: 5px;
        }
        .transaction-message {
          font-family: 'Open Sans';
          font-weight: 600;
          font-size: 12px;
          line-height: 18px;
          color: #325BAF;
          display: flex;
          align-items: center;
          .transaction-message-image {
            height: 20px;
            width: 24px;
            background-color: #325BAF;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .view-all-transaction-card {
    font-family: 'Open Sans';
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    padding: 16px;
    color: #01D167;
  }
}
</style>
