function numberOfBottles(){

    var bottle = 99;
    
    
    
    while(bottle > 0){
    
        var bottleWord = "bottle";
    
       
    
        console.log(bottle +" "+ bottleWord +" of beer on the wall");
    
        console.log(bottle +" "+ bottleWord +" on the wall");
    
        console.log("Take one down bottles on the wall");
    
        bottle -- ;
    
        if (bottle > 1){
    
            bottleWord = "bottles";
    
            }else
    
        if (bottle > 0){
    
            console.log(bottle +" "+ bottleWord +"bottles on the wall");
    
        }
    
        else{
    
            console.log("No more bottles on the wall");
    
        }
    
        }
    
    }
    
    numberOfBottles();
