function Gerar() {
    a1 = document.calc.a1.value;
    r = document.calc.r.value;
    n = document.calc.n.value;
    tipoPA = document.calc.tipo[0].checked; // PA ou PG

    document.calc.resultado.value = "";
    resultado = "";

    if (isNaN(a1) || a1 == "") {
      alert("Digite o primeiro termo da progress�o");
      document.calc.a1.focus();
      return false;         
    }
    if (isNaN(r) || r == "") {
      alert("Digite a raz�o da progress�o");
      document.calc.r.focus();
      return false;         
    }
    if (isNaN(n) || n == "") {
      alert("Digite a quantidade de termos da progress�o");
      document.calc.n.focus();
      return false;         
    }

    termo = new Array();

    resultado = a1 + ", ";

    if (tipoPA) {   // se for PA     
      for (i = 2; i <= n; i++) {
        termo[i] = a1 * 1 + ((i - 1) * r);
        resultado += termo[i] + ", ";
      }          
    }
    else {
      for (i = 2; i <= n; i++) {
        termo[i] = a1 * Math.pow(r, i - 1);
        resultado += termo[i] + ", ";
      }        
    }
    resultado = resultado.substring(0, resultado.length - 2);  // elimina a �ltima v�rgula
    document.calc.resultado.value = resultado;
    return false;
  }