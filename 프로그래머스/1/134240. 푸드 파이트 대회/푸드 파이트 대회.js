function solution(food) {
    var answer = '';
    let foodArr = [0];
    for(let i = food.length - 1; i > 0; i--){
        for(let j = 1; j <= ~~(food[i]/2); j++){
            foodArr.push(i);
            foodArr.unshift(i);
        }
    }
    return foodArr.join("");
}