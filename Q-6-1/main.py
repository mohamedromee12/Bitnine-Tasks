def isPalindrome(word):

    word = word.lower()

    if (word == word[::-1]):
        return True
    else:
        return word[::-1]


userInput = input("Enter a word: ")

result = isPalindrome(userInput)

if (result == True):
    print(f"The word '{userInput}' is a palindrome.")

else:
    print(
        f"The word '{userInput}' is not a palindrome, the reverse is {result}")
