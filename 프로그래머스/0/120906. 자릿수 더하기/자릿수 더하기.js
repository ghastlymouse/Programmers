function solution(n) {
    let answer = 0;
    let sum = n.toString();
    
    for(let i = 0; i < sum.length; i++) {
        answer += (+sum[i]);
    }
   
    return answer;
}