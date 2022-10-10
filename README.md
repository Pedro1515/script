## Script de ints

La función script en script.js recibirá un array de números enteros, por cada entero se harán varias validaciones que al cumplirse agregarán uno o mas string a un array.

### El script cumplirá con las siguientes reglas   

Si el numero es:   
divisible por 3 agrega 'Fizz'   
divisible por 5 agrega 'Buzz'   
divisible por 225 agrega 'FizzBuzz'

### Cada regla de divisibilidad tendrá como opcional las siguientes reglas

Si el numero incluye:   
'3' agrega 'Fizz'   
'5' agrega 'Buzz'   

### Caso de prueba

```
script([33, 55, 225, 532, 22]) = ["Fizz", "Buzz", "FizzBuzz", "Buzz", "Fizz", "Buzz"]

33 = 'Fizz';  -  (divisible por 3)
55 = 'Buzz';  -  (divisible por 5)
225 = 'FizzBuzz', 'Buzz';  -  (divisible por 3, 5 e incluye 5)
13545 = 'FizzBuzz', 'Fizz', 'Buzz';  -  (divisible por 3, 5 e incluye 3 y 5)
532 = 'Fizz', 'Buzz';  -  (incluye 3 y 5)
22 =  (vacio)  -  (no hace match con ninguna regla)
```