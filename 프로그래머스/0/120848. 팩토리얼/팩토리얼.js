function solution(n) {
    let answer = 0;
    let factorial = 1;
    for(let i = 10; i > 0; i--) {
        for(let j = i; j > 0; j--) {
            factorial *= j;
        }
        if(factorial <= n) {
            answer = i;
            break;
        } else {
            factorial = 1;
            continue;
        }
    }
    return answer;
}