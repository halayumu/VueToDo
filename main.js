new Vue({
    el: "#app",
    data: {
        text: "",
        todos: [],
    },

    methods: {
        addTexts: function() {
            this.todos.push(this.text)
        }
    }
})