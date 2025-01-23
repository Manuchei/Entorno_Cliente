
let n = 1
let s = 1
    function mostrarMensajeExterno()
    {
        alert('Este es un mensaje desde JavaScript Externo!')
    }

    function mostrarMensajeExterno2()
    {
        if (n % 2 == 0){
            alert("Es Par N: " + n)
        } else {
            alert("Es Impar N: " + n)
        }
       n++
        }
        function mostrarMensajeExterno3()
        {
            if (n === s) {
                alert("Son realmente iguales")
            }
            else
            {
                alert("Son distintos")
            }
            s="1"
        }

        // dos = compara solo el valro y 3 = compara valor y tipo
    