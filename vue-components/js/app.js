Vue.component('button-counter', {
    data: function (){
        return{
            count: 0
        }
    },
    template: `
        <div>
            <button v-on:click="count++"> The button has been clicked: {{ count }} times </button>
        </div>
    `
})


const app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello from VueJS!'
    }
})