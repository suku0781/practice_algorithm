const number = "4177252841";

let k = 4; 

console.log('solution', solution(number, k));

function solution(number, k) {
    var answer = '';
    
    let visited = {};
    const needVisit = [];
    let object = {};
    let count = 0;
    let tmpWaitNum = [];

    number.split('').map(Number).sort().forEach((item, idx) => { // number의 수를 배열로 만들고 오름차순으로 정렬하여 k만큼의 최소값을 object에 담음.
        if(count < k) {
            if(object[item] == undefined){
                object[item] = 1   
                count++;
            } else {
                object[item] += 1;
            }
        } 
    })
    
    number.split('').map(Number).forEach((item, idx) => { // number의 수만큼 반복하며 number의 수를 비교하여 visited에 넣거나 tmpWaitNum에 넣어서 number의 최소값을 k개 찾는다. 
        debugger
        let passYn = false;
        if(object[item] !== undefined){  // number의 아이템이 오브젝트에 있을때(아이템이 최소값에 포함될 경우)
            if(Object.values(visited).length !== 0 && Object.values(visited).reduce((a,b) => {return a + b}) === k){ // visited가 아무것도 없지 않고, 횟수가 k번 이상
                console.log('over')
                passYn = true;
            }

            if(object[item] !== 0 && passYn == false) {
                object[item]--
                if(visited[item] == undefined) {
                    let tmpWaitNumInpYn = false;
                    
                    if(tmpWaitNum.some( (data) => {return data < item} ) ){ // 현재 아이템보다 작은 수가 tmpWaitNum에 있을때
                        let tmpNum = tmpWaitNum.shift();
                        visited[tmpNum] = 1; // 현재 아이템은 visited에 push하지 않고 tmpWaitNum에 있는 수를 push 한다.
                        object[item]++; // 위에서 -1 한 것을 원복한다.
                        tmpWaitNumInpYn = true; // 아래 코드를 pass할수 있게 한다.
                    }

                    if(!tmpWaitNumInpYn){
                        Object.keys(visited).map(Number).forEach((vItem) => { // 현재 아이템보다 작은 수가 visited 에 있는지 찾는다.
                            debugger
                            
    
                            if(vItem < item){ 
                                if(Object.values(visited)[vItem] !== 0) { // 현재 아이템 보다 작은 수가 있다면 
                                    console.log(vItem, Object.values(visited)[vItem])    
                                    tmpWaitNum.push(item); // 그 수를 tmpWaitNum에 넣는다.
                                }
                            }
                        })

                    }

                    if(!tmpWaitNum.includes(item) && tmpWaitNumInpYn == false){ // 현재 아이템이 tmpWaitNum에 없을 경우 현재 아이템을 1만큼 추가한다.
                        visited[item] = 1
                    }

                    
                } else {
                    visited[item] += 1; // 현재 아이템이 visited에 있다면 +1을 한다.
                }
            } 

            
        }
        // debugger
    })



    
    return answer;
}