let arr = [3,5,-4,8,11,1,-1,6];
let target = 10;
/**
 * 
 * @Option #1 
 */
function twoPairNumberSum(){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if( (arr[i] + arr[j]) === target ){
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(twoPairNumberSum(10));