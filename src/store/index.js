import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: '89bd9d8d-69a6-474e-8f46-7cc8796ed151',
      balance: 3000,
      cards: [],
    },
  },
  mutations: {
    AddCard(state, payload) {
      state.user.cards.push(payload);
    },
    AddCards(state, payload) {
      state.user.cards = payload;
    },
    SetFreezeCard(state, payload) {
      state.user.cards[payload.currentCardSlide].isCardFreeze = payload.isFreezeCard;
    },
    SetCardCancelled(state, cardIndex) {
      state.user.cards[cardIndex].isCancelled = true;
    },
  },
  actions: {
    async FetchAllCards(context) {
      if (context.state.user.cards.length <= 0) {
        try {
          const response = await axios.get(`/user/${context.state.user.id}/cards`);
          context.commit('AddCards', response.data.cards);
        } catch (error) {
          console.error('Error while fetching all cards: ', error);
        }
      }
    },
  },
  getters: {
    GetAllCards: (state) => state.user.cards,
  },
});
