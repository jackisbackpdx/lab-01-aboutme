import testFunction from './test-function.js';
const test = QUnit.test;


test('too high or too low?', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const test = 12;
    const actualNumber = 10;
    const expected = 1;
      
    //Act
    const result = testFunction(test, actualNumber);
    // Call the function you're testing and set the result to a const
    
    //Assert
    assert.equal(result, expected);
});