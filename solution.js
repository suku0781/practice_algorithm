//광물 캐기 solution.js 

// const picks = [1, 3, 2]
// const minerals = ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]

// const picks = [0, 1, 1]
// const minerals = ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]	

const picks = [1, 1, 1]
const minerals = ["stone", "stone", "stone", "stone", "stone", "iron", "iron", "iron", "iron", "iron", "diamond", "diamond", "diamond", "diamond", "diamond"]

console.log("solution", solution(picks, minerals));


function solution(picks, minerals) {
    var answer = 0;
    let len =  minerals.length / 5;
    let maxLen = picks.reduce((a,b) => a+b);
    let arr = [];

    console.log("1. len : ", len, "maxlen : ", maxLen);

    if(maxLen === 0) return 0;
    if(len>maxLen) len = maxLen;
    
    for(let a = 0; a < len; a++){
        let obj = {d : 0, i : 0, s:0}
        // console.log("minerals.splice(0,5): ",minerals.splice(0,5));
        minerals.splice(0,5).map((v) => {
            // console.log(minerals)
            console.log(obj[v[0]]++, obj , minerals)
            // obj[v[0]]++
        })
        
        console.log('2. final obj : ', obj)



        
        arr.push([
            obj.d * 1 + obj.i * 1 + obj.s * 1,
            obj.d * 5 + obj.i * 1 + obj.s * 1,
            obj.d * 25 + obj.i * 5 + obj.s * 1
        ])

        console.log('3. final arr : ', arr)
    }
    
    arr.sort((a,b) => b[2] - a[2]).map((v) => {
        console.log("4. v: ", v)
        if(picks[0] > 0) return (picks[0]--, answer += v[0], console.log('v[0] : ', v[0]))
        if(picks[1] > 0) return (picks[1]--, answer += v[1], console.log('v[1] : ', v[1]))
        if(picks[2] > 0) return (picks[2]--, answer += v[2], console.log('v[2] : ', v[2]))
    })

    console.log("5. final final arr", arr);
    return answer;
}

/**
 * picks의 숫자를 모두 더해서 그 수만큼 광물캐기를 반복하는데 
 * 만약 picks를 모두 더한 수 보다 광물이 더 많다면 
 * 그만 채굴하게끔 했어야 했는데 (if(len>maxLen) len = maxLen;) 
 * 로직이 없어서 추가 피로도가 발생했음. 
 */

/**
 * 한 곡괭이당 5번 채굴할수있으므로 미네랄 총 길이에서 5를 나눈 값을 변수 len에 넣음.
곡괭이를 오름차순으로 정렬하여 총 합을 구한 값을 변수 maxLen 에 넣음.
만약 maxLen 이 0 일경우 (곡괭이가 없을 경우) 0을 리턴함.
만약 len이 maxLen보다 클경우 (미네랄이 곡괭이보다 많을 경우) 곡괭이수만큼 미네랄을 캘수있도록 len의 값을 maxLen의 값으로 바꿈.
미네랄을 캘수있는 정도 만큼 반복함.
obj에 다이아, 철, 돌 수를 0으로 객체로 선언해놓음.  
미네랄0번 ~ 4번까지 자른후 광물 갯수를 obj객체에 저장함. 
obj객체에 저장된 각 광물 갯수만큼 피로도를 곱한 후 이를 arr에 push함. 
이를 len번 반복함. 
arr의 데이터를 내림차순 정렬 후 
먄약 다이아곡괭이가 0보다 클 경우 곡괭이 수만큼 arr에 저장된 다이아곡괭이 피로도를 answer에 더함 
먄약 철곡괭이가 0보다 클 경우 곡괭이 수만큼 arr에 저장된 철곡괭이 피로도를 answer에 더함 
먄약 돌곡괭이가 0보다 클 경우 곡괭이 수만큼 arr에 저장된 돌곡괭이 피로도를 answer에 더함 
answer를 리턴함. 

 */