function solution(array) {
    var answer = [];
    const maxNum = Math.max(...array);
    answer.push(maxNum);
    const maxIndex = array.indexOf(maxNum);
    answer.push(maxIndex);
    return answer;
}