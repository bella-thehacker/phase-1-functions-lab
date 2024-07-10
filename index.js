// Code your solution in this file!

function distanceFromHqInBlocks(pickup) {
    let hq = 42
    return Math.abs(pickup - hq)
}
console.log(distanceFromHqInBlocks(pickup))


function distanceFromHqInFeet(pickup){
    const feetPerBlock = 264
    const block = distanceFromHqInBlocks(pickup)
    return block * feetPerBlock
}
console.log(distanceFromHqInFeet)

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264

}
let start = 42
let destination = 58

console.log(distanceTravelledInFeet(pickup))

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0;
    }else if (distance <= 2000) {
        return (distance - 400) * 0.02;
    }else if (distance <= 2500){
        return 25;
    }else {
        return "cannot travel that far";
    }
}