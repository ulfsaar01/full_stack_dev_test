describe('Problem 1 Unit-Test - multiplies two numbers without using the multiply operator', ()=>{
  it('Normal multiple', ()=>{
    let a = 10, b = 20, c = a*b;
    expect(multipleFunc(a, b)).toBe(c);
  })

  it('Zero * one number', ()=>{
    let a = 0, b = 20, c = a*b;
    expect(multipleFunc(a, b)).toBe(c);
  })

  it('Negative number * positive number', ()=>{
    let a = -10, b = 20, c = a*b;
    expect(multipleFunc(a, b)).toBe(c);
  })

  it('Positive number * negative number', ()=>{
    let a = 10, b = -20, c = a*b;
    expect(multipleFunc(a, b)).toBe(c);
  })

  it('Float number * float number', ()=>{
    let a = 10.5, b = 20.5, c = a*b;
    expect(multipleFunc(a, b)).toBe(c);
  })
})

describe('Problem 2 Unit-Test - Get the largest number of an array but iterating the array only once', ()=>{
  it('Normal case', ()=>{
    let a = [10, 20, 40, 5, 100], result = 100;
    expect(getLargestnumber(a)).toBe(result);
  })

  it('One length case', ()=>{
    let a = [10], result = 10;
    expect(getLargestnumber(a)).toBe(result);
  })

  it('Empty array case', ()=>{
    let a = [], result = "Empty Array";
    expect(getLargestnumber(a)).toBe(result);
  })
})

describe('Problem 3 Unit-Test - Iterating an array just once write a function that removes undefined, null, 0 and false', ()=>{
  it('Normal case', ()=>{
    let a = [1, 0, null, 2, undefined, false], result = [1,2];
    expect(getValidValue(a)).toEqual(result);
  })

  it('One length case', ()=>{
    let a = [null], result = [];
    expect(getValidValue(a)).toEqual(result);
  })

  it('Empty array case', ()=>{
    let a = [], result = [];
    expect(getValidValue(a)).toEqual(result);
  })
})

describe('Problem 4 Unit-Test - Write a function that counts the number of times a word is repeated', ()=>{
  it('Normal case', ()=>{
    let str = "Hello world world hello", word = "world", result = 2;
    expect(repeatCount(str, word)).toBe(result);
  })

  it('One length case', ()=>{
    let str = "a", word = "a", result = 1;
    expect(repeatCount(str, word)).toBe(result);
  })

  it('Empty array case', ()=>{
    let str = "", word = "world", result = 0;
    expect(repeatCount(str, word)).toBe(result);
  })
})

describe('Problem 5 Unit-Test - Create a function that checks if the entered word is a palindrome', ()=>{
  it('Normal palindrome case', ()=>{
    let word = "racecar", result = true;
    expect(checkPalindrome(word)).toBe(result);
  })

  it('Normal non-palindrome case', ()=>{
    let word = "apple", result = false;
    expect(checkPalindrome(word)).toBe(result);
  })

  it('One length case', ()=>{
    let word = "a", result = true;
    expect(checkPalindrome(word)).toBe(result);
  })

  it('Empty array case', ()=>{
    let word = "", result = true;
    expect(checkPalindrome(word)).toBe(result);
  })
})

describe('Problem 6 Unit-Test - Create a function that receives a number and returns a list with all the numbers starting from 0 and ending in the entered number, when it finds a multiple of 3 it returns fizz and when it is a multiple of 5 it should return buzz, if it is a multiple of 3 and 5 must return fizz buzz', ()=>{
  it('Normal number case', ()=>{
    let lastnum = 10, result = ["fizz buzz", 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz"];
    expect(generateFizzBuzz(lastnum)).toEqual(result);
  })

  it('Small number case', ()=>{
    let lastnum = 1, result = ["fizz buzz", 1];
    expect(generateFizzBuzz(lastnum)).toEqual(result);
  })

  it('Zero case', ()=>{
    let lastnum = 0, result = ["fizz buzz"];
    expect(generateFizzBuzz(lastnum)).toEqual(result);
  })
})