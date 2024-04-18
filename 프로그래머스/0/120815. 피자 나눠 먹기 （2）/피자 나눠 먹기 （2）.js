function solution(n) {
            let answer = 0;
            let pizza = [];
            let eat = [];


            if (n < 1 || n > 100) {
                
            } else {
                for (i = 1; i <= 6 * n; i++) {
                    if (i % 6 === 0 && i % n === 0) {
                        eat[i] = i;
                    }
                }
            }

            pizza = eat.filter(Number);
            answer = pizza[0] / 6;

            return answer;
        }