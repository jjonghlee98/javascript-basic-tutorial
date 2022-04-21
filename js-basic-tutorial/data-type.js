// 기본형과 참조형 및 원시형 타입

// 기본형
const number = 1;
const number2 = number; // 복사
console.log(number2);

// 참조형 (객체와 배열 타입) // 포인터를 복사하게 되면 리액트에서 잘못된 결과를 가져올 수 있음.
// 그래서 포인터가 아닌 객체 자체를 복사하는 방법을 사용해야함.
const person = {
  name: 'Max'
};

const secondPerson = person; // 포인터를 가리킴
person.name = 'Jay';

console.log(secondPerson);

// 포인터가 아닌 객체를 복사할 수 있는 방법은 스프레드 구문을 사용하는 것이다.
// 객체와 객체의 값을 복사한다.
const Human = {
  name: 'Max'
}

const secondHuman = {
  ...Human
};

person.name = 'Jay';

console.log(secondHuman); // 객체와 값 그대로 출력