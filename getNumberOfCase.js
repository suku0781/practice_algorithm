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
console.log(solution());
function solution(){
    const testString = 'READ + WRITE + TALK = SKILL';
    const array = testString.split('').join().split(' ');
    const cutSpe = (items) => {
        const target = /[+/,/=]/g;
        const itemArray = [];
        items.forEach(item => {
            const afReplace = (item.replace(target, '') == '') ? '' : item.replace(target, '');
            if(afReplace) itemArray.push(afReplace);
        });
        return itemArray;
    };

    const newArray = cutSpe(array);
    const itemObj = {};

    newArray.forEach((items, index) => {
        // console.log(newArray[index], typeof(newArray[index].split('')));
        newArray[index].split('').forEach((item, idx) => {
            debugger;
            itemObj[item] = 1
            console.log(itemObj)
        })
        // console.log(items, index);
    })

    console.log('cutspe test', cutSpe(array), newArray);



}