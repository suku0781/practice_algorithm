const picks = [1, 1, 1]
const minerals = ["stone", "stone", "stone", "stone", "stone", "iron", "iron", "iron", "iron", "iron", "diamond", "diamond", "diamond", "diamond", "diamond"]

console.log('solution', solution(picks, minerals))

function solution(picks, minerals){
	let patigue = 0;
	let count = 5;
	let maxLen = picks.reduce((a,b) => a+b);
	debugger
	
	for(let i = 0 ; i < minerals.length; i++){
		let picksPic;
		if(minerals[i] == 'diamond'){
			// debugger
			if(maxLen[0]){
				picksPic = 0;
				patigue += 1;
				count--;
				
			} else if(maxLen[1]){
				picksPic = 1;
				patigue += 5;
				count--;
			} else if(maxLen[2]){
				picksPic = 2;
				patigue += 25;
				count--;
			}
			if(!count) {
				maxLen[picksPic] = 0;
				count = 5;
			}
			

		} else if(minerals[i] == 'iron'){
			if(maxLen[0]){
				picksPic = 0;
				patigue += 1;
				count--;
				
			} else if(maxLen[1]){
				picksPic = 1;
				patigue += 1;
				count--;
			} else if(maxLen[2]){
				picksPic = 2;
				patigue += 5;
				count--;
			}
			if(!count) {
				maxLen[picksPic] = 0;
				count = 5;
			}

		} else if(minerals[i] == 'stone'){
			if(maxLen[0]){
				picksPic = 0;
				patigue += 1;
				count--;
				
			} else if(maxLen[1]){
				picksPic = 1;
				patigue += 1;
				count--;
			} else if(maxLen[2]){
				picksPic = 2;
				patigue += 1;
				count--;
			}
			if(!count) {
				maxLen[picksPic] = 0;
				count = 5;
			}
		}
	}
	console.log("피로도", patigue)

	return patigue;
}