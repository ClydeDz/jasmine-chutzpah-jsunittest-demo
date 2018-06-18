describe("addition", () => {
    it("returns addition of two numbers", () => {
        expect(addition(6, 7)).toBe(13);
    });
    it("returns addition of two numbers where one number is a negative number", () => {
        expect(addition(6, -2)).toBe(4);
    });
});

describe("subtraction", () => {
    it("returns subtraction of two numbers", () => {
        expect(subtraction(8, 2)).toBe(6);
    });
    it("returns subtraction of two numbers where one number is a negative number", () => {
        expect(subtraction(6, -2)).toBe(8);
    });
});

describe("multiplication", () => {
    it("returns multiplication of two numbers", () => {
        expect(multiplication(6, 2)).toBe(12);
    });
    it("returns multiplication of two numbers where one number is a negative number", () => {
        expect(multiplication(6, -3)).toBe(-18);
    });
});

describe("division", () => {
    it("returns division of two numbers", () => {
        expect(division(8, 2)).toBe(4);
    });
    it("returns division of two numbers where one number is a negative number", () => {
        expect(division(8, -2)).toBe(-4);
    });
});
