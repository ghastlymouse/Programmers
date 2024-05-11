function solution(my_string) {
    var answer = 0;
    let numList = my_string.split("");
    let my_num = [];
    for (let i = 0; i < numList.length; i++) {
        if (+numList[i]) {
            answer += +numList[i];
        }
    }
    return answer;
}