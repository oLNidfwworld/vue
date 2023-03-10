const app = Vue.createApp({
  data(){
    return{

    }
  }
}).component("some-card",{
  created(){
    console.log(this.$attrs)
  },
  template: `<div class='card'>  <div class='title'> Титул </div> <div class='title'> Текст </div> </div>`
}).component("other-card",{
  created(){
    console.log(this.$attrs)
  },
  inheritAttrs: false,
  template: `<div class='otherCard'>  <div class='title'> Титул другой карточки </div> <div class='title'> Другой компонент но класс не подтянулся </div> </div>`
}).component('custom-layout', { 
  inheritAttrs: false,
  template: `
    <header>...</header>
    <main v-bind="$attrs">В этом случае при нескольких корневых элементах, лучше делать через v-bind, так же можно использовать при выключенном наследовании</main>
    <footer>...</footer>
  `
})

.mount('#app');