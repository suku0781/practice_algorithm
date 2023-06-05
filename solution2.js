//무인도 여행 solution2.js

//상하좌우
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function solution(maps) {
  var answer = [];
  const arr = maps.map((m) => m.split(''));
  const maxRow = arr.length;
  const maxColumn = arr[0].length;

  arr.forEach((v, rIdx) => {
    v.forEach((value, cIdx) => {
      const needVisit = [{ rIdx, cIdx }];
      let rangeSum = 0;

      while (needVisit.length !== 0) {
        const { rIdx, cIdx } = needVisit.pop();
        if (arr[rIdx][cIdx] !== 'X') {
          rangeSum += Number(arr[rIdx][cIdx]);
          arr[rIdx][cIdx] = 'X';

          for (let i = 0; i < 4; i++) {
            const newRIdx = rIdx + dx[i];
            const newCIdx = cIdx + dy[i];

            if ( newRIdx < maxRow && newCIdx < maxColumn &&
                 0 <= newRIdx && 0 <= newCIdx ) {
              needVisit.push({ rIdx: newRIdx, cIdx: newCIdx });
            }
          }
        }
      }

      if (rangeSum !== 0) {
        answer.push(rangeSum)
      }
    })
  })

  return (answer.length === 0) ? [-1] : answer.sort((a, b) => a - b);
}