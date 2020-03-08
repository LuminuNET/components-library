<template>
  <div>
    <lm-notification :activity="activity" :message="message" />
    <lm-alert :active="active" :message="message" />
    <div class="view container">
      <lm-tabs :tabs="tabs">
        <lm-card v-if="tabsIndex === 0" class="fake-content">
          <h2 class="title">Hello</h2>
          <p class="description">Helllooooooo there</p>
          <lm-seperator :mtop="20" :mbottom="10" />
          <h2 class="title">Nice okay</h2>
          <div class="btn-group">
            <lm-button @click.native="activity++" text="Open" type="error" size="big" />
            <lm-button @click.native="activity = -1" text="Close" type="error" size="big" />
            <lm-button @click.native="active = true" text="Alert" size="big" />
          </div>
          <lm-loader :size="20" />
        </lm-card>

        <lm-card v-if="tabsIndex === 1" class="fake-content">
          <h2 class="title">Good evening.</h2>
          <p class="description">This is tab number 2. Welcome!</p>
          <lm-seperator :mtop="20" :mbottom="10" />
          <div class="btn-group">
            <lm-button text="Hello" type="success" size="small" />
            <lm-button text="Bye" type="error" size="normal" />
          </div>
        </lm-card>
      </lm-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LmTabs from '@/components/layout/Tabs.vue';
import LmCard from '@/components/base/Card.vue';
import LmNotification from '@/components/base/Notification.vue';
import LmSeperator from '@/components/base/Seperator.vue';
import LmButton from '@/components/base/Button.vue';
import LmLoader from '@/components/base/Loader.vue';
import LmAlert from '@/components/base/Alert.vue';
import transmitter from '../transmitter';

export default Vue.extend({
  components: {
    LmCard,
    LmTabs,
    LmNotification,
    LmSeperator,
    LmButton,
    LmLoader,
    LmAlert,
  },
  data: () => ({
    activity: 0,
    tabsIndex: 0,
    message:
      'Description text here. Lorem ipsum dolor isit wakdmawm idwa iwd iawjdi jwoi jawdiojw iodj awidwd.',
    tabs: ['tab1', 'tab2', 'tab3'],
    active: true,
  }),
  mounted() {
    setTimeout(() => {
      transmitter.$on('LM_CHANGED_TAB', (index: number) => {
        this.tabsIndex = index;
      });
    }, 0);

    transmitter.$on(
      'LM_ALERT_RESPONSE',
      (status: { isSuccess: boolean; message: string; title: string }) => {
        this.active = false;
      }
    );
  },
});
</script>

<style lang="scss" scoped>
.fake-content {
  height: 400px;
  margin-bottom: 30px;
}

.btn-group {
  display: flex;
  justify-content: flex-end;

  > div {
    margin-left: 5px;
  }
}
</style>
