#include <stdio.h>
#include <limits.h>
#define MAX_N UINT_MAX



int memo[MAX_N + 1]; 
int F_First(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;

    
    if (memo[n] != 0) return memo[n];


    memo[n] = F_First(n - 3) + F_First(n - 2);
    return memo[n];
}



int F_Second(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;

    return F_Second(n-3) + F_Second(n-2);
}



int F_Third(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;

    int dp[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i - 3] + dp[i - 2];
    }

    return dp[n];
}



int main() {
    int n = 17;
    

    int result_1 = F_First(n);
    printf("F(%d) = %d\n", n, result_1);
    

    int result_2 = F_Second(n);
    printf("F(%d) = %d\n", n, result_2);
    

    int result_3 = F_Third(n);
    printf("F(%d) = %d\n", n, result_3);

    return 0;
}
