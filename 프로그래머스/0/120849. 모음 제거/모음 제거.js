function solution(my_string) {
    let arr = my_string.split("").filter(el => {
        return (!["a", "e", "i", "o", "u"].includes(el));
    })
    return arr.join("");
}