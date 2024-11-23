// Script para abrir y cerrar el select personalizado
document.addEventListener("DOMContentLoaded", () => {
    const selected = document.querySelector(".select-selected");
    const items = document.querySelector(".select-items");

    selected.addEventListener("click", () => {
        items.classList.toggle("select-hide");
        selected.classList.toggle("active");
    });

    items.addEventListener("click", (e) => {
        if (e.target.tagName === "DIV") {
            selected.textContent = e.target.textContent; // Actualiza el seleccionado
            selected.dataset.value = e.target.dataset.value;
            items.classList.add("select-hide");
        }
    });

    // Cierra el menú si se hace clic fuera
    document.addEventListener("click", (e) => {
        if (!e.target.matches(".select-selected")) {
            items.classList.add("select-hide");
        }
    });
});

// Paso 2: Función para realizar la operación
function realizarOperacion(num1, num2, operacion) {
    // Validamos y realizamos la operación seleccionada
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            // Manejo de error en la división por cero
            return "Error: División por cero no permitida.";
        }
        return num1 / num2;
    } else {
        // Manejo de error para operaciones inválidas
        return "Error: Operación no válida.";
    }
}

// Paso 3: Validaciones y cálculo
function calcular() {
    // Obtenemos los valores de los campos del HTML
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    // Obtenemos el valor de la operación desde el select personalizado
    const selected = document.querySelector(".select-selected");
    const operacion = selected.dataset.value; // Obtenemos el valor desde data-value

    // Validamos si los números son correctos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Por favor, ingrese números válidos.";
        return;
    }

    // Validamos si se ha seleccionado una operación
    if (!operacion) {
        document.getElementById("result").textContent = "Por favor, seleccione una operación.";
        return;
    }

    // Llamamos a la función para realizar la operación
    const resultado = realizarOperacion(num1, num2, operacion);

    // Mostramos el resultado en el contenedor del HTML
    document.getElementById("result").textContent = `Resultado: ${resultado}`;
}
