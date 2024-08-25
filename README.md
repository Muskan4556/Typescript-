# Typescript
* A Static Type Checker
* TypeScript stands in an unusual relationship to JavaScript.
* It offers all of JavaScript’s features, and an additional layer on top of these: TypeScript’s type system. 
* Using TypeScript's type system helps catch errors at compile time and improves the overall robustness of your code. Always aim to define specific types for your variables, functions, and objects to leverage TypeScript's full power. Using `any` should be a last resort when type safety isn't feasible or necessary.

### TypeScript Variable Declaration

In TypeScript, you declare a variable using the `let`, `const`, or `var` keyword, followed by the variable name, a colon, the type, and an optional value assignment:

```typescript
let variableName: type = value;
```

### Example Declarations with Different Data Types

1. **Number**:
   ```typescript
   let age: number = 25;
   ```

2. **String**:
   ```typescript
   let name: string = "John";
   ```

3. **Boolean**:
   ```typescript
   let isActive: boolean = true;
   ```

4. **Array**:
   ```typescript
   let scores: number[] = [90, 85, 88];
   ```

5. **Tuple**:
   ```typescript
   let person: [string, number] = ["Alice", 30];
   ```

6. **Enum**:
   ```typescript
   enum Color {Red, Green, Blue};
   let c: Color = Color.Green;
   ```

7. **Any**:
   ```typescript
   let randomValue: any = "Hello";
   randomValue = 42; // No type-checking error
   ```

   **Best Practice**: 
   - The `any` type disables type checking for that variable, making it similar to regular JavaScript. It's useful when migrating JavaScript code to TypeScript or when you don't know the type ahead of time. However, it's recommended to avoid `any` whenever possible to maintain the benefits of TypeScript's type safety.

8. **Void**:
   ```typescript
   function logMessage(): void {
     console.log("This is a message");
   }
   ```

9. **Null and Undefined**:
   ```typescript
   let u: undefined = undefined;
   let n: null = null;
   ```

10. **Object**:
    ```typescript
    let person: {name: string, age: number} = {
      name: "John",
      age: 25
    };
    ```

### Special Type: `any`

- **When to Use**:
  - Use `any` when you need to bypass type checking, for example, when dealing with dynamic content, legacy code, or external libraries that don’t have type definitions.

- **Avoid Using `any`**:
  - Overusing `any` can defeat the purpose of TypeScript by allowing errors to slip through. To maintain strong typing, use `any` sparingly.

- **noImplicitAny Compiler Flag**:
  - The `noImplicitAny` flag in the TypeScript compiler (`tsconfig.json`) forces you to explicitly declare the type of variables if they would otherwise be `any`. This helps catch unintentional usage of `any`.

    ```json
    {
      "compilerOptions": {
        "noImplicitAny": true
      }
    }
    ```