<template>
  <div class="cards">
    <div class="cards-list">
      <div class="logo">
        <img src="../assets/ColoredLogo.svg" alt="ColoredLogo"/>
      </div>
      <div class="account-balance-label">Account balance</div>
      <div class="account-row">
        <div class="account-balance">
          <div class="currency-symbol">S$</div>
          3000
        </div>
        <div class="new-card--add" @click="OpenAddNewCardModal">
          <img src="../assets/Add.svg" alt="New Card"/>
          New Card
        </div>
      </div>
      <div class="cards-tabs-container">
        <div class="cards-tabs">
          <div class="cards-tabs-label"
            :class="{'card-tab--active': cardTabSelected === 'MyDebitCards'}"
            @click="ChangeCardTab('MyDebitCards')"
          >
            My debit cards
          </div>
          <div class="cards-tabs-label"
            :class="{'card-tab--active': cardTabSelected === 'AllCompanyCards'}"
            @click="ChangeCardTab('AllCompanyCards')"
          >
            All Company Cards
          </div>
        </div>
        <div class="my-debit-cards">
          <carousel :perPage="perPage"
            paginationActiveColor="#01D167"
            paginationColor="#222222"
            @page-change="SetCurrentCardSlideNo"
          >
            <slide v-for="card in cards" :key="card.cardId">
              <Card :card="card"></Card>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
    <div class="cards-actions">
      <CardActions
        v-if="cards.length > 0"
        :is-freeze-card="isCurrentCardFreeze"
        :is-card-cancelled="isCurentCardCancelled"
        @toggleFreezeCard="ToggleFreezeCard"
        @cancelCard="CancelCard"
      />
    </div>
    <div class="cards-details">
      <Accordion>
        <template #header>
          <div class="header-items">
            <img src="../assets/CardDetails.svg" alt="CardDetails"/>
            <div>Card details</div>
          </div>
        </template>
        <template #body>
          <div>Card Details.....</div>
        </template>
      </Accordion>
    </div>
    <div class="cards-transactions">
      <CardsTransaction :recent-transactions="recentTransactions"/>
    </div>
    <ConfirmModal :show-modal="showModal"
      @closeModal="CloseModal"
      @deactivateCard="DeactivateCard"
    />
    <AddNewCard :show-modal="showAddNewCardModal"
      @closeModal="CloseAddNewCardModal"
      @saveNewCard="SaveNewCard"
    />
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { Carousel, Slide } from 'vue-carousel';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import Card from '@/components/Card.vue';
import CardActions from '@/components/CardActions.vue';
import ConfirmModal from '@/components/ConfirmModal.vue';
import AddNewCard from '@/components/AddNewCard.vue';
import Accordion from '@/components/Accordion.vue';
import CardsTransaction from '@/components/CardsTransaction.vue';

