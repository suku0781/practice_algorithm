const number = '1924';
const k = 1;

console.log(solution(number, k))

function solution(number, k){
    const numberArr = number.split('');
    let stack = [];
    let count = 0;
    let result = '';

    for(let i = 0 ; i < numberArr.length ; i++){
        let num = Number(numberArr[i]);
        // debugger

        while(stack.length > 0 && stack[stack.length-1] < num){ // 스택이 비어있지않고 스택 마지막 값이 num보다 작을 경우
            if(count < k){
                stack.pop(); // 스택 마지막 값보다 더 큰수가 오면 stack을 pop()하고 더 큰수를 
                count++;
            } else { // k번 이상일 경우 pop()하지 않음.
                break;
            }
        }

        stack.push(num); // 스택이 비어있을 경우 그냥 넣음
        // debugger;
        if(i == numberArr.length-1 && count == 0){ // 마지막 값인데도 불구하고 아무것도 pop()하지 않았다면
            stack.pop();
            count++;
        }
    }
    stack.forEach(item => result += item.toString())
    return result;
}