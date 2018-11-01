var vm = new Vue({
    el: '#encryptor',
    data: {
        message: '',
    },
    computed: {
        reversedMessage: function () {
        var reversed = this.message.split(' ').reverse().join(' ');
        return reversed.split("").reverse().join("").split(" ").reverse().join(" ");
    }}});