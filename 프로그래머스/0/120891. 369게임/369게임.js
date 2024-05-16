function solution(order) {
    var answer = 0;
    let numArr = order.toString().split("").filter(el => +el).filter(el => el % 3 === 0)
    return numArr.length;
}