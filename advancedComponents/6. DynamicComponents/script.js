const homePageComponent  = {
    template : 
        '<div><div class="container"> Home page </div></div>',
}
const aboutPageComponent  = {
    template : 
        '<div><div class="container"> about page </div></div>',
}
const testPageComponent  = {
    template : 
        '<div><div class="container"> test page </div></div>',
}

const app = Vue.createApp({
    data() {
        return{
            tabs : [ 'Home', 'About', 'Test' ], 
            curTab : 'Home'
        }
    }, 
    computed : {
        currentTabComponent(){
            return this.curTab.toLowerCase() + '-page';
        }
    },
    components: {
        'home-page' :  homePageComponent,
        'about-page' : aboutPageComponent,
        'test-page' : testPageComponent,
    }

})
.mount('#app');

 