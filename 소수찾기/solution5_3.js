const numbers = "1704387";

console.log(solution(numbers.split('')));

function solution(numbers){
    const numberArr = numbers;
    const isNumberArrOddEven = (numberArr.length % 2) ? 'odd' : 'even'; // 총 길이 홀 짝 여부
    let digit = 0; //자릿수
    let result = []; // 결과를 담는 배열 

    while(digit < numberArr.length){
        numberArr.forEach((item, idx) => {
debugger
            if(digit == 0 && !result.includes(item)) {
                result.push(item);
            }
            if(digit){
                let tmpResult = '';
                for(let i = 0 ; i < digit; i++) {
                    tmpResult += numberArr[idx+i]
                }

            }


            



            

            
        });
        digit++;
    }
}
