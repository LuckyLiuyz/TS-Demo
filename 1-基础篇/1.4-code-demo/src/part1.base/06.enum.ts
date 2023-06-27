// 数字枚举
enum Role {
	Reporter = 1,
	Developer,
	Maintainer,
	Owner,
	Guest,
}
console.log(Role.Reporter); // 1
console.log(Role[1]); // Reporter
console.log(Role); // 在浏览器运行环境下，被编译成一个对象
// {
//     '1': 'Reporter',
//     '2': 'Developer',
//     '3': 'Maintainer',
//     '4': 'Owner',
//     '5': 'Guest',
//     Reporter: 1,
//     Developer: 2,
//     Maintainer: 3,
//     Owner: 4,
//     Guest: 5
// }

// 字符串枚举, 字符串枚举不能反向映射
enum Message {
	Success = '恭喜你，成功了',
	Fail = '抱歉，失败了',
}

// 异构枚举
enum Answer {
	N,
	Y = 'Yes',
}

// 枚举成员及分类
// Role.Reporter = 0; // 提示枚举成员的值不可修改
enum Char {
	// 分类1：常量枚举成员,在编译态确定结果，在运行态就以常量的形式展现
	a, // 没有初始值的情况
	b = Char.a, // 对已有枚举成员的引用
	c = 1 + 3, // 常量

	// 分类2：计算型枚举成员,不会在编译态被计算，而是到运行时被计算
	d = Math.random(),
	e = '123'.length,
	f = 4, // 在计算型枚举成员后面的枚举成员必须有初始值，否则会报错
}

// 常量枚举，有个特性是在编译阶段被移除。
// 使用场景：当我们不需要一个对象，而需要对象的值的时候，就可以使用常量枚举，就可以减少在编译环境中的代码
const enum Month {
	Jan,
	Feb,
	Mar,
	Apr = Month.Mar + 1,
	// May = () => 5, // 报错，Const枚举成员初始化项只能包含文字值和其他计算的枚举值。
}
let month = [Month.Jan, Month.Feb, Month.Mar, Month.Apr];
console.log(month); // [ 0, 1, 2, 3 ]

{
	// 枚举类型：数字枚举
	enum Days {
		Sun,
		Mon,
		Tue,
	}
	console.log(Days); // { '0': 'Sun', '1': 'Mon', '2': 'Tue', Sun: 0, Mon: 1, Tue: 2 }

	// 枚举类型：自定义枚举：第一个成员添加为 1，其余成员会依次递增 1
	enum Color {
		Red = 1,
		Green,
		Blue,
	}
	console.log(Color); // { '1': 'Red', '2': 'Green', '3': 'Blue', Red: 1, Green: 2, Blue: 3 }

	// 枚举类型：计算枚举：当枚举包含计算成员和常量成员的混合时，未初始化的枚举成员要么排在第一位，要么必须排在其他具有数值常量的初始化成员之后。
	enum Weekend1 {
		MonDay, // 混合时，未初始化的枚举成员必须放前面
		Friday = 2,
		Saturday = getDate('TGIF'),
		Sunday = Saturday * 40,
	}
	function getDate(day: string): number {
		if (day === 'TGIF') {
			return 3;
		}
		return 0;
	}
	console.log({
		MonDay: Weekend1.MonDay, // 0
		Saturday: Weekend1.Saturday, // 3
		Sunday: Weekend1.Sunday, // 120
	});

	// 枚举类型：字符串枚举
	enum State {
		success = '成功',
		fail = '失败',
	}
	console.log(State); // { success: '成功', fail: '失败' }

	// 枚举类型：异构枚举
	enum Weekend {
		Fri = 'FRIDAY',
		Satur = 1,
		Sun = 2,
	}
	console.log(Weekend);
	/*
      {
        '1': 'Satur',
        '2': 'Sun',
        Fri: 'FRIDAY',
        Satur: 1,
        Sun: 2
      }
    */
}
