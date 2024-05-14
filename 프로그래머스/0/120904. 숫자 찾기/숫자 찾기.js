function solution(num, k) {
    var answer = 0;
    let strArr = num.toString().split("");
    
    return strArr.includes(k+"") ? strArr.indexOf(k+"") + 1 : -1;
}