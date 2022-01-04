// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if(location<42){
        return 42 - location
    }else {
        return location-42
    }

}

function distanceFromHqInFeet (location) {
    return distanceFromHqInBlocks(location)*264;
    
}
function distanceTravelledInFeet(start, destination){

if(start<destination){
    return (destination- start)*264
}else{
    return (start-destination)*264
}
}

function calculatesFarePrice(start, destination){
let distance=distanceTravelledInFeet(start, destination)
if (distance<=400){
    return 0
}else if ( distance>400 && distance<2000){
    return 2.56 
}else if (distance>2000 && distance<2500){
    return 25
}else{
    return 'cannot travel that far'
}


    
}