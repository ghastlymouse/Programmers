function solution(n, numlist) {
    var answer = [];
    answer = numlist.filter(x => {
        return x % n === 0;
    })
    return answer;
}