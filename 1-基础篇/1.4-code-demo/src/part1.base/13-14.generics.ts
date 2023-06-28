/**
 * 泛型的好处：
 * 1、函数和类可以轻松的支持多种类型，增强程序的扩展性
 * 2、不必些多条函数重载，冗长的联合类型声明，增强代码的可读性
 * 3、灵活控制类型之间的约束
 */
{
	// 定义一个logTemp函数,并实现重载
	function logTemp(value: string): string;
	function logTemp(value: string[]): string[];
	// 或者联合类型
	function logTemp(value: number | string | string[]):number | string | string[]
	function logTemp(value: any){
		console.log(value);
		return value;
	}


	// 思考：如果想接受任何类型的参数，虽然使用any类型能满足，但是它丢失了类型之间的约束关系，不知道参数与返回值类型间的关系。最好的方案就是使用泛型。
	// 泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定。
}


// 定义一个泛型函数 log()
function log<T>(value: T): T {
	console.log('泛型函数log:',value);
	return value;
}

// 两种调用方式
log<string[]>(['a', ',b', 'c']);
log(['a', ',b', 'c']); // 使用ts的类型推断，推荐使用


{
	// 定义泛型函数类型
	type Log = <T>(value: T) => T

	function myLogTepm1(value:any) {
		console.log('myLogTepm1:',value);
		return value;
	}

	let myLog1: Log = myLogTepm1;
	myLog1(1);
}


{
	// 定义泛型接口，"interface Log<T>"的写法会将泛型定义到Log的所有成员上，在实现的时候必须指定一个类型; 或者通过 "interface Log<T=string>"指定一个默认类型，实现时就不必须指定类型了
	interface Log<T> {
			(value: T): T
	}
	function myLogTepm2<T>(value: T): T {
		console.log('myLogTepm2:',value);
		return value;
	}
	let myLog2: Log<number> = myLogTepm2;  // 实现的时候必须指定一个类型
	let myLog3: Log<string> = myLogTepm2;  // 实现的时候必须指定一个类型
	myLog2(2);
	// myLog2('2'); // 报错，只能接受 number 类型入参

	myLog3('myLog3');
}

{

	class Log<T> {
		// static time: T; // 注意：泛型不能应用于类的静态成员
		run(value: T) {
			console.log('class Log<T>', value);
			return value;
		}
	}
	let log1 = new Log<number>();
	log1.run(1);
	let log2 = new Log(); // 当不指定具体类型的时候，就可以传任意的值
	log2.run({ a: 1 });
	log2.run('123');
}

interface Length {
	length: number;
}

// <T extends Length> T继承Length接口，则传入的参数，必须要有length属性
function logAdvance<T extends Length>(value: T): T {
	console.log(value, value.length);
	return value;
}

// logAdvance(1); //报错，因为1为number类型，它没有length属性
logAdvance([1]);
logAdvance('123');
logAdvance({ length: 3 });

