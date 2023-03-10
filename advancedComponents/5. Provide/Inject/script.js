const { createApp, defineAsyncComponent } = Vue


const app = Vue.createApp({

  data() {
    return {
      
    }
  },

}) 
.component('list',{
  data(){
    return{
      listData : ['Что-то надо будет сделать завтра','Вечером кофе купить','asdasdasd']
    }
  },
  // provide: {
  //   user: 'Daniil Kuvetov'
  // },
  // OR
  // provide() {
  //   return {
  //     user: "Daniil Kuvetov"
  //   }
  // },
  // OR use COMPOSITION API
  provide() {
    return {
      'user': Vue.computed(() => "Daniil Kuvetov")
    }
  }, 
  template: `<div> {{ listData.length }} </div>`
})
.component('stat',{
  inject: ['user'],
  mounted() {
    console.log(`Внедрённое свойство: ${this.$user}`) // > Внедрённое свойство: John Doe
  },
  template: `<div> </div>`
})
.mount('#app'); 