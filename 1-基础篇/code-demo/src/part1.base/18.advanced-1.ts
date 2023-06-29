{
	interface DogInterface {
		run(): void;
	}
	interface CatInterface {
		jump(): void;
	}

	// 定义交叉类型
	let pet: DogInterface & CatInterface = {
		run() {},
		jump() {},
	};



	// 定义联合类型
	let a: number | string = 1;
	// 字面量的联合类型，约定取值的范围
	let b: 'a' | 'b' | 'c';
	let c: 1 | 2 | 3;



	class Dog implements DogInterface {
		run() {}
		eat() {}
	}
	class Cat implements CatInterface {
		jump() {}
		eat() {}
	}
	enum Master {
		Boy,
		Girl,
	}
	function getPet(master: Master) {
		let pet = master === Master.Boy ? new Dog() : new Cat();
		// pet.run()
		// pet.jump()
		pet.eat(); // 类联合类型中，只能取所有类的成员交集
		return pet;
	}


	/**
	 * 可区分的联合类型
	 * 核心：一个类型如果是多个类型的联合类型，每个类型之间有一个公共的属性，那就可以凭借找个公共属性创建不同的类型保护区块。
	 */
	interface Square {
		kind: 'square'; // 公共属性
		size: number;
	}
	interface Rectangle {
		kind: 'rectangle'; // 公共属性
		width: number;
		height: number;
	}
	interface Circle {
		kind: 'circle'; // 公共属性
		radius: number;
	}
	type Shape = Square | Rectangle | Circle;
	function area(s: Shape) {
		switch (s.kind) {
			case 'square':
				return s.size * s.size;
			case 'rectangle':
				return s.height * s.width;
			case 'circle':
				return Math.PI * s.radius ** 2;
			default:
				return ((e: never) => {
					throw new Error(e);
				})(s);
		}
	}
	console.log(area({ kind: 'circle', radius: 1 }));


/**
 * never 类型是 TypeScript 中的底层类型。它在以下情况中很好的被使用：
 * 一个从来不会有返回值的函数,即死循环（如：如果函数内含有 while(true) {}）；
 * 一个总是会抛出错误的函数（如：function foo() { throw new Error('Not Implemented') }，foo 的返回类型是 never）；
 * void 和 never 都是表示一个函数没有返回值，但是他们之间最大的区别是，void 表示可以被赋值的类型，never表示其他任何类型也不能被赋值给它，它只能是 never。
 */

	//永远不会返回结果,死循环
	function foo(): never {
		while(true) {}
	}

	//总是会抛出错误的函数
	function bar(): never {
		throw new Error()
	}

}
