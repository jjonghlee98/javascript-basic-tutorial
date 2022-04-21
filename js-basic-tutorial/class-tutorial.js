// // 휴먼 클래스
// class Human {
// 	constructor() {
// 		this.gender = 'male';
// 	}

// 	printGender() {
// 		console.log(this.gender);
// 	} 
// }

// // 휴먼 클래스를 상속한 펄슨 클래스
// class Person extends Human {
// 	constructor() {
// 		super();
// 		this.name = 'Max';
// 		this.gender = 'female'; // person class에서 확장되었기 때문에 male이 아닌 female을 출력
// 	}

// 	printMyName() {
// 		console.log(this.name);
// 	}
// }

// const person = new Person();
// person.printMyName();
// person.printGender();

// //properties는 클래스와 객체에 추가되는 변수, Method는 클래스와 객체에 추가되는 함수이다.

// es6 최신 방법
class Human {
	gender = 'male'

	printGender = () => {
		console.log(this.gender);
	}
}

class Person extends Human {
	name = 'Max'

	printMyName = () => {
		console.log(this.name);
	}
}

const person = new Person();
person.printMyName();
person.printGender();
