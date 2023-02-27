const app = Vue.createApp({
    data() {
        return {
            list: [
                { text: 'Запись 2', date: '24.02.2023' },
                { text: 'Запись 1', date: '22.02.2023' },
            ],
            someObject: {
                'Имя' : 'Василий',
                'Описание' : 'Работаю на заводе с 14',
                'Возраст': '44'
            },
            indexedList:[
                { id: 1, info : 'someInfo' },
                { id: 2, info : 'someInfo' },
                { id: 3, info : 'someInfo' },
                { id: 4, info : 'someInfo' },
                { id: 5, info : 'someInfo' },
                { id: 6, info : 'someInfo' },
                { id: 7, info : 'someInfo' },
            ]
        }
    },
    methods: {
        pushToList(){
            this.list.push( { text: 'Запись N', date: 'NN.NN.NNNN' } )
        }, 
    },
    computed: {
        
    }
}).mount('#app');