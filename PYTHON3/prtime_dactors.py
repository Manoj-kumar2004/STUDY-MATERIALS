import os
import random
import time

# Function to clear the screen
def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

# Function to generate a single falling digit
def generate_falling_digit():
    return str(random.randint(0, 9))

# Function to print text in green
def print_green(text):
    print("\033[32m" + text + "\033[0m", end="")

# Main function to find the password
def find_password(password, cols, speed):
    clear_screen()
    found = False
    attempts = 0
    while not found:
        attempt_password = ""
        for _ in range(cols):
            attempt_password += generate_falling_digit()
            clear_screen()
            print_green(attempt_password)
            time.sleep(speed)
        if attempt_password == password:
            found = True
            print("\nPassword found after {} attempts!".format(attempts))
        else:
            attempts += 1

# Adjust these parameters to change the appearance of the falling password
password = "99"  # Password to find
cols = len(password)  # Number of columns based on password length
speed = 0.000001  # Speed of falling numbers (in seconds)

# Start finding the password
find_password(password, cols, speed)
