const app = Vue.createApp({

  data() {
    return {
      
    }
  },

})
.component('simple-slot',{
  template : "<div>Хелло <slot></slot></div>"
})
.component('initial-slot',{
  template : "<div>Слот <slot>по умолчанию</slot></div>"
})
.component('named-slot',{
  template : `<div class="container">
              <header name="header">
                <slot name="header"></slot>
              </header>
              <main name="default">
                <slot></slot>
              </main>
              <footer name="footer">
                <slot name="footer"></slot>
              </footer>
            </div>`  
})
.component('visibility-slots',{
  data(){
    return{
      digitsSlot : [ 1,2,3 ]
    }
  },
  template: `
    <ul>
      <li v-for="(item, index) in digitsSlot">
        <slot :item="item"></slot>
      </li>
    </ul>
  `
})
.mount('#app'); 