// new Vue({
//     el: "#app",
//     data: {
//         text: "",
//         todos: [],
//     },

//     methods: {
//         addTexts: function() {
//             this.todos.push({ name: this.text })
//         }
//     }
// })

const app = new Vue({
    el: '#app',
    data() {
        return {
            inputText: '', //テキストデータの代入
            lists: [] //空配列
        };
    },

    methods: {
        onAdd() {
            if (this.inputText) {
                this.lists.push({ //配列代入
                    name: this.inputText, //name変数にテキストデータ代入
                    // isDone: false,
                });
                // this.inputText = '';
            }
        }
    }
});