function factorial(n) {
    let num = 1;
    for (let i = 2; i <= n; i++) {
        num *= i;
    }
    return num;
}

console.log(factorial(5))


function requiresiveFactorial(n) {
    if (n === 0) return 1;
    return n * requiresiveFactorial(n - 1);
}