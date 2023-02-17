

const app = Vue.createApp({
    data(){
        return{
            cubes : [
                { content: '1', isActive: true, isHighligted: false },
                { content: '2', isActive: true, isHighligted: true },
                { content: '3', isActive: false, isHighligted: false },
            ],
            isActive:true,
            classObject: {
                active: true,
                highlight: true
            },

        }
    },
    computed:{
        compClass(){
             return this.isActive?'computedActive':' '
        }
    }
}).mount('#app');

const  otherApp = Vue.createApp({
    data(){
        return{
            fontSize: '30px',
            color:'red'
        }
    }
}).component('custom-component',{
    data(){
        return{
            className: 'componentClass', 
        }
    },
    template: '<p :class="className" class="class1 class2"> Я компонент </p>'
}).mount('#other-app')