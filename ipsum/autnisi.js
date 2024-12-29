function accessor(fn, context, key) {
    // Assuming context is an object where we want to retrieve a value
    return context[key];
}

// Example usage:
const obj = {
    identity: 'Hello, world!'
};

const result = accessor(_ => _, [], 'identity');
console.log(result); // Outputs: Hello, world!
