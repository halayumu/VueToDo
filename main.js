new Vue({
    el: "#app",
    data: {
        text: "",
        todos: [],
    },
    computed: {
        addTexts: function() {
            return this.todos = this.text;
        }
    }
})