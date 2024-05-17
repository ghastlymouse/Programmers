function solution(s) {
    var answer = [];
    for(let i = s.length-1; i >= 0; i--){
        for(let j = i-1; j >= 0; j--){
            if(s[i] === s[j]){
                answer[i]=i-j;
                break;
            } else {
                answer[i]=-1;
                continue;
            }
        }
    }
    answer[0] = -1;
    return answer;
}