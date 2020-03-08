<template>
  <div class="alert" :class="{ active }">
    <div class="overlay"></div>
    <div class="container">
      <lm-card class="card">
        <div class="top">
          <h2 class="title">{{ title }}</h2>
          <p class="description">{{ message }}</p>
        </div>
        <div class="bottom">
          <lm-seperator />
          <div class="btn-group">
            <lm-button
              @click.native="sendAlertResponse('cancel');"
              :text="$t('alert.cancel')"
              type="error"
              size="big"
            />
            <lm-button
              @click.native="sendAlertResponse('continue');"
              :text="$t('alert.continue')"
              type="success"
              size="big"
            />
          </div>
        </div>
      </lm-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { transmitter } from '../../transmitter';

import LmCard from './Card.vue';
import LmSeperator from './Seperator.vue';
import LmButton from './Button.vue';

export default Vue.extend({
  components: {
    LmCard,
    LmSeperator,
    LmButton,
  },
  data: () => ({
    status: {
      isSuccess: false,
    } as any,
  }),
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: 'alert',
    },
    message: {
      type: String,
      default: 'areYouSure',
    },
  },
  methods: {
    sendAlertResponse(type: 'cancel' | 'continue') {
      switch (type) {
        case 'cancel':
          this.status.isSuccess = false;
          break;
        case 'continue':
        default:
          // why is this tslint rule even a thing?
          this.status.isSuccess = true;
          break;
      }

      this.status = {
        ...this.status,
        message: this.message,
        title: this.title,
      };

      transmitter.$emit('LM_ALERT_RESPONSE', this.status);
    },
  },
});
</script>

<style lang="scss" scoped>
@import '~@luminu/core/scss/variables';

.alert:not(.active) {
  opacity: 0;
  z-index: -1;
}

.alert {
  position: fixed;
  z-index: 150;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 0.1s opacity;

  .overlay {
    position: fixed;
    top: inherit;
    bottom: inherit;
    left: inherit;
    right: inherit;

    background: rgba($color: #000, $alpha: 0.6);
  }

  .container {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .card {
      width: 320px;
      min-height: 180px;
      opacity: 0;
      position: relative;

      @media screen and (max-width: $breakpoint) {
        width: 100%;
      }

      .top {
        margin-bottom: 50%;
      }

      .btn-group {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        > *:not(:first-child) {
          margin-left: 5px;
        }
      }
    }
  }

  &.active .card {
    opacity: 1;
  }
}
</style>
