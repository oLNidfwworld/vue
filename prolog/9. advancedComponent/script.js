const app = Vue.createApp({
    data() {
        return {
            postsData : [
                { id: 1,   title: 'Блог 1' ,  text: 'asdwfdasdasd' },
                { id: 2,   title: 'Блог 2' ,  text: 'asdasnsdb' },
                { id: 3,   title: 'Блог 3' ,  text: 'asdwasdaszxasdasd' }, 
            ],
            postFontSize: 10,
            someValue: "initialValue",
            visibility : true,
            btnStr : 'Показать'
        }
    },
    methods: {
        toggleVisibility(){
            this.visibility = !this.visibility;
            console.log(this.visibility)
        }
    },
    watch:{
        visibility(){
            if(this.visibility == false){
                this.btnStr = 'Показать'
            }else{
                this.btnStr = 'Убрать'
            }
        }
    }

})
.component('blog-post', {
    props: ['title'],
    emits: ['enragleText'],
    template: `<h4>{{ title }}</h4><button @click=$emit("enragleText")>Увеличь текст</button>`,
  })
.component('custom-input',{
    props : ['modelValue'],
    emits: ['update:modelValue'],
    template: `<input @input="$emit('update:modelValue',$event.target.value)" v-model="modelValue">`
})
.component('alertation',{
    template : `<div>Alert!</div><slot></slot>`
})
.mount('#app');

 