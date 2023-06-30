// const picks = [0, 3, 2]
// const minerals = ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]

// const picks = [0, 1, 1]
// const minerals = ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]

// const picks = [1, 1, 1]
// const minerals = ["stone", "stone", "stone", "stone", "stone", "iron", "iron", "iron", "iron", "iron", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond"]

const picks = [1, 2, 0]
const minerals = ["stone", "stone", "stone", "stone", "stone", "iron", "iron", "iron", "iron", "iron", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond"]

// const picks = [1, 3, 2];
// const minerals = ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"];

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

        console.log(divMinerals[node]);
debugger
        
        let tmpDiaCnt = 0;
        let tmpIronCnt = 0;
        let tmpStoneCnt = 0;

        for(let i = 0 ; i < divMinerals[node].length ; i++){
            if(divMinerals[node][i] == "diamond"){
                tmpDiaCnt++;
                tmpIronCnt+=5;
                tmpStoneCnt+=25;
            } else if(divMinerals[node][i] == "iron") {
                tmpDiaCnt++;
                tmpIronCnt++;
                tmpStoneCnt+=5;
            } else{
                tmpDiaCnt++;
                tmpIronCnt++;
                tmpStoneCnt++;
            }
        }
        let pickCnt = comparison(tmpDiaCnt, tmpIronCnt, tmpStoneCnt);
        let picksYn = true;
debugger
        while(picks[pickCnt] == 0){
            console.log('pickCnt',pickCnt);

            if(pickCnt == 0) {
                pickCnt++;
            } else if(pickCnt == 1) {
                if(picks[0] == 0){
                    pickCnt--;
                } else {
                    pickCnt++;
                }
            } else if(pickCnt == 2) {
                pickCnt--;
            }
            
            if(picksSum == 0) {
                picksYn = false;
                break;
            }

            

        }

        if(picks[pickCnt] !== 0) picks[pickCnt]--;
        if(!picksYn) break;

        for(let mineral of divMinerals[node]){
            console.log(mineral, picks)
            switch(pickCnt){
                case 0:
                    patigue++;
                    break;
                case 1:
                    if(mineral == "diamond"){
                        patigue+=5;
                    } else {
                        patigue++;
                    }
                    break;
                case 2:
                    if(mineral == "diamond"){
                        patigue+=25;
                    } else if(mineral == "iron"){
                        patigue+=5;
                    } else {
                        patigue++;
                    }
                    break;
                        
            }
            
        }
        console.log(patigue)


        if(!visited.includes(node)){
            visited.push(node);
            (node < divideNum-1) ? needVisit.push(node+1) : '';
        }
    }

    return patigue;


}

function comparison(dia, iron, stone) {
    if(dia < iron && iron < stone){ // 광물이 dia 일 경우
        return 0;
    } else if(dia < iron || iron < stone){ // 광물이 iron 일 경우
        return 1;
    } else { // 광물이 stone 일 경우
        return 2;
    }
}