function solution(numbers, direction) {
    var answer = [];
    if (direction === "left") {
        let front = numbers.shift();
        numbers.push(front);
    } else {
        let back = numbers.pop();
        numbers.unshift(back);
    }
    return numbers;
}