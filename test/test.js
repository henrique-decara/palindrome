var assert = require('assert');
const isPalindrome = require('../index.js')


describe('isPalindrome', function () {
  describe('Check if word is a palindrome or not', function () {
    
    it('should return if the word is a Palindrome', function () {
        assert.equal(isPalindrome('bob'), 'Palindrome')
    });

    it('should return if the word is not a Palindrome', function () {
      assert.equal(isPalindrome('bobee'), 'Not Palindrome')
  });
  });


});