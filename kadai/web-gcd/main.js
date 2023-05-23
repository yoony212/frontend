$('#button-gcd').on('click', () => {
  const num1 = $('#num1').val();
  const num2 = $('#num2').val();
  
  function $euclidean(n1, n2){
    let a = n1;
    let b = n2;
    let c;
    while(b !== 0) {
      c = a % b;
      a = b;
      b = c;  
    }
    return a;
  };
  
  let result = $euclidean(num1, num2);
  $('#box').text(result);
});
