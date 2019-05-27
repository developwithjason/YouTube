const app = new Vue({
    el: '#app',
    data: {
        showing: false
    },
    methods: {
        toggleShowing() {
            this.showing = !this.showing;
        }
    }
})