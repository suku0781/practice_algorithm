// const number = '1924';
// const number = "1231234";
const number = '4177252841';

const k = 4;

console.log(solution(number, k))

function solution(number, k) {
    var answer = '';

    // const sortedNum = number.sort();
    console.log(number);
    const numDiv2 = Math.ceil(number.split('').map(Number).length / 2);
    let numberArr = number.split('').map(Number);.forEach(function(item){
        item=Number(item);
    })
    
    const divArr = []
    
    for(i = 0 ; i < numberArr.length ; i += numDiv2){
        let tmpArr;
        tmpArr = numberArr.slice(i, i+numDiv2);
        divArr.push(tmpArr);
    }
    
    console.log(divArr)
    
    let minNumArr = [];


    let obj = new Object();
    debugger
    numberArr.sort().forEach((element, index) => {
        obj[element] = 1;
    });

    // numberArr.sort().forEach((element, index) => {
    //     debugger
    //     if(!minNumArr.includes(element)) {
    //         makeKeyValue
            
    //         //minNumArr.push(element)   
    //     }
    // });
    minNumArr = minNumArr.slice(0, k);
    for(let i = 0 ; i < divArr.length ; i++) {
        for(let j = 0 ; j < divArr[i].length ; j++){
            debugger
            if(minNumArr.includes(divArr[i][j])){

                let hisLocation = minNumArr.indexOf(divArr[i][j]);
                let existence = [];
                for(let m = 0 ; m < hisLocation ; m++){
                    existence.push(divArr[i].includes(minNumArr[m]))
                    console.log( divArr[i].includes(minNumArr[m]) , m, existence ) 
                }
            }
        }


    }
    


    
    

    return answer;
}
