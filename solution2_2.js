const maps = ["X591X","X1X5X","X231X", "1XXX1"]

function solution(maps) {
    var answer = [];

    const array = maps.map(m => m.split(''));

    BFS(array, [0,0]);

    return answer;
}

function BFS(array, startNode) {
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0, 0];

    const visited = [];
    const needVisit = [];

    let numberArray = [];
    let number = 0;

    needVisit.push(startNode);

    while(needVisit.length !== 0) {
        const node = needVisit.pop();

        console.log(node)
        debugger;

    }
}