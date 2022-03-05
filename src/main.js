import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.directive('dest', {
    bind(el) {
        el.style.backgroundColor = 'green';
    },
});

new Vue({
    render: (h) => h(App),
}).$mount('#app');
