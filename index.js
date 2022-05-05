function distanceFromHqInBlocks(x){
if (x < 42){
    return (42-x);
}
return (x-42);

}
function distanceFromHqInFeet(x){
    let feet=0;
    feet = distanceFromHqInBlocks(x)*264;
    return feet;

    }
function distanceTravelledInFeet(x,y){
    let d = 0;
    if (x < y){
        d=(y-x);
    }else{
        d=(x-y);   
    }
    return d*264;
}
function calculatesFarePrice(x, y) {
    let d = distanceTravelledInFeet(x,y);
    let a =0;
    if(d<=400){
        return 0;

    }else if (d>400 && d<= 2000)
    {
        a= d-400;
        return a*0.02;

    }else if (d>2000 && d< 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }


  }