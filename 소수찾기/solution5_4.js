
const numbers = "17"

console.log('solution',solution(numbers));




function solution(numbers) {
    const arr = numbers.split('');

    debugger

    // graph 자료구조와 startNode를 입력
    const BFS = (graph, startNode) => {
        let visited = []; // 탐색을 마친 노드들
        let needVisit = []; // 탐색해야할 노드들

        needVisit.push(startNode); // 노드 탐색 시작

        while (needVisit.length !== 0) { // 탐색해야할 노드가 남아있다면
            const node = needVisit.shift(); // 가장 오래 남아있던 정점을 뽑아냄.
            if (!visited.includes(node)) { // 해당 노드 방문이 처음이라면,
            visited.push(node); 
            needVisit = [...needVisit, ...graph[node]];
            }
        }
        return visited;
    };

    return BFS(arr, "1");
}







