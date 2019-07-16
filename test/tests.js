import isYes from '../src/is-yes.js';
const test = QUnit.test;

test('returns true with yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const answer = 'yes';
    const expected = true;
    //Act

    // Call the function you're testing and set the result to a const
    const result = isYes(answer);
    //Assert

    assert.equal(result, expected);
});

test('returns true with y', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const answer = 'y';
    const expected = true;
    //Act

    // Call the function you're testing and set the result to a const
    const result = isYes(answer);
    //Assert

    assert.equal(result, expected);
});

test('returns true with no', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const answer = 'no';
    const expected = false;
    //Act

    // Call the function you're testing and set the result to a const
    const result = isYes(answer);
    //Assert

    assert.equal(result, expected);
});

test('returns true with n', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const answer = 'n';
    const expected = false;
    //Act

    // Call the function you're testing and set the result to a const
    const result = isYes(answer);
    //Assert

    assert.equal(result, expected);
});