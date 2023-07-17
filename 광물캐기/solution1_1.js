// const picks = [1, 3, 2]
// const picks = [0, 1, 1]
// const minerals = ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]
// const minerals = ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]


// const picks = [1, 1, 1]
// const minerals = ["stone", "stone", "stone", "stone", "stone", "iron", "iron", "iron", "iron", "iron", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond"]

const picks = [1, 2, 0]
const minerals = ["stone", "stone", "stone", "stone", "stone", "iron", "iron", "iron", "iron", "iron", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond"]



console.log('solution', solution(picks, minerals))

function solution(picks, minerals){
    const divideNum = Math.ceil(minerals.length / 5);
    const divideArr = (list, n) => {
        let arr = [];
        for(let i = 0 ; i < divideNum; i++){
            arr = [...arr, list.slice(n * i, n * i + n)]
        }
        return arr;
    };
    
    let visited = [];
    let needVisit = [];
    let patigue = 0;

    needVisit.push(0);

    while(needVisit.length !== 0){
        const node = needVisit.shift();        
        const divMinerals = divideArr(minerals, 5);
        const picksSum = picks.reduce((a, b) => { return a + b });
        let choice = '';

        divMinerals[node].forEach((item, idx) => {
            console.log("곡괭이",picks, "선택한 곡괭이", choice);
            console.log("광물",item,"광물 인텍스", idx);
            console.log("피로도",patigue)
            console.log("picksSum",picksSum, "reduce", picks.reduce((a, b) => {return a + b}))

            debugger
            if(idx == 0 && picksSum !== 0 ){ // 5개 씩 자른 광물 중 첫번째 광물이고 광물의 합이 0이 아닌 경우
                //곡괭이 선택
                for(let i = 0 ; i < picks.length ; i++){
                    if(idx == 0 && item == 'diamond'){ //5개씩 자른 배열에서 첫번째 광물이 diamond일 경우
                        if(picks[0] !== 0){ // 다이아곡괭이가 0이 아닐 경우
                            picks[0]--;
                            choice = 'dia';
                        } else if(picks[1] !== 0){ // 철곡괭이가 0이 아닐 경우
                            picks[1]--;
                            choice = 'iron';
                        } else if(picks[2] !== 0) { // 돌곡괭이가 0이 아닐 경우
                            picks[2]--;
                            choice = 'stone';
                        }
                        break;
                    } else if(idx == 0 && item == 'iron'){ //5개씩 자른 배열에서 첫번째 광물이 iron일 경우
                        if(picks[1] !== 0){ // 철곡괭이가 0이 아닐 경우
                            picks[1]--;
                            choice = 'iron';
                        } else if(picks[0] !== 0){ // 다이아곡괭이가 0이 아닐 경우
                            picks[0]--;
                            choice = 'dia';
                        } else if(picks[2] !== 0) { // 돌곡괭이가 0이 아닐 경우
                            picks[2]--;
                            choice = 'stone';
                        }
                        break;
                    } else if(idx == 0 && item == 'stone'){ //5개씩 자른 배열에서 첫번째 광물이 stone일 경우
                        if(picks[2] !== 0){ // 돌곡괭이가 0이 아닐 경우
                            picks[2]--;
                            choice = 'stone';
                        } else if(picks[1] !== 0){ // 철곡괭이가 0이 아닐 경우
                            picks[1]--;
                            choice = 'iron';
                        } else if(picks[0] !== 0) { // 다이아곡괭이가 0이 아닐 경우
                            picks[0]--;
                            choice = 'dia';
                        }
                        break;
                    }
                }
            }
            

            switch(item){
                case "diamond": // 광물이 diamond 일 경우
                    if(choice == "dia"){
                        patigue += 1;    
                    } else if(choice == "iron"){
                        patigue += 5;    
                    } else if(choice == "stone"){
                        patigue += 25;
                    } else {
                        break;
                    }
                break;

                case "iron": // 광물이 iron 일 경우
                    if(choice == "dia"){
                        patigue += 1;    
                    } else if(choice == "iron"){
                        patigue += 1;    
                    } else if(choice == "stone"){
                        patigue += 5;
                    } else {
                        break;
                    }
                break

                case "stone": // 광물이 stone 일 경우
                    if(choice == "dia"){
                        patigue += 1;    
                    } else if(choice == "iron"){
                        patigue += 1;    
                    } else if(choice == "stone"){
                        patigue += 1;
                    } else {
                        break;
                    }
                break;

            }

        })

        if(!visited.includes(node)){
            visited.push(node);
            (node < Math.ceil(minerals.length / 5)-1) ? needVisit.push(node+1) : '';
        }
    }

    return patigue;

}
