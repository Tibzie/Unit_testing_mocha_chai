
const assert = require('chai').assert;
const app = require('../app');

stringResult = app.stringFunc();
addResult = app.addNums(1, 3);
subResult = app.subNums(5, 4);
multResult = app.multNums(1, 1);
divResult = app.divNums(4, 2);


describe('App', function() {
  describe('stringFunc', function() {
    it('should look like this: "Do u kno da wae?"', function() {
      assert.equal(stringResult, 'Do u kno da wae?');
    });
    it('should include "wae" in the string', function() {
      assert.include(stringResult, 'wae');
    });
    it('should be a string', function() {
      assert.typeOf(stringResult, 'string');
    });
    it('should be exactly 16 characters', function() {
      assert.lengthOf(stringResult, 16);
    })
  });
  describe('addNums', function() {
    it('should be a type of number', function() {
      assert.typeOf(addResult, 'number');
    });
    it('should equal 4', function() {
      assert.equal(4, addResult, 'This number equals four');
    })
  });

  describe('subNums', function() {
    it('should be a type of number', function() {
      assert.typeOf(subResult, 'number');
    });
    it('should be less than -1', function() {
      assert.isBelow(-2, subResult, "-2 is strictly less than -1");
    })
  });

  describe('multNums', function() {
    it('should be a type of number', function() {
      assert.typeOf(multResult, 'number');
    });
    it('should be at least 1', function() {
      assert.isAtLeast(2, multResult, "2 is greater than or equal to 1");
    });
  });

  describe('divNums', function() {
    it('should be a type of number', function() {
      assert.typeOf(divResult, 'number');
    });
    it('should be less than or equal to 2', function() {
      assert.isAtMost(1, divResult, "1 is less than or equal to 2");
    });
  })
});
