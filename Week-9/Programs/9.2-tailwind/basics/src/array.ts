

function maxValue(arr:number[]){
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

console.log(maxValue([1,2,3]));
