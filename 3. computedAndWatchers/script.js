const app = Vue.createApp({
    data() {
        return {
            author: {
                name: 'John Doe',
                books: [
                    'Vue 2 - Advanced Guide',
                    'Vue 3 - Basic Guide',
                    'Vue 4 - The Mystery'
                ]
            },
            counter: 0,
            alert: ''
        }
    },
    computed: {
        isBookExists(){
            return this.author.books.length<=0 ? 'Пусто' : 'Книжки есть'
        },
        authorName:{
            get(){
                return this.author.name
            },
            set(val){
                this.author.name = val;
            }
        }

    },
    watch:{
        //не совсем удачный пример (лучше используя ajax вообще в другом случае)
        counter(){
            if(this.counter >=3){
                this.alert =  'Ты явно не из догадливых если до сих пор хуяришь по этой надписи'
            }
        }
    },
    methods: {
        onClckFunc(){
            this. authorName = 'piska';
            this.counter++;
        },

    }
}).mount('#app');