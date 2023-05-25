letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const app = new Vue({
  el: '#example',
  data: {
    password_length: 8,
  },
  methods: {
    genPW() {
      function genLetter() {
        let length = Math.floor(Math.random() * 62);
        return letters[length];
      }
      let pw = [];
      for (let i = 0; i < this.password_length; i++) {
        let letter = genLetter();
        pw[i] = letter;
      }
      return pw.join('');
    },
  },
});
