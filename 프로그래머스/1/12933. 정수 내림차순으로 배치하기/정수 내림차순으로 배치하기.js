function solution(n) {
    let answer = 0;
    let m = n.toString().split('');
    for (let i = 1; i < m.length; i++) {
        for (let j = i; j > 0 ; j--) {
            if (+m[j] > +m[j-1]){
                let temp = +m[j];
                m[j] = +m[j-1];
                m[j-1] = temp;
            }
        }
    }
    
    answer = +m.join('');
    
    return answer;
}