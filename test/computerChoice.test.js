import { getThrowFromNumber } from '../src2/computerChoice.js';
const test = QUnit.test;

test('returns scissors when given the number 2', function(assert) {
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

test('returns rock when given the number 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 0;
    const result = getThrowFromNumber(number);
    const expected = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    assert.equal(result, expected);
});

test('returns paper when given the number 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 1;
    const result = getThrowFromNumber(number);
    const expected = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    assert.equal(result, expected);
});
