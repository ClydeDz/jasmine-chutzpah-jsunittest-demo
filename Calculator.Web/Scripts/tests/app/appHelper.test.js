/// <reference path="../../apphelper.js" />

describe("addition", function () {
    it("returns addition of two numbers", function() {
        expect(addition(6, 7)).toBe(13);
    });
    it("returns addition of two numbers where one number is a negative number", function ()  {
        expect(addition(6, -2)).toBe(4);
    });
});

describe("subtraction", function () {
    it("returns subtraction of two numbers", function ()  {
        expect(subtraction(8, 2)).toBe(6);
    });
    it("returns subtraction of two numbers where one number is a negative number", function ()  {
        expect(subtraction(6, -2)).toBe(8);
    });
});

describe("multiplication", function () {
    it("returns multiplication of two numbers", function () {
        expect(multiplication(6, 2)).toBe(12);
    });
    it("returns multiplication of two numbers where one number is a negative number", function () {
        expect(multiplication(6, -3)).toBe(-18);
    });
});

describe("division", function () {
    it("returns division of two numbers", function ()  {
        expect(division(8, 2)).toBe(4);
    });
    it("returns division of two numbers where one number is a negative number", function ()  {
        expect(division(8, -2)).toBe(-4);
    });
});
