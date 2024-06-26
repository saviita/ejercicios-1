// - Crea una función llamada sayHello que reciba un nombre por parámetro y diga por consola "hola [nombre]".

function sayHello(name){
    console.log('Hola ' + name);
}

sayHello('Tati');



//- Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.

function calculateSquareArea(side) {
    console.log('Área del cuadrado', side * side);
}

calculateSquareArea(2);



//- Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura.

function calculateTriangleArea(base, height){
    console.log('Área del triangulo', (base * height) / 2);
}

calculateTriangleArea(5, 10);



//- Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio.

function calculateCircleArea(radius){
    console.log('Área del círculo', 2 * 3.14 * radius);
}

calculateCircleArea(4);



//- Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32.

function celsiusToFahrenheit(celsius){
    console.log('Celsius a Fahrenheit', celsius * 1.8 + 32);
}

celsiusToFahrenheit(30);



//- Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8.

function fahrenheitToCelsius(fahrenheit){
    console.log('Fahrenheit a Celsius', (fahrenheit - 32) / 1.8);
}

fahrenheitToCelsius(20);



//- Crea una función totalPrice que reciba un precio y le sume el IVA.

function totalPrice(price){
    console.log('Precio con IVA ' + price * 1.21);
}

totalPrice(10);



//- Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note].

function writeMessage(name, material, size, note){
    console.log(name, 'ha pedido una caja de', material, 'de tamaño', size, '.', note, '.');
}
writeMessage('Ana', 'helados', 'grande', 'De chocolate');