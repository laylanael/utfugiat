let specifiedOrient = 'landscape';

if (specifiedOrient) {
    console.log('Orientation is specified.');
    // This will execute because 'landscape' is a truthy value.
} else {
    console.log('Orientation is not specified.');
}

// Another example
specifiedOrient = '';

if (specifiedOrient) {
    console.log('Orientation is specified.');
} else {
    console.log('Orientation is not specified.');
    // This will execute because an empty string is falsy.
}
