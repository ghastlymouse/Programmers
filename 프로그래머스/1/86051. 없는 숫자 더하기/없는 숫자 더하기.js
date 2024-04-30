function solution(numbers) {
    var answer = 0;
    let count = [];
    for(let i = 0; i <= 9; i++){
        for(let j = 0; j < numbers.length ; j++){
            if (numbers[j] === i){
                count[i] = 1;
            }
        }
        if(!count[i]){
            answer += i;
        }
    }
    
    return answer;
}