# Mathematical Function F(n) - C Code

This C program contains three different implementations of a mathematical function `F(n)`, and it allows the user to input a value for `n` and see the results of each implementation.

## Development Environment

This C program can be developed and executed on any platform that supports a C compiler. Below are the requirements for setting up the development environment:

- C Compiler: You need a C compiler installed on your system to compile the code. Commonly used C compilers include:
  - GCC (GNU Compiler Collection).
  - VS Code or Visual Studio.


## How to Compile and Run the Code

Follow the steps below to compile and run the C code:
1. **Compile the Code**:
   - Open your terminal or command prompt.
   - Use the `cd` command to navigate to the directory where you have saved the `main.c` file.
   - Use the C compiler to compile the code. For example, with GCC, use the following command:
     ```
     gcc main.c -o mathematical_function
     ```
   - This will generate an executable file named `mathematical_function` in the same directory.
2. **Run the Program**:
   - After successfully compiling the code, run the program using the following command:
     ```
     ./mathematical_function
     ```
   - The program will prompt you to enter a value for `n`.
   - Type the desired value of `n` (an integer) and press Enter.
   - The program will display the results of the three implementations of `F(n)` for the given value of `n`.
   - If you want to test the program with different values of `n`, simply run the program again and enter a new value for `n`.

8. **Cleaning Up** (Optional):
   - If desired, you can remove the generated executable using the following command:
     ```
     rm mathematical_function  # For macOS/Linux
     ```
     ```
     del mathematical_function.exe  # For Windows
     ```

