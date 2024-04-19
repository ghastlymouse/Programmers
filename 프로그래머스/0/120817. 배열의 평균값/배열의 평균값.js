function solution(numbers) {
    let answer = 0;
    let num = 0;
    
    for (i = 0; i < numbers.length; i++) {
        num += numbers[i];
    }
    
    answer = num / numbers.length;
    
    return answer;
}