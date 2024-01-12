const factorial = (n) => (n !== 1 ? n * factorial(n - 1) : n);

console.log("Факториал: ", factorial(50));

const getIntRange = (from, to, result = []) => {
  if (from > to) return result;

  result.push(from);

  return getIntRange(from + 1, to, result);
};

console.log("Диапазон чисел:", getIntRange(0, 18));

const sumIntArray = (arr, count = 0, result = 0) => {
  if (arr.length === count) return result;

  result += arr[count];
  return sumIntArray(arr, (count += 1), result);
};

console.log(
  "Суммирование элементов в массиве:",
  sumIntArray([2, 3, 4, 5, 6, 7])
);

const exp = (x, result=0) => {

    if(result) return result
    return exp(x, Math.E ** x)
}

console.log('Экспонента числа:',exp(5), '\nВстроенная функция вычисления экспоненты: ', Math.exp(5))



const fib = (n) => {
    if( n === 1  || n === 0)  return n
    return fib(n - 1) + fib(n - 2)
}

console.log('Генерация чисел фиббоначи:',fib(10))