const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World from VueJS',
        show: true,
        items: [
            {title: 'Learn Vue'},
            {title: 'Practice often'},
            {title: 'Developing with Jason is awesome'}
        ]
    },
    methods: {
        toggleShow() {
            this.show = !this.show
        }
    }
});