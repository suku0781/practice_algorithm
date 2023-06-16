        //무인도 여행 solution2.js

        function solution(maps) {
            const arr = maps.map(m => m.split(''));

            return DFS(arr, [0,0]);
        }

        function DFS (arr, startNode) {
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
                    let 오 = 0;
                    let 왼 = 0;
                    let 위 = 0;
                    let 아래 = 0;

                    for(let i = 0 ; i < 4 ; i++){ // 오, 왼, 위, 아래
                        const mvRowArr = rowArr + dx[i];
                        const mvColArr = colArr + dy[i];

                        console.log("rowArr", rowArr, 'colArr', colArr)

                        if(mvRowArr < arr.length && mvColArr < arr[0].length && 0 <= mvRowArr && 0 <= mvColArr){

                            switch(i){
                                case 0: // 오
                                    console.log("오");
                                    오 = arr[mvRowArr][mvColArr]
                                    break;
                                case 1: // 왼
                                    console.log("왼");
                                    왼 = arr[mvRowArr][mvColArr]
                                    break;
    
                                case 2: // 위
                                    console.log("위");
                                    위 = arr[mvRowArr][mvColArr]
                                    break;
                                case 3: // 아래
                                    console.log("아래");
                                    아래 = arr[mvRowArr][mvColArr]
    
                                    console.log('여기는',node,'오',오 ,'왼',왼 ,'위',위 ,'아래', 아래)
    
                                    if(arr[node[0]][node[1]] !== "X"){
                                        console.log("여기 진입하는지 보자.")
                                        if( 오 !== "X" && 오 !== "0" ||
                                            왼 !== "X" && 왼 !== "0" ||
                                            위 !== "X" && 위 !== "0" ||
                                            아래 !== "X" && 아래 !== "0" ){
                                            
                                            number += Number(arr[node[0]][node[1]]);
                                            console.log("여기는 육지", number);
                                        }
                                    }
                                    
                                    break;
                            }

                            if(!JSON.stringify(visited).includes(JSON.stringify([mvRowArr,mvColArr]))){
                                needVisit.push([mvRowArr,mvColArr])
                            }

                        } else if(i == arr.length-1 && arr[node[0]][node[1]] !== "X" ){
                            console.log("여기는 땅끝섬", );
                            numberArray.push(Number(arr[node[0]][node[1]]))
                        } 
                        
                        if(i == 3 && node[0] == arr.length-1 && node[1] == arr[0].length-1){
                            if(number !== 0){
                                numberArray.push(number);
                            }
                        }
                    }
                }
            }

            return numberArray.sort((a,b) => a - b);
        }


        // const maps = ["X591X","X1X5X","X231X", "1XXX1"];
        const maps = ["XXX","XXX","XXX"];
        console.log('solution',solution(maps));



        