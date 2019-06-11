Vue.component('card-slot', {
    template:`
        <div>
            <div class="heading">
                <slot name="heading"></slot>
            </div>
            <slot></slot>
            <div class="footer">
                <slot name="footer"></slot>
            </div>
        </div>
    `
})

const app = new Vue({
    el: '#app',
    data: {
        msg: 'Digging into Slots!'
    }
})