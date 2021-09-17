//asynchronus code doesn't happen immediately
//this timer will go off in 2 seconds:
// setTimeout(() => {
//     console.log('Timer is done!');
// }, 2000);

// //Nested callbacks

// const fetchData = callback => {
//     setTimeout(() => {
//         callback('Done!');
//     }, 1500)
// };

// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData(text => {
//         console.log(text);
//     });
// }, 2000);

//create a promise
const fetchData = () => {
    //Promise() is a constructor function
    const promise = new Promise((resolve, reject) => {
        //move async code to here:
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
    };
   

setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);
