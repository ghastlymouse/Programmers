 function solution(numer1, denom1, numer2, denom2) {
     let gcd = 1;
     var answer = [];
     numer = numer1 * denom2 + numer2 * denom1;
     denom = denom1 * denom2;
     for (i = 2; i <= Math.min(numer, denom); i++){
         if (numer % i == 0 && denom % i == 0){
             gcd = i;
         }
     }
     answer[0] = numer / gcd;
     answer[1] = denom / gcd;
  
     return answer;
 }