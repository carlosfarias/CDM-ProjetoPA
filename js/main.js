function Gerar() {
        a1 = document.calc.a1.value;
        r = document.calc.r.value;
        n = document.calc.n.value;
        document.calc.resultado.value = "";
        resultado = "";

        if (isNaN(a1) || a1 == "") {
          alert("Digite o primeiro termo da progressão");
          document.calc.a1.focus();
          return false;         
        }
        if (isNaN(r) || r == "") {
          alert("Digite a razão da progressão");
          document.calc.r.focus();
          return false;         
        }
        if (isNaN(n) || n == "") {
          alert("Digite a quantidade de termos da progressão");
          document.calc.n.focus();
          return false;         
        }

        termo = new Array();

        resultado = a1 + ", ";

         // se for PA     
          for (i = 2; i <= n; i++) {
            termo[i] = a1 * 1 + ((i - 1) * r);
            resultado += termo[i] + ", ";
          }             

        resultado = resultado.substring(0, resultado.length - 2);  // elimina a última vírgula
        document.calc.resultado.value = resultado;
        return false;
      }