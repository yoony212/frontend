const getNum1 = () => {
  const num1 = document.getElementById('num1');
  const numberNum1 = Number.parseFloat(num1.value);
  return numberNum1;

};

const getNum2 = () => {
  const num2 = document.getElementById('num2');
  const numberNum2 = Number.parseFloat(num2.value);
  return numberNum2;
  

};

const showResult = (num) => {
  const box = document.getElementById('box');
  box.textContent = num;
};

const buttonAdd = document.getElementById('button-add');
const buttonSub = document.getElementById('button-sub');
const buttonMul = document.getElementById('button-mul');
const buttonDiv = document.getElementById('button-div');

buttonAdd.addEventListener('click', () => {
  const result = getNum1() + getNum2();
  showResult(result);
});

buttonSub.addEventListener('click', () => {
  const result = getNum1() - getNum2();
  showResult(result);
});

buttonMul.addEventListener('click', () => {
  const result = getNum1() * getNum2();
  showResult(result);
});

buttonDiv.addEventListener('click', () => {
  const result = getNum1() / getNum2();
  showResult(result);
});



