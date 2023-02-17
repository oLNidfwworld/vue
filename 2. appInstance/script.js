
var app_tmp = {
    data(){
        return {
            list : [{id: 1}, {id: 2}]
        }
    }
}

var component_tmp = {
    template : '<span> {{ item.id }} </span>',
    props: ['item']
}

const app = Vue.createApp(app_tmp).component('olni-cmp',component_tmp);
const vm = app.mount('#app');   