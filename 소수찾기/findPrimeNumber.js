const number= '121'

// number값을 number.length만큼 반복하면서 순열알고리즘으로 값을 리턴하는 함수
function getPermutations(arr, selectNumber){
    const result = [];

    // selectNumber가 1일 경우
    // 만약 계속 재귀하여 selectNumber가 1이 되면 [...arr] 리턴
    if(selectNumber === 1) return arr.map(v => v);

    // arr.length만큼 반복. 
    // fixed는 arr[index]번째, 
    arr.forEach((fixed, index, origin) => {
        debugger
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // fixed를 제외한 arr의 나머지 값
        const permutation = getPermutations(rest, selectNumber - 1); // 재귀 후 리턴된 result배열을 가짐.

        if([...permutation].length == 1) { // 만약 [...permutation]에 값이 1개 있다면 
            result.push(fixed+permutation[0])
            debugger
        } else {
            permutation.forEach( item => result.push(fixed+item) )
        }
    })
     
    return result;
}

function solution(number){
    const numberArr = number.split('');
    const array = [];
    const decimalArray = [];

    // 인수 number가 소수인지 
    const isPrime = (number) => {
        if(number < 2) return false;

        // debugger

        for(let i = 2; i <= Math.floor(Math.sqrt(number)); i++){ // number가 제곱근인지 확인 
            if(number% i === 0) return false; // 나머지가 0 일 경우 소수가 아님. 
        }

        return true; // 소수일 경우 true 를 리턴 
    }

    for(let i = 1 ; i <= numberArr.length ; i++){
        Object.values(getPermutations(numberArr, i)).map(Number).forEach(item => {
            if(!array.includes(item)) array.push(item);
        })
    }

    array.forEach(item => {
        if(isPrime(item)) decimalArray.push(item)
    })

    return decimalArray.length
}

console.log(solution(number))