export default {
  name: 'Cards',
  components: {
    Carousel,
    Slide,
    Card,
    CardActions,
    ConfirmModal,
    AddNewCard,
    Accordion,
    CardsTransaction,
  },
  data() {
    return {
      cardTabSelected: 'MyDebitCards',
      perPage: 1,
      currentCardSlide: 0,
      showModal: false,
      showAddNewCardModal: false,
      recentTransactions: [],
    };
  },
  computed: {
    ...mapGetters({
      cards: 'GetAllCards',
    }),
    isCurrentCardFreeze() {
      return this.cards[this.currentCardSlide].isCardFreeze;
    },
    isCurentCardCancelled() {
      return this.cards[this.currentCardSlide].isCancelled;
    },
  },
  methods: {
    ...mapActions(['FetchAllCards']),
    ...mapMutations(['SetFreezeCard', 'SetCardCancelled', 'AddCard']),
    ChangeCardTab(tab) {
      this.cardTabSelected = tab;
    },
    SetCurrentCardSlideNo(no) {
      this.currentCardSlide = no;
      this.FetchRecerntTransactions();
    },
    ToggleFreezeCard(isFreezeCard) {
      const payload = {
        currentCardSlide: this.currentCardSlide,
        isFreezeCard: !isFreezeCard,
      };
      this.SetFreezeCard(payload);
    },
    CancelCard() {
      if (!this.isCurentCardCancelled) {
        this.showModal = true;
      }
    },
    DeactivateCard() {
      this.SetCardCancelled(this.currentCardSlide);
      this.showModal = false;
    },
    CloseModal() {
      this.showModal = false;
    },
    OpenAddNewCardModal() {
      this.showAddNewCardModal = true;
    },
    CloseAddNewCardModal() {
      this.showAddNewCardModal = false;
    },
    SaveNewCard(cardName) {
      const cardId = faker.random.uuid();
      const cardNo = faker.datatype.number({ min: 10000000000000000 });
      const cardCVVNo = faker.datatype.number({ min: 100, max: 10000 });
      const cardExpirationDate = faker.date.future(2);
      const payload = {
        cardId,
        cardNo,
        cardName,
        cardExpirationDate,
        cardCVVNo,
        isCardFreeze: false,
        isCancelled: false,
      };
      this.AddCard(payload);
      this.showAddNewCardModal = false;
    },
    async FetchRecerntTransactions() {
      try {
        const response = await axios.get(`/cards/${this.cards[this.currentCardSlide]}/recent-transactions`);
        this.recentTransactions = response.data;
      } catch (error) {
        console.error('Error while fectching recent transaction', error);
      }
    },
  },
  created() {
    this.FetchAllCards();
    this.FetchRecerntTransactions();
  },
};
</script>

<style lang="scss" scoped>
  .cards {
    .cards-list {
      background-color: #0C365A;
      width: 100%;
      position: fixed;
      top: 0;
      z-index: -10;

      .logo {
        height: 56px;
        display: flex;
        justify-content: end;
        align-items: center;
        padding-right: 25px;

        img {
          height: 25px;
          width: 25px;
        }
      }

      .account-balance-label {
        font-family: 'Open Sans';
        font-weight: 600;
        font-size: 14px;
        color: #FFFFFF;
        padding-left: 25px;
        line-height: 19px;
        margin-bottom: 10px;
      }

      .account-row {
        padding: 0px 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        .account-balance {
          font-family: 'Open Sans';
          font-weight: 700;
          font-size: 24px;
          color: #FFFFFF;
          width: 50%;
          display: flex;
          align-items: center;
          .currency-symbol {
            background-color: #01D167;
            height: 22px;
            width: 40px;
            font-size: 12px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
          }
        }
        .new-card--add {
          color: #23CEFD;
          font-family: 'Open Sans';
          font-weight: 700;
          font-size: 13px;
          display: flex;
          img {
            height: 16px;
            width: 16px;
            margin-right: 5px;
          }
        }
      }
      .cards-tabs-container {
        .cards-tabs {
         padding: 0px 25px;
         display: flex;
         margin-bottom: 30px;
          .cards-tabs-label {
            font-family: 'Open Sans';
            font-weight: 400;
            font-size: 13px;
            color: #FFFFFF;
            margin-right: 33px;
            line-height: 20px;
            opacity: 0.5;
            &.card-tab--active {
              opacity: 1;
              font-weight: 700;
              border-bottom: 2px solid #23CEFD;
            }
          }
        }
        .my-debit-cards {
          padding: 0px 25px;
          margin-bottom: 50px;

          ::v-deep .VueCarousel-dot-container {
            margin-top: 0px !important;
            .VueCarousel-dot {
              margin-top: 0px !important;
            }
          }
        }
      }
    }
    .cards-actions {
      margin-top: 510px;
      background-color: #EDF3FF;
      height: 116px;
      border-radius: 25px 25px 0px 0px;
    }
    .cards-details {
      background-color: #FFFFFF;
      padding: 25px;
      .header-items {
        display: flex;
        align-items: center;
        img {
          margin-right: 12px;
        }
      }
    }
    .cards-transactions {
      background-color: #FFFFFF;
      padding: 0px 25px 25px;
      margin-bottom: 65px;
    }
  }
</style>
