// const number = '17';

// const getPermutations = function (arr, selectNumber) {
//     const results = [];
//     // debugger
//     if (selectNumber === 1) return arr.map((el) => el); 

//     arr.forEach((fixed, index, origin) => {
//       const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
//       const permutations = getPermutations(rest, selectNumber - 1); 
//     //   debugger
//       if([permutations].length == 1){
//         for(let i = 0 ; i < permutations.length ; i++ ){
//             results.push(fixed+permutations[i]);
//         } 
//       } else {
//         permutations.forEach( (item) => { results.push(fixed+item) })
//       }
      
//     });

//     return results;
// }


// function solution(number) {
//     const numberArr = number.split('');
//     for(let i = 0 ; i < numberArr.length ; i++) {
//         console.log('getPermutations',getPermutations(numberArr, i))

//     }
// }

// console.log(solution(number));