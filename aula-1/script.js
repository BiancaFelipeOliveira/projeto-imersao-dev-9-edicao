function conversorDolar() {
    const valor = document.getElementById("input").value;
    dolar = 5.63;
    resultado = dolar * valor;
    document.getElementById("resultado").innerHTML =
      "O valor em reais convertido para dólar é: US$ " + resultado.toFixed(2);
  }
  
  function conversorEuro() {
    const valor = document.getElementById("input").value;
    euro = 6.23;
    resultado = euro * valor;
    document.getElementById("resultado").innerHTML =
      "O valor em reais convertido para euro é: €" + resultado.toFixed(2);
  }
  
  function conversorLibra() {
    const valor = document.getElementById("input").value;
    libra = 7.37;
    resultado = libra * valor;
    document.getElementById("resultado").innerHTML =
      "O valor em reais convertido para libra é: £ " + resultado.toFixed(2);
  }
  
  function conversorWon() {
    const valor = document.getElementById("input").value;
    won = 0.0039;
    resultado = won * valor;
    document.getElementById("resultado").innerHTML =
      "O valor em reais convertido para won é:  ₩ " + resultado.toFixed(2);
  }
  