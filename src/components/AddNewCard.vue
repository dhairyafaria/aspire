<template>
  <div>
    <modal :show="showModal">
      <template #header>
        <h3>Add New Card</h3>
      </template>
      <template #body>
        <form>
          <label>Add Name for Card:</label>
          <input type="text" v-model="cardName" />
          <div class="validation-message"><span v-if="error">Please enter valid name.</span></div>
        </form>
      </template>
      <template #footer>
        <button class="modal-cancel-button"
        @click="CloseModal"
        >
        Cancel
        </button>
        <button class="modal-default-button"
        @click="SaveNewCard"
        >
        Save
        </button>
      </template>
    </modal>
  </div>
</template>
<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'AddNewCard',
  data() {
    return {
      openModal: this.showModal,
      cardName: this.name,
      error: false,
    };
  },
  components: {
    Modal,
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
    },
  },
  methods: {
    CloseModal() {
      this.$emit('closeModal');
    },
    SaveNewCard() {
      this.error = false;
      const regexp = new RegExp(/^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/g);
      if (regexp.test(this.cardName)) {
        this.$emit('saveNewCard', this.cardName);
      } else {
        this.error = true;
      }
    },
  },
  watch: {
    showModal() {
      this.openModal = this.showModal;
    },
  },
};
</script>
<style lang="scss" scoped>
  .validation-message {
    color: red;
    height: 18px;
  }
</style>
