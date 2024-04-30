function solution(s) {
    var answer = true;
    if (s.includes('x') || s.includes('e')) {
        answer = false;
    } else {
        let n = s.length;
        if ((n === 4 || n === 6) && s*1){
            answer = true;
        } else if (s === '0000' || s === '000000') {
            answer = true;
        } else {
            answer = false;
        }
    }
    return answer;
}