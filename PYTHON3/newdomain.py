def newdom(email,new_dom):
    index=email.index('@')
    dom=email[index+1:]
    new_email=email[:index]+'@'+new_dom
    print(new_email)
newdom('manojkumar2k4.g@gmail.com','hotmail.com')
print('Manoj'.casefold)
price=10345.34953465345
name='Manoj'
print(f'{name:>15} is worth ${price:.2f}')