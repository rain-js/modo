import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('m-button', Button)
Vue.component('g-icon', Icon)

new Vue({
    el: '#app',
})