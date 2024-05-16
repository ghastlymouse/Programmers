function solution(n) {
    var answer = 0;
    let gcd = 0;
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                gcd++;
            }
        }
        if(gcd >= 3){
            answer++;
            gcd = 0;
        } else {
            gcd = 0;
            continue;
        }
    }
    return answer;
}