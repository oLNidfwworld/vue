
//localy
const ComponentA = {
    template : '<p>А</p>',
    props: ['x','y','z']
  }
  const ComponentB = {
    template : '<p>B</p>',
    props: {
        // Просто проверка типа (`null` и `undefined` проходят проверку для любого типа)
        propA: Number,
        // Несколько допустимых типов
        propB: [String, Number],
        // Обязательное значение строкового типа
        propC: {
          type: String,
          required: true
        },
        // Число со значением по умолчанию
        propD: {
          type: Number,
          default: 100
        },
        // Объект со значением по умолчанию
        propE: {
          type: Object,
          // Для объектов или массивов значения по умолчанию
          // должны возвращаться из функции
          default() {
            return { message: 'привет' }
          }
        },
        // Пользовательская функция для валидации
        propF: {
          validator(value) {
            // Значение должно соответствовать одной из этих строк
            return ['success', 'warning', 'danger'].includes(value)
          }
        },
        // Функция с значением по умолчанию
        propG: {
          type: Function,
          // В отличие от объекта или массива по умолчанию, это не фабричная функция — это функция, служащая в качестве значения по умолчанию
          default() {
            return 'Функция по умолчанию'
          }
        }
      } 
  }
  const ComponentC = {
    template : '<p>C</p>',
    components: {
        'component-ca': ComponentCa
    }
  }
  const ComponentCa = {
    template : '<p>Ca</p>',
    
  }

const app = Vue.createApp({
    data() {
        return {
            
        }
    },
    components: {
        'component-a': ComponentA,
        'component-b': ComponentB,
        'component-c': ComponentC,
    }
});

app.component('global-comp',{
    template : '<p>glob</p>'
})

app.mount('#app')