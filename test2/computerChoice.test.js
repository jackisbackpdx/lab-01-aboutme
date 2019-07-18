const test = QUnit.test;

test('time to test the getThrowFromNumber function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 2;
    const result = getThrowFromNumber(number);
    const expected = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    assert.equal(result, expected);
});