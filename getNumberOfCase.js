/**
 * 각각의 알파벳에 임의의 숫자를 부여(0 ~ 9) 하여 다음의 식이 성공될 수 있는 경우의 수를 구하시오.

READ + WRITE + TALK = SKILL 이 성립되는 경우의수는 몇가지?

조건 1 : 맨 앞의 숫자는 0이 될수 없음
    =>    We ( W : 0 불가 ) * love ( l : 0 불가 ) = CodeIQ ( C : 0 불가 )

조건 2 : 숫자 중복 불가( A : 1, B : 1 <== 안됨 )
    예시 ) We * love = CodeIQ

결과) 1가지

W = 7, e = 4, l = 3, o = 8, v = 0, C = 2, d = 1, I = 9, Q = 6

C = 2, d = 1, e = 4, I(아이) = 9, l(엘) = 3, o = 8, Q = 6, v = 0, W = 7

==>  74 * 3804 = 281496





R !== 0, 
W !== 0, 
T !== 0,
S !== 0
 */

const parameter = '0123456789';
console.log(solution(parameter));

function getPermutations(arr, selectNumber) {
    const result = [];
    if(selectNumber === 1) {
        return arr;
    }

    arr.forEach((fixed, index, origin) => {
        // const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutation = getPermutations(origin, selectNumber -1);
        if(permutation.length == 1){
            result.push(fixed+permutation);
        } else {
            permutation.forEach( item => {
                if(Number(fixed)+Number(item) !== 0) {result.push(fixed+item)} else {debugger;console.log(Number(fixed)+Number(item))}
                // debugger
            })
        }


    });
    return result;

}


function solution(number) {
    const array = [];
    const numberArr = number.split('');
    
    for(let i = 4 ; i <= number.length ; i++ ) {
        array.push(getPermutations(numberArr, i));
        console.log(array)
        break;
    }

}


