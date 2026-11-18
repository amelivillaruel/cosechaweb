
        const inputDividir = document.getElementById('numeroDividir');
        const inputMultiplicar = document.getElementById('numeroMultiplicar');
        const textoDivision = document.getElementById('resultadoDivision');
        const textoFinal = document.getElementById('resultadoFinal');

        function calcular() {
            const numeroInicial = parseFloat(inputDividir.value) || 0;

            const divisionExacta = numeroInicial / 12;

            textoDivision.textContent = divisionExacta.toFixed(2);

            const multiplicador = parseFloat(inputMultiplicar.value) || 0;

            const resultadoTotal = divisionExacta * multiplicador;

            textoFinal.textContent = resultadoTotal.toFixed(2)+" BS 💵";
        }

        inputDividir.addEventListener('input', calcular);
        inputMultiplicar.addEventListener('input', calcular);