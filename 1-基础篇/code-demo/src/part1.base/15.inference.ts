{
	let a = 1; // 类型推断为 number 类型
	let b = [1, null, 'a']; // 类型推断为 Array
	let c = { x: 1, y: 'a' };


	let d = (x = 1) => x + 1;  // 类型推断等价为 ==> let d: (x?: number) => number

	window.onkeydown = (event) => {
		// console.log(event.button); // 类型推断为键盘事件，并且知道键盘事件没有button属性。报错： Property 'button' does not exist on type 'KeyboardEvent'.
	};

	interface Foo {
		bar: number;
	}
	let foo1 = {} as Foo; // 方式1：类型断言
	let foo2 = <Foo> { };// 方式2：类型断言

	 // 推荐方式3：类型断言
	let foo3: Foo = {
		bar: 1,
	};

	foo1.bar = 1
	foo2.bar = 1
	foo3.bar = 1
}
