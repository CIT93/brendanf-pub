// function determineHouseHoldPts(numberInHousehold) {
//         console.log("Inside the function");
//         if (numberInHousehold === 1) {
//         carbonFootprintPoints = carbonFootprintPoints + 14;
//     } else if(numberInHousehold === 2) {
//         carbonFootprintPoints = carbonFootprintPoints + 12;
//     } else if(numberInHousehold === 3) {
//         carbonFootprintPoints = carbonFootprintPoints + 10;
//     } else if(numberInHousehold === 4) {
//         carbonFootprintPoints = carbonFootprintPoints + 8;
//     } else if(numberInHousehold === 5) {
//         carbonFootprintPoints = carbonFootprintPoints + 6;
//     } else if(numberInHousehold === 6) {
//         carbonFootprintPoints = carbonFootprintPoints + 4;
//     } else if(numberInHousehold > 6) {
//         carbonFootprintPoints = carbonFootprintPoints + 2;
//     }
//     console.log(`Based on the number of member of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`);
// }

// let carbonFootprintPoints = 0;
// // const numberInHousehold = 3;


// global scope

// determineHouseHoldPts(3)
// determineHouseHoldPts(4)


function determineHouseSizePts(sizeOfHome) {
    console.log("Inside the function");
    if (sizeOfHome === 'large house') {
    carbonFootprintPoints = carbonFootprintPoints + 10;
} else if(sizeOfHome === 'medium-sized house') {
    carbonFootprintPoints = carbonFootprintPoints + 7;
} else if(sizeOfHome === 'small house') {
    carbonFootprintPoints = carbonFootprintPoints + 4;
} else if(sizeOfHome === 'apartment') {
    carbonFootprintPoints = carbonFootprintPoints + 2;
}
console.log(`Based on the size of your ${sizeOfHome} the points would be ${carbonFootprintPoints}.`);
}

let carbonFootprintPoints = 0;

// determineHouseSizePts('large house')
// determineHouseSizePts('medium-sized house')
determineHouseSizePts('small house')
// determineHouseSizePts('apartment')