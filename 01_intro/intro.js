// Выполнить код в консоль
// node .\01_intro\intro.js
// Своя функция для тестирования 
function expect(value) {
    return {
        toBe: exp => {
            if(value === exp) {
                console.log('Success');
            } else {
                console.error(`Value is ${value}, but expectation is ${exp}`);
            }
        }
    }
}

const sum = (a, b) => a + b;

const nativNull = () => null;

console.log(sum(41, 1));
expect(sum(41, 1)).toBe(42); // Success
expect(sum(41, 1)).toBe(43); // Value is 42, but expectation is 43

// Экспорт функций 
module.exports = {sum, nativNull} 

