new Vue({
    el: "#app",
    data: {
        text: "",
        todos: [],
    },

    methods: {
        addTexts: function() {
            this.todos.push({ name: this.text })
        }
    }
})