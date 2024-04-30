function solution(arr) {
    var answer = [];

    if (arr.length === 1){
        answer = [-1];
    } else {
        let minIndex = arr.indexOf(Math.min(...arr));
        arr.splice(minIndex,1,null);
        answer = arr.filter((v) => v);
    }   
    return answer;
}