let k = 6;
// let k = 4;
// let k = 2;

let tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
// let tangerine = [1, 1, 1, 1, 2, 2, 2, 3];

console.log('solution', solution(k, tangerine))

function solution(k, tangerine) {
    var answer = 0;
    let result = {};
    let number = 0;
    let cnt = 0;

    
    tangerine.forEach((i) => { 
        debugger;
        result[i] = result[i] + 1 || 1;
    });

    let value = Object.values(result).sort((a, b) => {
        return b - a;
    });


    for(let i = 0; i < value.length; i++){ 

        if(number < k){ 
            cnt++;
            number += value[i]; 
        }

    }


    answer = cnt;


    return answer;
}