function solution(a, b) {
    var answer = 0;
    let sum = [];
    for(let i = 0; i < a.length; i++){
        answer += a[i] * b[i];
    }
    return answer;
}