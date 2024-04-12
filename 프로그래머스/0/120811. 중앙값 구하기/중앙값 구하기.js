function solution(array) {
    var answer = 0;
    array.sort( (a, b) => a - b );
    
i = (array.length + 1) / 2;
    
    answer = array[i-1];
    return answer;
}