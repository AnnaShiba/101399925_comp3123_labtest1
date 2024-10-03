
function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(array) && array.length > 0) {
            const result = array.filter(value => typeof value === "string").map(word => word.toLowerCase());
            resolve(result);
        } else {
            reject(new Error("Input is not an array."));
        }
    });
}

// test
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray).then((result) => console.log(result)).catch(error => console.log(error));
