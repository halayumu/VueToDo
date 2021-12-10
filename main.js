new Vue({
    el: "#app",
    data: {
        text: "", //テキストデータの代入
        lists: [] //空配列
    },

    methods: {
        addTexts: function() {
            if (this.text) {
                this.lists.push({ //空配列にテキストデータを代入
                    name: this.text, //name変数にテキストデーター代入
                });
            }
        }
    }
});