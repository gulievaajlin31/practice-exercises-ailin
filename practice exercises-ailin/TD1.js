function repeat(times, action) {
    for (let i = 0; i < times; i++) {
        action(i); // Call the callback function, passing the current index 'i'
    }
}

repeat(3, function (i) {
    console.log("Hello", i);
});
// Output:
// Hello 0
// Hello 1
// Hello 2