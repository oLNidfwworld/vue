

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
            }
        }
    }
}).mount('#app');

