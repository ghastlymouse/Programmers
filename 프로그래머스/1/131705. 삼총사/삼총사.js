function solution(number) {
    let answer = 0;
    let sum = 0;
    let count = 0;
    for (let  i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            for(let k = j + 1; k < number.length; k++) {
                sum = number[i] + number[j] + number[k];
                if (sum === 0){
                    count ++;
                }
            }
        }
    }
    answer = count;
    
    return answer;
}