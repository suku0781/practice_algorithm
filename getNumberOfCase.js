/**
 * 각각의 알파벳에 임의의 숫자를 부여(0 ~ 9) 하여 다음의 식이 성공될 수 있는 경우의 수를 구하시오.

READ + WRITE + TALK = SKILL 이 성립되는 경우의수는 몇가지?

조건 1 : 맨 앞의 숫자는 0이 될수 없음
    =>    We ( W : 0 불가 ) * love ( l : 0 불가 ) = CodeIQ ( C : 0 불가 )

조건 2 : 숫자 중복 불가( A : 1, B : 1 <== 안됨 )
    예시 ) We * love = CodeIQ

결과) 1가지

W = 7, e = 4, l(엘) = 3, o = 8, v = 0, C = 2, d = 1, I(아이) = 9, Q = 6

C = 2, d = 1, e = 4, I(아이) = 9, l(엘) = 3, o = 8, Q = 6, v = 0, W = 7

==>  74 * 3804 = 281496





R !== 0, 
W !== 0, 
T !== 0,
S !== 0
 */

// function solution(str){
//     const array = str.split('').join().split(' ');
//     const cutSpe = (items, rtSubject) => {
//         const target = /[+/,/=]/g;
//         const itemArray = [];
//         items.forEach(item => {
//             let afReplace = '';
//             if(rtSubject == 'string'){
//                 afReplace = (item.replace(target, '') == '') ? '' : item.replace(target, '');
//             } else {
//                 const targetSpe = /[+/=]/g;
//                 if(item.search(targetSpe)) afReplace = item.replaceAll("\,", "");
//             }
//             if(afReplace) itemArray.push(afReplace);
//         });
//         return itemArray;
//     };

//     const newArray = cutSpe(array, 'string');
//     const newArrInclSpe = cutSpe(array, 'spe');
//     const itemObj = {};
//     const cantBeZero = [];

//     newArrInclSpe.forEach((items, index) => {
//         // console.log(newArray[index], typeof(newArray[index].split('')));
        
//         debugger
//         newArrInclSpe[index].split('').forEach((item, idx) => {
//             const targetSpe = /[+/-/*///%/=]/g;
//             debugger;
//             if(!targetSpe.test(item)){
//                 if(idx == 0) cantBeZero.push(item);
    
//                 (itemObj[item]) ? itemObj[item]++ : itemObj[item] = 1 ;
//                 console.log(itemObj)
//             }
//         })
//         // console.log(items, index);
//     })

//     console.log('cutspe test', cutSpe(array));



// }


const testString = 'READ + WRITE + TALK = SKILL';
console.log(solution(testString));

function getPermutations(arr, selectNumber){
    const result = [];

    if(selectNumber === 1) return arr.map(v => v);
}

function solution(str) {
    const stringArr = str.split(' ');
    const array = [];
    const targetSpe = /[+/-/*///%/=]/g;
    let arrayLength = stringArr.length;
    
    stringArr.forEach(item => { if(targetSpe.test(item)) arrayLength--; });
    debugger

    for(let i = 1 ; i <= stringArr.length ; i++){
        
        debugger
        Object.values(getPermutations(stringArr, i)).forEach(item => {
            if(!array.includes(item)) array.push(item);
        })

    }
}