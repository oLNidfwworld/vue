const app = Vue.createApp({
    data(){
        return {
            msg: 'Текст',
            msgOnce: 'Текст одноразка',
            html : '<div>Это хтмл </div>',
            isButtonDisabled : false,
            list : [
                { text : 'Текст1' },
                { text : 'Текст2' },
                { text : 'Текст3' },
            ], 
            aTagTmp : {  value : 'vk.com' , text : 'vk'},
            atagarg : 'href'
        }
    },
    methods: {
        alertClickOnIt(text){
            console.log(text);
        },
        onSubmit(){

        }
    },
}); 
var ebtn = app.component('e-btn',{
    data(){
        return{    
            className: 'dynamicClass'
        }
    },
    created() {
        console.log('created')
        this.debouncedClick = _.debounce(this.click, 500)
    },
    unmounted() {  
        console.log('unmounted')
        this.debouncedClick.cancel();
    },
    mounted() { 
        console.log('mounted')
    },
    methods:{
        click(){
             
        }
    },
    template : "<button class='staticClass ' :class='className' @click='debounceClick'> Кнопко </button>",
    
})
 
app.mount('#app')
