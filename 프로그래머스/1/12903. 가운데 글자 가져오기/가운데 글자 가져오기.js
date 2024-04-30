function solution(s) {
    var answer = '';
    if (s.length % 2 !== 0) {
        let index = (s.length - 1) / 2;
        answer = s[index];
    } else {
        let index1 = s.length / 2;
        answer = s[index1 - 1] + s[index1];
    }
    return answer;
}