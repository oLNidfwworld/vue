const app = Vue.createApp({
  data(){
    return{
      title: 's',
      otherTitle: 'sss'
    }
  }
})
.component('custom-form',{
  emits: {
    click : null,
    submit : ( { login, password } ) => {
      if( login && password){
        return true;
      }else{
        return false;
      }
    }
  },
  methods: {
    submitForm(login,password){
      this.$emit('submit',{login,password})
    }
  },
})
.component('my-component', {
  props: {
    title: String, 
  },
   
  emits: ['update:title'],
  template: `
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)">
  `
})
.component('my-second-component', {
  props: {
    title: String, 
    titleModifiers:{
      default: () => ({})
    }
  },
  methods: {
    emitVal(e){
      let value = e.target.value;
      if(this.titleModifiers.capitalize){
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:title', value);
    }
  },
  emits: ['update:title'],
  template: `
    <input
      type="text"
      :value="title"
      @input="emitVal">
  `
})
.mount("#app");