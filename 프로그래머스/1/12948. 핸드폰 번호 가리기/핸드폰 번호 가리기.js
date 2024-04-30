function solution(phone_number) {
    var answer = '';
    let n = phone_number.length;
    let pn = phone_number.split('');
    
    for (let i = 0; i < n - 4; i++){
        pn[i] = '*';
    }
    
    answer = pn.join('');
    return answer;
}