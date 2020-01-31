<template>
  <div ref="notification" class="notification" :style="{ fontSize: fontSize + 'px' }">
    <slot>
      <p class="notification__content">{{ message }}</p>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.notification {
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 24px;
  color: #202020;
  background: rgba(226, 226, 226, 0.9);
  padding: 20px;
  text-align: center;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
  transition: all 0.1s ease-in-out;
  overflow-y: hidden;
  opacity: 0;
  z-index: -1;

  &.active {
    opacity: 1;
    padding-top: 20px;
    padding-bottom: 20px;
    z-index: 10000;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LmNotification',
  props: {
    message: {
      type: String,
      required: true,
    },
    activity: {
      type: Number,
      default: 0,
    },
    timeout: {
      type: Number,
      default: 2500,
    },
    fontSize: {
      type: Number,
      default: 24,
    },
  },
  data: () => ({
    notification: {} as HTMLDivElement,
    timeoutFunction: {} as number,
  }),
  methods: {
    openNotification() {
      this.notification.classList.add('active');
    },
    isActiveNotification(): boolean {
      return this.notification.classList.contains('active');
    },
    closeNotification() {
      this.notification.classList.remove('active');
    },
    updateNotification() {
      this.notification = this.$refs.notification as HTMLDivElement;
    },
  },
  watch: {
    activity(newValue, oldValue) {
      this.updateNotification();

      if (newValue < 0) {
        /**
         * if activity below 0, clear the remove timeout and close the function
         */
        clearTimeout(this.timeoutFunction);
        this.closeNotification();
      } else {
        /**
         * otherwise:
         * 1. clear the active timeout
         * (2.) set a new timeout
         * 3. close the notification
         * (4.) bind the timeout to close the notification
         *
         * *(n.) => instructions not instantly executed
         */
        clearTimeout(this.timeoutFunction);

        setTimeout(
          () => this.openNotification(),
          this.isActiveNotification() ? 100 : 0
        );

        this.closeNotification();

        this.timeoutFunction = setTimeout(() => {
          this.closeNotification();
        }, this.timeout);
      }
    },
  },
});
</script>
