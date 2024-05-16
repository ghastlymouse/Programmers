function solution(my_string) {
    var answer = '';
    let strArr = my_string.split("");
    for(let i = 0; i < strArr.length; i++){
        for(let j = i+1; j < strArr.length; j++){
            if(strArr[i] === strArr[j]){
                strArr[j] = "";
            }
        }
    }
    return strArr.join("");
}