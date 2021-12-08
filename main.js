new Vue({
    el: "#app",
    data: {
        text: "",
        todos: [],
    },

    methods: {
        addTexts: function() {
            this.todos = this.text

        }
    }
})