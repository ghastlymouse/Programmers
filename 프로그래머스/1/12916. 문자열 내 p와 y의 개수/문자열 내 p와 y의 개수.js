function solution(s){
    let answer = true;

    let str = s.split("");
    
    let p_count = str.filter(function(item){
       return item === 'p' || item === 'P'; 
    });
    
    let y_count = str.filter(function(item){
       return item === 'y' || item === 'Y'; 
    });
    
    if (p_count.length === y_count.length) {
        answer = true;
    } else if (p_count.length === 0 && y_count.length === 0 ) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}