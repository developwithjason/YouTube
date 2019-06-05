Vue.component('my-message', {
    props: {
        message: String
    },
    template: `
        <div>
            <h2>Hello {{ message }}</h2>
        </div>
    `
})

const app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello World!'
    }
})