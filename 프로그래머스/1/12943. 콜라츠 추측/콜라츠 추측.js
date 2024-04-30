function solution(num) {
    let answer = 0;
    
    if(num === 1){
        answer = 0;
        return answer;
    }
    else {
        for(let i = 0; i <= 500; i++) {
            if (num % 2 === 0 && num !== 1){
                num /= 2;
            } else if (num % 2 !== 0 && num !== 1) {
                num = num * 3 + 1;
            } else if (num === 1) {
                answer = i;
                break;
            } 
        }
        if (num !== 1) {
            answer = -1;
        }
        return answer;
    }
}