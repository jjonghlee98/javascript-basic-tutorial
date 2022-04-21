// 스프레드 연산자
const number = [1, 2, 3];
const newNumber = [...number, 4];

console.log(newNumber);

const person = {
  name: 'max'
};

// 객체
const Human = {
  ...person,
  age: 25
};

console.log(Human);

// 함수
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));