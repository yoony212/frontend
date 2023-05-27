let password_length = 8;
let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
function getPW() {
  function genLetter() {
    let length = Math.floor(Math.random() * 62);
    return letters[length];
  }
  let pw = [];
  for (let i = 0; i < password_length; i++) {
    let letter = genLetter();
    pw[i] = letter;
  }
  return pw.join('');
}
console.log(getPW());
