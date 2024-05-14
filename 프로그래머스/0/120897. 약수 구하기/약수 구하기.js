function solution(n) {
    var answer = [];
    for(let i = 1; i <= n; i++) {
        n % i === 0 ? answer.push(i) : "뭘 써야하노";
    }
    return answer;
}