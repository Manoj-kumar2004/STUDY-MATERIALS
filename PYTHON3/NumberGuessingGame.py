import random,math
def main():
    Numberguess()

def Numberguess():
    print('Welcome to the number guessing game')
    lower=int(input("Enter your lower Bound"))
    higher=int(input("Enter your lower Bound"))
    guesses=round(math.log2(lower+higher-1))
    print(f'You have {guesses} to guess')
    count=0
    x=random.randint(lower,higher+1)
    while(True):
        count+=1
        guess=int(input('Enter the guess'))
        if guess==x:
            print('You won')
            return
        elif guess>x:
            print('You have guessed it large')
        elif guess<x:
            print('You have guessed it small')
        if(count==guesses):
            print('You lost')
            break
main()