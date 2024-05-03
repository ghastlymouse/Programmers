function solution(t, p) {
    let answer = 0;
    let pl = p.length;
    let str = [];
    for(let i = 0; i < t.length; i++) {
        str.push(t.slice(i,pl+i));
    }
    for(let j = 0; j < str.length; j++) {
        if (str[j].length < pl) {
            continue;
        }
        if (str[j] <= p) {
            answer++;
        }
    }
    return answer;
}