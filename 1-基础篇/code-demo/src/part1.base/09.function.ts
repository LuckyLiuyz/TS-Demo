// 函数定义的四种方式
function add1(x: number, y: number) {
	return x + y;
}
console.log('add1 =', add1(1, 2));

// 以下3种必须满足：函数类型的定义 + 函数具体实现
let add2: (x: number, y: number) => number;
add2 = (a, b) => a + b;
console.log('add2 =', add2(1, 2));

type ADD3 = (x: number, y: number) => number;
let add3: ADD3 = (a, b) => a + b;
console.log('add3 =', add3(1, 2));

interface ADD4 {
	(x: number, y: number): number;
}
let add4: ADD4 = (a, b) => a + b;
console.log('add4 =', add4(1, 2));
// add4(1, 2, 3); // 此时会报错，提示add4只有两个参数，但是却传递了3个参数

// 可选函数参数:需要注意，必选参数必须位于可选参数之前
function add5(x: number, y?: number /*, z: number*/) {
	return y ? x + y : x;
}
console.log('add5 =', add5(1));
console.log('add5 =', add5(1, 2));
// add5(1,2,3);// 此时会报错，提示add5只接受1~2个参数，但是却传递了3个参数

// 必须参数之前有默认值的话，函数调用时必须通过传递undefined占位；必选参数之后如果有默认值，调用时可以不传
function add6(x: number, y = 11, z: number, q = 1) {
	return x + y + z + q;
}
console.log('add6 =', add6(1, undefined, 3)); // 16

// 参数不固定的情况，使用【剩余参数】定义
function add7(x: number, ...rest: number[]) {
	return x + rest.reduce((pre, cur) => pre + cur);
}
console.log('add7 =', add7(1, 2, 3, 4, 5));

// 函数重载：两个函数名称相同，但是参数不相同。要把最容易匹配的函数定义放在最前面，因为是从前往后匹配的。
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]) {
	let first = rest[0];
	if (typeof first === 'number') {
		return rest.reduce((pre, cur) => pre + cur);
	}
	if (typeof first === 'string') {
		return rest.join('');
	}
}
console.log('add8 =', add8(1, 2));
console.log('add8 =', add8('a', 'b', 'c'));
