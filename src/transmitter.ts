import Vue from 'vue';

/**
 * Only use this as an event transmitter,
 * if dependants need to receive calls from the component library.
 */
const transmitter = new Vue();

export { transmitter };
export default transmitter;
