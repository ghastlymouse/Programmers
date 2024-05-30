function solution(number) {
    var answer = 0;
    let answerArr = number.split("");
    let sum = 0;
    for(let i = 0; i < answerArr.length; i++){
        sum += +answerArr[i];
    }
    answer = sum % 9;
    return answer;
}