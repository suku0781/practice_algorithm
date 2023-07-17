// const number = "4177252841"

// const k = 4;

// console.log(solution(number, k))

// function solution(number, k) {
//     const numberArr= number.split('');
//     let stack = [];
//     let count = 0;
// debugger
//     for(let i = 0 ; i < number.length ; i++){
        
//         if(stack.length !== 0 && count < k) {
//             for(let j = 0 ; j < stack.length ; j++){
//                 if(stack[stack.length-1] < numberArr[i]) { // 스택에 저장된 값 보다 더 큰 숫자가 있을 경우
//                     stack.pop();
//                     stack.push(numberArr[i]);
//                     count++;
//                 }
//             }
//             //  else {
//             //     stack.push(numberArr[i]);
//             // }
//         } 
//     }

//     console.log(stack)
//     return stack.join().replaceAll(",",''); //배열을 문자열로 변환
// }