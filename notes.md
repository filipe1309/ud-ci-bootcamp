# Notes

> notes taken during the course


## Section 2 - A touch of Setup

https://github.com/StephenGrider/algocasts

```sh
npx jest
```

Or

```sh
npx jest fib/test.js --watch
```

## Section 3 - String Reversal

Debug with node

add `debugger;` to the code

add a call to the function manually

```sh
node inspect exercises/reversestring/index.js
```

```sh
debug> continue
# OR
debug> c
```

```sh
debug> repl
```

```sh
> str
```

```sh
> str.split('').reduce((reversed, char) => char + reversed, '');
```

```sh
# exit
Ctrl + C
```

```sh
debug> quit
```

```sh
make test e=reversestring
```

## Section 4 - Palindromes

```sh
make test e=palindrome
```
