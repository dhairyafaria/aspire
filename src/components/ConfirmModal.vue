<template>
  <modal :show="openModal">
    <template #header>
    <h3>Please Confirm</h3>
    </template>
    <template #body>
    <h4>Please confirm that you want to delete this card.</h4>
    </template>
    <template #footer>
    <button class="modal-cancel-button"
        @click="CloseModal"
    >
        Cancel
    </button>
    <button class="modal-default-button"
        @click="DeactivateCard"
    >
        OK
    </button>
    </template>
  </modal>
</template>
<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'ConfirmModal',
  data() {
    return {
      openModal: this.showModal,
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
  },
  methods: {
    CloseModal() {
      this.$emit('closeModal');
    },
    DeactivateCard() {
      this.$emit('deactivateCard');
    },
  },
  watch: {
    showModal() {
      this.openModal = this.showModal;
    },
  },
};
</script>
