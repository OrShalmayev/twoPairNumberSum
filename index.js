let arr = [3,5,-4,8,11,1,-1,6];
let targetSum = 10;

// /**
//  * 
//  * @Option #1 
//  */
// function twoPairNumberSum(){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if( (arr[i] + arr[j]) === targetSum ){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }


// /**
//  * 
//  * @Option #2 
//  */
// function twoPairNumberSum(){
//     let nums = {};
//     for(num of arr){
//         if( (targetSum - num) in nums ){
//             return [ targetSum - num, num];
//         }else{
//             nums[num] = true;
//         }
//     }
//     return [];
// }


/**
 * 
 * @Option #3 
 */
function twoPairNumberSum(){
    let sArr = arr.sort((a,b)=>a-b);
    // console.log(sArr);
    let left = 0;
    let right = sArr.length - 1;
    while(left < right){
        if( (sArr[left] + sArr[right]) === targetSum){
            return [sArr[left], sArr[right]];
        }else if ( (sArr[left] + sArr[right]) < targetSum ){
            ++left;
        }else if( (sArr[left] + sArr[right]) > targetSum ){
            ++right;
        }
    }
    return [];

}


console.log(twoPairNumberSum());