# Arithmetic Operation - C Code

This C program demonstrates the evaluation of arithmetic expressions using a binary tree data structure. The program defines a structure called `Node` to represent the nodes of the binary tree, and each node can have one of four types: `ADD`, `MUL`, `SUB`, or `VALUE`.

## Development Environment

This C program can be developed and executed on any platform that supports a C compiler. Below are the requirements for setting up the development environment:

- C Compiler: You need a C compiler installed on your system to compile the code. Commonly used C compilers include:
  - GCC (GNU Compiler Collection).
  - VS Code or Visual Studio.

## How to Compile and Run the Code

Follow the steps below to compile and run the C code:

1. **Compile the Code**:
   - Open your terminal (Command Prompt on Windows or Terminal on macOS/Linux).
   - Navigate to the directory where you have saved the `main.c` file.
   - Use the C compiler to compile the code. For GCC, use the following command:
     ```
     gcc main.c -o arithmetic_operation
     ```
   - This will generate an executable file named `arithmetic_operation` in the same directory.

2. **Run the Program**:
   - After successfully compiling the code, run the program using the following command:
     ```
     ./arithmetic_operation
     ```
   - The program will evaluate arithmetic expressions and display the results for each expression.

3. **Expected Output**:
   - After running the program, you should see the evaluated results of the arithmetic expressions, such as:
     ```
     add : 16
     mul : 20
     sub : 4
     fibo : 2
     ```

4. **Cleaning Up** (Optional):
   - If desired, you can remove the generated executable using the following command:
     ```
     rm arithmetic_operation  # For macOS/Linux
     ```
     ```
     del arithmetic_operation.exe  # For Windows
     ```

## Additional Notes

- The program includes a `calc()` function that recursively evaluates the arithmetic expressions based on the binary tree structure.
- The `makeFunc()` function is used to create nodes with specific arithmetic operations, and `makeValueNode()` is used to create nodes with integer values.

Feel free to modify the expressions in the `main()` function to test different arithmetic operations and values.


