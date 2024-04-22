function solution(strings, n) {
    let answer = [];
    
    let indexStr = strings.map(function(alphabet){
    return alphabet[n];
    });
    
    for (let i = 0; i < indexStr.length; i++) {
        answer[i] = indexStr[i] + strings[i];
    }
    
    answer.sort();
    
    for (let i = 0; i < answer.length; i++) {
    answer[i] = answer[i].replace(answer[i][0], "");
    }
    
    return answer;
}