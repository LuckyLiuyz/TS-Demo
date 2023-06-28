/**
 * X（目标类型） = Y（源类型），X 兼容 Y
 */

{
	let s: string = 'a';
	// str = null

	/**
	 * 1、接口兼容性
   * 总结：源类型必须包含目标类型的必要属性，也就是说目标类型的属性可能更多；
   * 口诀：接口之间兼容的时候，成员少的会兼容成员多的。
	 * */
	interface X {
		a: any;
		b: any;
	}
	interface Y {
		a: any;
		b: any;
		c: any;
	}
	let x: X = { a: 1, b: 2 };
	let y: Y = { a: 1, b: 2, c: 3 };
	x = y; // X 兼容 Y，这么赋值没问题
	// y = x; // Y 不兼容 X，所以报错：Property 'c' is missing in type 'X' but required in type 'Y'.
}

{
	/**
	 * 2、函数兼容性
	 * 口诀：结构之间兼容：成员少的，兼容成员多的；函数之间兼容：参数多的兼容参数少的。
	 */
	type Handler = (a: number, b: number) => void;
	function hof(handler: Handler) {
		return handler;
	}

	/**
	 * 条件1：参数个数，目标函数的参数个数，一定要多于源函数的参数个数。即参数多的兼容参数少的。
	 */
	let handler1 = (a: number) => {};
	hof(handler1);
	let handler2 = (a: number, b: number, c: number) => {};
	// hof(handler2)； // 报错：目标函数有2个参数，源函数handler2有3个参数，不兼容

	// 固定参数、可选参数、剩余参数
	let a = (p1: number, p2: number) => {};
	let b = (p1?: number, p2?: number) => {};
	let c = (...args: number[]) => {};

	// 固定参数可以兼容可选参数、剩余参数
	a = b;
	a = c;

	// 可选参数不兼容固定参数、剩余参数。但是可以通过修改 "strictFunctionTypes": false 使其兼容
	// b = a;
	// b = c;

	// 剩余参数可以兼容可选参数、固定参数
	c = a;
	c = b;

	/**
	 * 条件2：参数类型
	 */
	let handler3 = (a: string) => {};
	// hof(handler3); // 参数类型必须要匹配

	// 如果函数参数使用接口约束，可以把接口的成员个数认为是参数的个数，最终得到：参数多的，兼容参数少的。
	interface Point3D {
		x: number;
		y: number;
		z: number;
	}
	interface Point2D {
		x: number;
		y: number;
	}
	let p3d = (point: Point3D) => {};
	let p2d = (point: Point2D) => {};
	p3d = p2d; // 参数多的兼容参数少的
	// p2d = p3d; // 参数少的兼容参数多的；但是可以通过修改 "strictFunctionTypes": false 使其兼容


	/**
	 * 条件3：返回值类型
	 * 目标函数的返回值类型必须与源函数返回值类型相同，或者是它的子类型
	 * 返回值：成员少的兼容成员多的
	 */
	let f = () => ({ name: 'Alice' });
	let g = () => ({ name: 'Alice', location: 'Beijing' });
	f = g;
	// g = f

	/**
	 * 函数重载
	 * 函数重载列表中的函数是目标函数；函数的具体实现是源函数
	 * 目标函数的参数个数要多于源函数的参数个数
	 */
	function overload(a: number, b: number): number;
	function overload(a: string, b: string): string;

	// 函数实现
	function overload(a: any, b: any): any {}
	// function overload(a: any): any {} // 正确
	// function overload(a: any, b: any) {}  // 不正确，返回值类型不兼容
	// function overload(a: any, b: any, c: any): any {} // 不正确，比函数重载列表中的函数参数都要多
}

{
	/**
	 * 枚举兼容性
	 * 枚举与枚举之间，是完全不兼容的。枚举与数字之间是兼容的
	 */
	enum Fruit {
		Apple,
		Banana,
	}
	enum Color {
		Red,
		Yellow,
	}
	let fruit: Fruit.Apple = 1;
	let no: number = Fruit.Apple;
	// let color: Color.Red = Fruit.Apple
}

{
	/**
	 * 类兼容性
	 * 与接口类似，只比较结构。
	 * 注意：静态成员和构造函数是不参与比较的。
	 * 如果两个类具有相同的实例成员，则两个类的实例就可以相互兼容
	 */
	class A {
		constructor(p: number, q: number) {}
		id: number = 1;
		private name: string = '';
	}
	class B {
		constructor(p: number) {}
		static s = 1;
		id: number = 2;
		private name: string = '';
	}
	class C extends A {}
	let aa = new A(1, 2);
	let bb = new B(1);

	// 如果两个类有私有成员，则两个类是不兼容的
	// aa = bb;
	// bb = aa;

	// 父类和子类的实例是完全兼容的。
	let cc = new C(1, 2);
	aa = cc;
	cc = aa;
}

{
	/**
	 * 泛型兼容性
	 */
	interface Empty<T> {
		// value: T, // 如果此处不注释掉，就会报错。只有泛型的类型参数T被接口成员使用的时候，才会影响泛型的兼容性
	}
	let obj1: Empty<number> = {};
	let obj2: Empty<string> = {};
	obj1 = obj2;


	// 如果两个泛型的定义相同，没有具体指定参数类型，则可以兼容。
	let log1 = <T>(x: T): T => {
		console.log('x');
		return x;
	};
	let log2 = <U>(y: U): U => {
		console.log('y');
		return y;
	};
	log1 = log2;
}
