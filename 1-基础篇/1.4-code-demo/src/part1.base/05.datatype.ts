{
	// 原始类型
	let bool: boolean = true;
	let num: number | undefined | null = 123;
	let str: string = 'abc';
	// str = 123
}

{
	// 数组
	let arr1: number[] = [1, 2, 3];
	let arr2: Array<number | string> = [1, 2, 3, '4'];
}

{
	// 元组
	let tuple: [number, string] = [0, '1'];
	// tuple.push(4); // 元组越界问题，虽然能push进去，但是通过下标访问时会报错，强烈不建议如此使用
	// console.log(tuple);
	// console.log(tuple[2]); // 报错
}

{
	// 函数
	let add = (x: number, y: number) => x + y;
	// 函数定义
	let compute: (x: number, y: number) => number;
	// 函数实现
	compute = (a, b) => a + b;
}

{
	// 对象
	let obj1: object = { x: 1, y: 2 };
	// obj1.x = 3; // 会报错，因为没有定义x属性的类型
	let obj2: { x: number; y: number } = { x: 1, y: 2 };
	obj2.x = 3;
}

{
	// symbol
	let s1: symbol = Symbol();
	let s2 = Symbol();
	// console.log(s1 === s2)
}

{
	// undefined, null
	let un: undefined = undefined;
	let nu: null = null;

	let num: number | undefined | null = 1;
	num = undefined;
	num = null;
}

{
	// void 是一种操作符号，用于返回 undefined
	let noReturn = () => {};
}

{
	// any类型：在ts中，如果不指定一个变量的类型，默认就是any类型
	let x;
	x = 1;
	x = [];
	x = () => {};
}

{
	// never类型是指永远不会有返回值的类型
	let error = () => {
		throw new Error('error');
	};
	let endless = () => {
		while (true) {}
	};
}
