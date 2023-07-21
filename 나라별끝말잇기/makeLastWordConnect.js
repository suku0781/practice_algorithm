// 나라별 끝말잇기를 진행하여 가장 길게 이어지는 순서를 구하여 총 몇개의 국가가 이어지는지 구하시오. 

//   조건1 : 대소문자 상관없음
//   조건2 : 각 나라를 한번씩만 말할수 있음

// 예시 ) Janpan -> Netherlands -> Switzerland

// 대상 국가 리스트
// [ Brazil, Croatia, Mexico, Cameroon, Spain, Netherlands, Chile, Australia, Colombia, Greece, Cote d'lvoire, Japan, Uruguay, Costa Rica, England, Italy, Switzerland, Ecuador, France, Honduras, Argentina, Bosnia and Herzegovina, Iran, Nigeria, Germany, Portugal, Ghana, USA, Belgium, Algeria, Russia, Korea Republic ]

const nationStr = "Brazil, Croatia, Mexico, Cameroon, Spain, Netherlands, Chile, Australia, Colombia, Greece, Cote d'lvoire, Japan, Uruguay, Costa Rica, England, Italy, Switzerland, Ecuador, France, Honduras, Argentina, Bosnia and Herzegovina, Iran, Nigeria, Germany, Portugal, Ghana, USA, Belgium, Algeria, Russia, Korea Republic";
console.log(solution(nationStr))

function BFS(arr, startNode){
    let visited = [];
    const needVisit = [];
    const endedNatoin = [];
    const connectedNation = [];

    needVisit.push(startNode);
    debugger
    while(needVisit.length !== 0){
        const node = needVisit.shift();

        if(!JSON.stringify(visited).includes(node)){
            const firstChar = node.charAt(0);
            const lastChar = node.charAt(node.length -1);
            
            visited.push(node);

            needVisit.forEach((item, idx) => {
                if(item.charAt(0) == firstChar){
                    console.log("여기야!")
                    debugger
                }
            })
            
/**
 * 현재 neitherland 다음 needVisit에 또 담겨있는 앞자리가 n인 국가를 삭제해야함.
 * 
 */

            //끝자리로 시작하는 국가 찾기
            arr.forEach(nation => {
                if(nation.charAt(0) == lastChar){
                    if(!needVisit.includes(nation) && !visited.includes(nation) && node !== nation && !endedNatoin.includes(nation) ) needVisit.push(nation);
                } 
            })

            // 해당 국가의 끝자리로 시작하는 국가가 없을 경우 arr의 다음 노드를 needVisit에 push함.
            if(needVisit.length == 0){
                let nextNation = '';
                let pass = false;
                arr.forEach((nation, idx, origin) => {
                    //첫번째 국가(처음 시작하는 국가) 마지막 글자로 시작하는 국가가 없을 경우
                    if(endedNatoin.length == 0){
                        if(nation == node) nextNation = arr[idx+1];
                        pass = true;
                    }

                    //
                    if(!pass && endedNatoin.length !== 0){
                        if(!endedNatoin.includes(nation) && !visited.includes(nation)){
                            nextNation = arr[idx];
                            pass = true;
                        } 
                    }
                })
                //만약 다음 국가도 visited한 국가일 경우 visited에 없는 다음 국가를 찾음.
                while(endedNatoin.includes(nextNation)){
                    let pass = false;
                    arr.forEach((nation, idx, origin) => {
                        if(!pass && nextNation == nation){
                            nextNation = arr[idx+1];
                            if(!endedNatoin.includes(nextNation) && !visited.includes(nextNation) ) pass = true;
                        }
                    })
                }
                debugger
                let nowNation;
                if(visited.length > 1) {
                    nowNation = visited;
                    connectedNation.push(nowNation);
                    nowNation.map(v => endedNatoin.push(v));
                    // visited.forEach(item => item.pop());
                    // while(visited.length) visited.pop();
                    visited = [];
                } else {
                    const connectionArr = [];

                    nowNation = visited.shift();
                    connectionArr.push(nowNation)
                    connectedNation.push(connectionArr);
                    endedNatoin.push(nowNation);
                }


                needVisit.push(nextNation);
            } 

            debugger
        }
    }
    
    // debugger
    
}

function solution(nation){
    const nationArr = nation.split(',').map(v => v.toLowerCase().trim());
    
    return BFS(nationArr, nationArr[0]);

}
