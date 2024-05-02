function solution(n, m) {
    var answer = [];
    const max = Math.max(n, m);
    for(let i = 0; i < max; i++) {
        if (n % i === 0 && m % i === 0) {
            answer[0] = i;
        }
    }
    for(let j = 2; j <= n * m; j++){
        if (j % n === 0 && j % m === 0) {
            answer[1] = j;
            break;
        }
    }
    return answer;
}