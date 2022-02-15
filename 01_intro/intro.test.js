// Запустить тест: npm test
// Импорт функции
const {sum, nativNull} = require('./intro');

// describe описали функцию, объединили тесты 
describe('Sum function:', () => { 
    test('should return sum of two values', () => {
        expect(sum(1,3)).toBe(4);
        expect(sum(1,3)).toEqual(4);
    });
    
    test('should return value correctly comparing to other values', () => {
        expect(sum(2,3)).toBeGreaterThan(4); // 5 > 4
        expect(sum(2,3)).toBeGreaterThanOrEqual(5); // 5 == 5
        expect(sum(2,3)).toBeLessThan(10); // 5 < 10
        expect(sum(2,3)).toBeLessThanOrEqual(5); 
    });
    
    test('should sum 2 float values correctly', () =>{
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3); // близок к 0.3 
    });
})

describe('Native null function:', () => {

    test('should return false value null', () => {
        expect(nativNull()).toBe(null); // null
        expect(nativNull()).toBeNull(); // получаем null
        // expect(nativNull()).toBeNan(); // получаем null
        expect(nativNull()).toBeFalsy(); // undefined, null, 0, '' falsy значения, блок if не сработает 
        expect(nativNull()).toBeDefined(); // значение определено 
        expect(nativNull()).not.toBeTruthy(); // не пустая строка, не undefined, не null
        expect(nativNull()).not.toBeUndefined();
    })

});




