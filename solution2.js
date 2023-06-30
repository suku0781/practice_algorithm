//무인도 여행 solution2.js

const maps = ["X591X","X1X5X","X231X", "1XXX1"]
// const maps = ["XXX","XXX","XXX"]

console.log('solution',solution(maps));


function solution(maps) {
    const arr = maps.map(m => m.split(''));

    return BFS(arr, [0,0]);
}

function BFS (arr, startNode) { 
    const dx = [0,0,-1,1];
    const dy = [1,-1,0,0]; // 오 왼 위 아래
    
    debugger;
    const visited = []; // 탐색을 마친 노드들 
    const needVisit = []; // 탐색해야할 노드들
    let numberArray = [];
    let number = 0;

    needVisit.push(startNode);

    while(needVisit.length !== 0){ // 탐색해야할 노드가 남아있으면
        const node = needVisit.shift(); // queue이기때문에 선입선출, shilf()를 사용.

        if(!JSON.stringify(visited).includes(JSON.stringify(node))){
            visited.push(node);
            
            let rowArr = node[0];
            let colArr = node[1];

            const path = [];

            for(let i = 0 ; i < 4 ; i++){ // 오, 왼, 위, 아래
                const mvRowArr = rowArr + dx[i];
                const mvColArr = colArr + dy[i];

                if(mvRowArr < arr.length && mvColArr < arr[0].length && 0 <= mvRowArr && 0 <= mvColArr){ // 배열 안에서 반복될수 있게
                    path.push(arr[mvRowArr][mvColArr])

                    if(!JSON.stringify(visited).includes(JSON.stringify([mvRowArr,mvColArr]))){
                        needVisit.push([mvRowArr,mvColArr])
                    }
                } else {
                    path.push(0);
                }
            }

            console.log('여기는',node,'node값은',arr[node[0]][node[1]],'path',path)
            if( arr[node[0]][node[1]] !== 'X'){ // 현재 노드가 'X'가 아닐 때 
                let isIland = true;

                for(let i = 0 ; i < path.length ; i++){
                    debugger
                    if(path[i] !== 0 && path[i] !== 'X'){ // 섬이 아닐 경우 
                        number += Number(path[i]);
                        isIland = false;
                    }
                }
                
                (isIland) ? numberArray.push(Number(arr[node[0]][node[1]])) : '';

                // number += path.reduce((a, b) => a + b);

                console.log(path, number)
            }
        }
    }
    
    if(number !== 0){
        numberArray.push(number);
    }

    console.log('number', number, 'numberArray', numberArray)

    // return numberArray.sort((a,b) => a - b);
    return (numberArray.length == 0 ) ? [-1] :numberArray.sort((a,b) => a - b);
}





