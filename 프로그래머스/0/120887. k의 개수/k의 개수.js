function solution(i, j, k) {
    let answer = 0;
    let sK = k.toString();
    let numList = "";
    for(let n = i; n <= j; n++) {
        numList += n;
    }
    for(let m = 0; m < numList.length; m++) {
        if(numList[m] === sK) {
            answer++;
        }
    }
    return answer;
}