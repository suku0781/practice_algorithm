const numbers = "011"

console.log(solution(numbers))

function solution(numbers){

    const getPermutations = (arr, selectNumber) => {
        const results = [];

        if(selectNumber === 1) return arr.map((value) => [value]);
        
        arr.forEach((fixed, index, origin) => {
debugger
            const rest = [ ...origin.slice(0, index) , ...origin.slice(index+1) ];

            const permutations = getPermutations(rest, selectNumber - 1);

            const attached = permutations.map((permutation) => [fixed, ...permutation]);

            results.push(...attached);
            console.log(rest)
            debugger
            // const 
        });

        return results;
    }
    const result = getPermutations(numbers.split(''), 3);


}