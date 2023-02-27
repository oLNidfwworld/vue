// var CatalogItem = (
//     'catalog-item',
//     {  
//         template :  `<div >
//                         <div> {{ todo.name }}</div>
//                         <div>Image</div>
//                         <div> {{ todo.desc }}</div>
//                     </div>`.toString(),
//         props: ['todo']
//     }
// )

// var app = { 
//     data(){
//         return {
//             someList:[
//                 {id:0, name:'Apple', desc:'some desc 1'},
//                 {id:0, name:'Pelmeni', desc:'some desc 2'},
//                 {id:0, name:'Ham', desc:'some desc 2'},
//             ]
//         }
//     },
//     components : {
//         CatalogItem // in DOM transcripting into catalog-item aka bem drochilnya
//     }
// }

// Vue.createApp(app).mount('#app');
 

 
var appTmp = { 
    data(){
        return {
            someList:[
                {id:0, name:'Apple', desc:'some desc 1'},
                {id:0, name:'Pelmeni', desc:'some desc 2'},
                {id:0, name:'Ham', desc:'some desc 2'},
            ]
        }
    },
     
}
var app = Vue.createApp(appTmp);

app.component(
    'catalog-item',
    {  
        template :  `<div >
                        <div> {{ todo.name }}</div>
                        <div>Image</div>
                        <div> {{ todo.desc }}</div>
                    </div>`.toString(),
        props: ['todo']
    }
)

app.mount('#app')