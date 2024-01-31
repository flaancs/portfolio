Cuando los desarrolladores se encuentran con la necesidad de implementar un bucle dentro de otro (operaciones cuadráticas) en su código, a menudo se preguntan si hay una forma de evitar la temida complejidad O(n²). Hoy, quiero compartir algunas estrategias para abordar este desafío y también hablar sobre cuándo es aceptable abrazar la complejidad cuadrática.

## Estrategias para Evitar la Complejidad Cuadrática

* **Replantear la Lógica:** Antes de sumergirnos en la codificación, es esencial comprender el problema a fondo. A veces, una nueva perspectiva o un enfoque diferente puede revelar soluciones más eficientes.

* **Preprocesamiento de Datos:** Utilizar estructuras de datos como tablas de hash o sets puede transformar operaciones que originalmente tomarían tiempo cuadrático en operaciones de tiempo constante o lineal, especialmente cuando se trata de búsquedas repetitivas.

* **Elegir la Estructura de Datos Adecuada:** Árboles y tablas de hash pueden ofrecer maneras más eficientes de almacenar y acceder a los datos, lo que puede reducir significativamente el tiempo de ejecución.

* **Divide y Vencerás:** Descomponer el problema en subproblemas más manejables puede llevar a soluciones más eficientes. Esta técnica es fundamental en algoritmos eficientes como quicksort o mergesort.

* **Programación Dinámica:** Es ideal para problemas que involucran tomar decisiones secuenciales óptimas. Almacenar los resultados de los subproblemas para evitar recalculos puede ser útil para solucionar un problema cuadrático.

## Ejemplo de solución Cuadrática:
```typescript
function findPairsQuadratic(arr: number[], target: number): number[][] {
    let pairs: number[][] = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

// Ejemplo de uso
const numbers = [1, 2, 3, 4, 5];
const target = 5;
console.log(findPairsQuadratic(numbers, target)); // Salida: [[1, 4], [2, 3]]
```
Este enfoque utiliza dos bucles anidados para revisar cada posible par, lo cual tiene una complejidad de tiempo O(n²).

## Ejemplo de solución Optimizada:
```typescript
function findPairsOptimized(arr: number[], target: number): number[][] {
    let seen = new Set<number>();
    let pairs: number[][] = [];

    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            pairs.push([num, complement]);
        }
        seen.add(num);
    }
    return pairs;
}

// Ejemplo de uso
const numbers = [1, 2, 3, 4, 5];
console.log(findPairsOptimized(numbers, target)); // Salida: [[4, 1], [3, 2]]
```
En este ejemplo optimizado, usamos un conjunto (Set) para almacenar los números ya vistos. Esto nos permite verificar en tiempo constante si el complemento de un número (necesario para alcanzar el objetivo) ya ha sido visto.

## Aceptando la Complejidad Cuadrática

Sin embargo, hay situaciones en las que la complejidad cuadrática es inevitable o incluso deseable. Por ejemplo, en teoría de grafos, ciertos algoritmos de búsqueda y problemas de procesamiento de datos complejos, la naturaleza del problema dicta que el mejor enfoque posible es cuadrático. En estos casos, la clave está en la optimización y en comprender las limitaciones prácticas:

* **Optimización de Código:** Incluso cuando un algoritmo es cuadrático, a menudo hay espacio para optimizar. Esto puede incluir mejorar la lógica interna de los bucles, eliminar cálculos redundantes y utilizar técnicas de codificación eficientes.

* **Entendiendo las Limitaciones Prácticas:** Es crucial conocer el tamaño y la naturaleza de los datos de entrada. En muchos casos, un algoritmo cuadrático es perfectamente aceptable para conjuntos de datos pequeños o medianos.

Uso de Recursos de Hardware: A veces, la solución no está en el algoritmo, sino en cómo y dónde se ejecuta. Utilizar recursos de hardware más potentes o técnicas de computación paralela puede hacer viable un algoritmo cuadrático.

## Ejemplo: Multiplicación de Matrices en TypeScript
```typescript
function multiplyMatrices(matrixA: number[][], matrixB: number[][]): number[][] {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let colsB = matrixB[0].length;
    let resultMatrix = new Array(rowsA).fill(0).map(() => new Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return resultMatrix;
}

// Ejemplo de uso
const matrixA = [[1, 2], [3, 4]];
const matrixB = [[2, 0], [1, 2]];
console.log(multiplyMatrices(matrixA, matrixB));
// Salida: [[4, 4], [10, 8]]
```
Este ejemplo muestra un caso en el que aceptamos la complejidad cuadrática (o cúbica, en este caso) debido a la naturaleza del problema y la simplicidad del algoritmo. La multiplicación de matrices es un caso clásico donde la implementación más sencilla y directa tiene una complejidad elevada, pero es ampliamente utilizada debido a su claridad y eficacia en un amplio rango de tamaños de matrices.
## Conclusión

En resumen, enfrentarse a operaciones cuadráticas en la programación es una oportunidad para explorar una variedad de enfoques y técnicas. Ya sea que encuentres una manera de evitar la complejidad cuadrática o aprendas a trabajar dentro de sus límites, cada desafío ofrece una oportunidad de crecimiento y aprendizaje. Y recuerda, no todas las soluciones tienen que ser perfectas; a veces, lo suficientemente bueno es exactamente lo que necesitas.

### *Un gran agradecimiento a ChatGPT 4 por la ayuda en este post, desde redactar y dar ejemplos de código hasta crear la imagen.*