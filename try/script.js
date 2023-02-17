 

var appTmp = {
    data(){
        return {
            listItems : [
                {id: '1'},
                {id: '2'},
                {id: '3'},
            ]
        }
    } 
}

var app = Vue.createApp(appTmp);
app.component('item-comp',{
    template : '<div> {{ item.id }} </div>',
    props: ['item']
});
app.mount('#app');