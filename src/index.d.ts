import Vue, { VueConstructor } from 'vue';
import { CombinedVueInstance } from 'vue/types/vue';

export const LmHeader: VueConstructor<Vue>;
export const LmStickyHeader: VueConstructor<Vue>;
export const LmFooter: VueConstructor<Vue>;
export const LmTabs: VueConstructor<Vue>;

export const LmCard: VueConstructor<Vue>;
export const LmNotification: VueConstructor<Vue>;
export const LmSeperator: VueConstructor<Vue>;
export const LmButton: VueConstructor<Vue>;
export const LmLoader: VueConstructor<Vue>;

export const transmitter: CombinedVueInstance<
  Vue,
  object,
  object,
  object,
  Record<never, any>
>;
