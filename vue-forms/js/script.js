const app = new Vue({
    el: '#app',
    data: {
        msg: '',
        taMsg: '',
        opts: [
            {title: 'VueJS'},
            {title: 'React'},
            {title: 'Angular'},
            {title: 'Svelte'}
        ],
        rads: [
            {title: 'YouTube'},
            {title: 'Facebook'},
            {title: 'Twitter'},
        ],
        checks: [
            {title: 'Army'},
            {title: 'Air Force'},
            {title: 'Navy'},
            {title: 'Marines'}
        ],
        checkedBranch: [],
        selected: '',
        isSubmitted: false
    }
})