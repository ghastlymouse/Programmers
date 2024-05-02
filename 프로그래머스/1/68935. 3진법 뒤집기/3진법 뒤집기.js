function solution(n) {
    var answer = 0;
    let tenToTrig = n.toString(3);
    let flip = tenToTrig.split('').reverse();
    let m = flip.length;
    for(let i = 1; i <= m; i++) {
        answer += Number(flip[m - i])*(3**(i-1));
    }
    return answer;
}