const app = Vue.createApp({
    data() {
        return {
            counter:  localStorage.getItem('counter') || 0,
            onlyOnKeyEnter : false
        }
    },
    methods:{
        plusCounter(){
            this.counter ++;
        },
        logger(...t){
            console.log(t)
        }
    },
    watch:{
        counter($new,old){ 
            localStorage.setItem('counter',this.counter)
        }
    }
}).mount('#app') 