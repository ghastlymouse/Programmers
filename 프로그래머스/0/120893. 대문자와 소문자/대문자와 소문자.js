function solution(my_string) {
    var answer = '';
    let str = my_string.split("");
    for (let i = 0; i < str.length; i++) {
        let charCode = str[i].charCodeAt();
        if (charCode >= 65 && charCode <= 90) {
            answer += str[i].toLowerCase();
        } else if (charCode >= 97 && charCode <= 122) {
            answer += str[i].toUpperCase();
        }
    }
    return answer;
}