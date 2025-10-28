// Función auxiliar para mostrar resultados con animación
        function mostrarResultado(elementoId, mensaje) {
            const elemento = document.getElementById(elementoId);
            elemento.textContent = mensaje;
            elemento.classList.add('highlight');
            
            setTimeout(() => {
                elemento.classList.remove('highlight');
            }, 1000);
        }

        // Ejercicio 1: Suma de tres valores constantes
        function calcularSuma() {
            // Valores constantes predefinidos
            const num1 = 15;
            const num2 = 23;
            const num3 = 42;
            
            // Calcular la suma
            const suma = num1 + num2 + num3;
            
            // Mostrar el resultado
            mostrarResultado('resultadoSuma', 
                `La suma de los valores constantes (${num1}, ${num2}, ${num3}) es: ${suma}`);
        }
        
        // Ejercicio 2: Cuadrado de un número
        function calcularCuadrado() {
            // Obtener el valor del input
            const numero = parseFloat(document.getElementById('numeroCuadrado').value);
            
            // Verificar si se ingresó un número válido
            if (isNaN(numero)) {
                mostrarResultado('resultadoCuadrado', 
                    'Por favor, ingresa un número válido.');
                return;
            }
            
            // Calcular el cuadrado
            const cuadrado = numero * numero;
            
            // Mostrar el resultado
            mostrarResultado('resultadoCuadrado', 
                `El cuadrado de ${numero} es: ${cuadrado}`);
        }
        
        // Ejercicio 3: Promedio de calificaciones
        function calcularPromedio() {
            // Obtener los valores de los inputs
            const nombre = document.getElementById('nombreEstudiante').value;
            const calificacion1 = parseFloat(document.getElementById('calificacion1').value) || 0;
            const calificacion2 = parseFloat(document.getElementById('calificacion2').value) || 0;
            const calificacion3 = parseFloat(document.getElementById('calificacion3').value) || 0;
            
            // Verificar si se ingresó un nombre
            if (nombre.trim() === '') {
                mostrarResultado('resultadoPromedio', 
                    'Por favor, ingresa el nombre del estudiante.');
                return;
            }
            
            // Calcular el promedio
            const promedio = (calificacion1 + calificacion2 + calificacion3) / 3;
            
            // Mostrar el resultado con dos decimales
            mostrarResultado('resultadoPromedio', 
                `El promedio de ${nombre} es: ${promedio.toFixed(2)} puntos`);
        }
        
        // Ejercicio 4: Conversión de unidades
        function convertirUnidades() {
            // Obtener el valor del input
            const metros = parseFloat(document.getElementById('metros').value);
            
            // Verificar si se ingresó un número válido
            if (isNaN(metros)) {
                mostrarResultado('resultadoConversion', 
                    'Por favor, ingresa una cantidad válida en metros.');
                return;
            }
            
            // Realizar las conversiones
            const centimetros = metros * 100;
            const kilometros = metros / 1000;
            
            // Mostrar el resultado
            mostrarResultado('resultadoConversion', 
                `${metros} metros equivalen a ${centimetros.toLocaleString()} centímetros y ${kilometros} kilómetros.`);
        }
        
        // Ejercicio 5: Comparación de dos valores
        function compararValores() {
            // Obtener los valores de los inputs
            const valor1 = parseFloat(document.getElementById('valor1').value);
            const valor2 = parseFloat(document.getElementById('valor2').value);
            
            // Verificar si se ingresaron números válidos
            if (isNaN(valor1) || isNaN(valor2)) {
                mostrarResultado('resultadoComparacion', 
                    'Por favor, ingresa dos números válidos.');
                return;
            }
            
            // Determinar cuál es mayor y cuál es menor
            let mayor, menor;
            if (valor1 > valor2) {
                mayor = valor1;
                menor = valor2;
            } else if (valor2 > valor1) {
                mayor = valor2;
                menor = valor1;
            } else {
                // Si son iguales
                mostrarResultado('resultadoComparacion', 
                    `Ambos números son iguales: ${valor1}`);
                return;
            }
            
            // Calcular la diferencia
            const diferencia = mayor - menor;
            
            // Mostrar el resultado
            mostrarResultado('resultadoComparacion', 
                `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`);
        }
