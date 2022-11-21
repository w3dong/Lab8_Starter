// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// test phone number
test('123-456-7890 is a valid phone number', () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test('934-456-7120 is a valid phone number', () => {
    expect(functions.isPhoneNumber("934-456-7120")).toBe(true);
});
test('12 is not a valid phone number', () => {
    expect(functions.isPhoneNumber("12")).toBe(false);
});
test('12380 is not a valid phone number', () => {
    expect(functions.isPhoneNumber("12380")).toBe(false);
});

// test email
test('w3@ucsd.edu is a valid email', () => {
    expect(functions.isEmail("w3@ucsd.edu")).toBe(true);
});
test('w3@gmail.com is a valid email', () => {
    expect(functions.isEmail("w3@gmail.com")).toBe(true);
});
test('w3dong is not a valid email', () => {
    expect(functions.isEmail("w3dong")).toBe(false);
});
test('leetcode@ is not a valid email', () => {
    expect(functions.isEmail("leetcode@ ")).toBe(false);
});

// test strong password
test('cat_love is a valid strong password', () => {
    expect(functions.isStrongPassword("cat_is_good")).toBe(true);
});
test('coffee_lattee is a valid strong password', () => {
    expect(functions.isStrongPassword("coffee_lattee")).toBe(true);
});
test('12345 is not a valid strong password', () => {
    expect(functions.isStrongPassword("12345")).toBe(false);
});
test('ab is not a valid strong password', () => {
    expect(functions.isStrongPassword("ab")).toBe(false);
});

// test date
test('11/20/2022 is a valid date', () => {
    expect(functions.isDate("11/20/2022")).toBe(true);
});
test('3/2/2002 is a valid date', () => {
    expect(functions.isDate("3/2/2002")).toBe(true);
});
test('300/2/2002 is a invalid date', () => {
    expect(functions.isDate("300/2/2002")).toBe(false);
});
test('3/2/200982 is a invalid date', () => {
    expect(functions.isDate("3/2/200982")).toBe(false);
});

// test hex color
test('FF5733 is a valid hex color', () => {
    expect(functions.isHexColor("FF5733")).toBe(true);
});
test('FFFFFF is a valid hex color', () => {
    expect(functions.isHexColor("FFFFFF")).toBe(true);
});
test('AB is a invalid hex color', () => {
    expect(functions.isHexColor("AB")).toBe(false);
});
test('0 is a invalid hex color', () => {
    expect(functions.isHexColor("0")).toBe(false);
});