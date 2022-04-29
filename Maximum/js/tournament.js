// function find maximum value from a array SETTINGS.numbers using tournament method

function tournamentMAX(left,right){
    if (left==right){
        maxValId=left;
        console.log(maxValId)
        return maxValId;
    } else if (left+1==right){
        if(SETTINGS.numbers[left]>SETTINGS.numbers[right]){
            maxValId=left;
        } else{
            maxValId=right;
        }
        console.log(maxValId)
        return maxValId;


    } else {
        let mid=parseInt((left+(right-left))/2);
        console.log('calling left')
        let leftMaxId=tournamentMAX(left,mid);
        console.log('calling right')

        let rightMaxId=tournamentMAX(mid+1,right);
        if(SETTINGS.numbers[leftMaxId]>SETTINGS.numbers[rightMaxId]){
            maxValId=leftMaxId;
        } else{
            maxValId=rightMaxId;
        }
        console.log(maxValId)

        return maxValId;
        
    }
    
}

console.log(tournamentMAX(SETTINGS.numbers,0,SETTINGS.numbers.length-1));