
# <p align="center">The Coding Interview Bootcamp: Algorithms + Data Structures</p>

![github action deploy badge](https://github.com/filipe1309/ud-ci-bc-alg-ds/actions/workflows/tests.yaml/badge.svg?event=push)
<img src="https://img.shields.io/badge/Code-JavaScript-informational?style=flat-square&logo=javascript&color=F7DF1E" alt="JavaScript" />
<img src="https://img.shields.io/badge/Code-NodeJS-informational?style=flat-square&logo=node.js&color=339933" alt="NodeJS" />
<img src="https://img.shields.io/badge/Code-Jest-informational?style=flat-square&logo=jest&color=C21325" alt="Jest" />

## 💬 About

This project was developed following Udemy's "[The Coding Interview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)" classes.

## :computer: Technologies

- [Node.js](https://nodejs.org/en/)
- [Jest](https://jestjs.io/)

## :scroll: Requirements

- [Node.js](https://nodejs.org/en/)

## :cd: Installation

```sh
git clone git@github.com:filipe1309/ud-ci-bc-alg-ds.git
```

```sh
cd ud-ci-bc-alg-ds
```

## :white_check_mark: Tests

### With Makefile

in root folder

to run all tests

```sh
make test-all
```

OR to run a specific test file

```sh
make test e=EXERCISE_NAME
```
> Example: `make test e=anagrams`


### With NPX

```sh
cd exercises
```

to run all tests

```sh
npx jest
```

OR to run a specific test file

```sh
npx jest path/to/test/file
```
> Example npx jest exercises/anagrams/test.js --watch

## :bug: Debugging

```sh
make debug e=EXERCISE_NAME
```
> Example: `make debug e=anagrams`

<!-- 
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. -->

## License

[MIT](https://choosealicense.com/licenses/mit/)

## About Me

<p align="center">
    <a style="font-weight: bold" href="https://github.com/filipe1309/">
    <img style="border-radius:50%" width="100px; "src="https://github.com/filipe1309.png"/>
    </a>
</p>

---

<p align="center">
    Done with&nbsp;&nbsp;:heart:&nbsp;&nbsp;by <a style="font-weight: bold" href="https://github.com/filipe1309/">Filipe Leuch Bonfim</a> 🖖
</p>

---

> @ Generated with [ShubcoGen Template™](https://github.com/filipe1309/shubcogen-template)   
