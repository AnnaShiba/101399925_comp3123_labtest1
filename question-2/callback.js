
function resolvedPromise(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({message});
        }, 500);
    });
}

function rejectedPromise(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({message});
        }, 500);
    });
}

resolvedPromise('delayed success!').then((result) => {
  console.log(result);  
});
rejectedPromise('delayed exception!').catch((result) => {
  console.log(result);  
});