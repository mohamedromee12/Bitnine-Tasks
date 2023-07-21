#include <stdio.h>
#include <stdlib.h>

// Enum for arithmetic operations
typedef enum TypeTag {
    ADD,
    MUL,
    SUB,
    VALUE
} TypeTag;

// Structure for the Node
typedef struct Node {
    TypeTag type;
    int value;
    struct Node* left;
    struct Node* right;
} Node;

// Function to create a Node with the given arithmetic operation and operands
Node* makeFunc(TypeTag type, Node* left, Node* right) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->type = type;
    node->left = left;
    node->right = right;
    return node;
}

// Function to create a Node with an integer value
Node* makeValueNode(int value) {
    Node* node = (Node*)malloc(sizeof(Node));
    node->type = VALUE;
    node->value = value;
    node->left = NULL;
    node->right = NULL;
    return node;
}

// Function to calculate the value of the expression represented by the Node
int calc(Node* node) {
    if (node->type == VALUE) {
        return node->value;
    } else if (node->type == ADD) {
        return calc(node->right) + calc(node->left);
    } else if (node->type == MUL) {
        return calc(node->right) * calc(node->left);
    } else if (node->type == SUB) {
        return calc(node->right) - calc(node->left);
    } else {
        return 0; // Handle unsupported operation (optional)
    }
}

int main() {
    Node* add = makeFunc(ADD, makeValueNode(10), makeValueNode(6));
    Node* mul = makeFunc(MUL, makeValueNode(5), makeValueNode(4));
    Node* sub = makeFunc(SUB, mul, add);
    Node* fibo = makeFunc(SUB, sub, makeValueNode(-2));

    int result_add = calc(add);
    int result_mul = calc(mul);
    int result_sub = calc(sub);
    int result_fibo = calc(fibo);

    printf("add : %d\n", result_add); // Output: add : 16
    printf("mul : %d\n", result_mul); // Output: mul : 20
    printf("sub : %d\n", result_sub); // Output: sub : 4
    printf("fibo : %d\n", result_fibo); // Output: fibo : 2

    // Free the dynamically allocated memory
    free(add);
    free(mul);
    free(sub);
    free(fibo);

    return 0;
}
