 
var app = {
    data(){
        return {
            message : 'Lolxdwhy'
        }
    }
}
Vue.createApp(app).mount('#app');

var app2 = {
    data(){
        return {
            message :  'Сейчас ' + new Date().toTimeString()
        }
    }
}
Vue.createApp(app2).mount('#app2');

var app3 = {
    data(){
        return {
            seen : true,
        }
    }
}
Vue.createApp(app3).mount('#app3');
 
var app4 = {
    data(){
        return {
            seen: true,
            todos:[
                {text:'1'},
                {text:'2'},
                {text:'3'},
                {text:'4'},
                {text:'5',},
            ]
        }
    }
}
Vue.createApp(app4).mount('#app4');

var app5 = {
    data(){
        return {
            message: 'not dick'
        }
    },
    methods: {
        someFunc(){
            this.message = this.message.split('').reverse('').join('')
        }
    }
}

Vue.createApp(app5).mount('#app5');
 

var app6 = {
    data(){
        return {
            txt: ''
        }
    }
}


Vue.createApp(app6).mount('#app6');

var appTimer = {
    data(){
        return {
            time : '0'
        }
    },
    mounted(){
        setInterval(() => {  this.time++ }, 1000)
    }
}

Vue.createApp(appTimer).mount('#timer');