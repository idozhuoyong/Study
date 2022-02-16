"""
题目：一个整数，它加上100后是一个完全平方数，再加上168又是一个完全平方数，请问该数是多少？
"""

# import math
# num = 0
# while True:
#     a1 = math.sqrt(num + 100)
#     a2 = math.sqrt(num + 100 + 168)
#     if (a1/1 == a1//1) and (a2/1 == a2//1):
#         print(num)
#         break
#     num += 1

"""
1. x+100 = n*n; x+100+168=m*m;
2. m*m - n*n = 168 ==> (m+n)(m-n)=168;
3. m+n=i; m-n+j; ==> i*j=168; n=(i-j)/2; m=(i+j)/2;
"""
for i in range(1, 85):
    if 168 % i == 0:
        j = 168 // i
        if i > j and (i-j)%2 == 0 and (i+j)%2 == 0:
            x = ((i-j)//2) * ((i-j)//2) - 100
            print(x)
