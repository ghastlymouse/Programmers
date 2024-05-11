function solution(cipher, code) {
    var answer = '';
    let str = cipher.split("");
    for(let i = 0; i < str.length; i++) {
        if (i % code === (code - 1)) {
            answer += str[i];
        }
    }
    return answer;
}