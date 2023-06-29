
{
	// “类”类型的接口：约束类成员有哪些属性（必须是公有成员）以及它们的类型，
	interface Human {
		// new (name: string): void; // 报错：接口不能约束类的构造函数
		name: string;
		eat(): void;
	}

	// implements关键字：实现“接口”
	// 注意：必须实现接口中定义的所有属性，不能缺少，但可以比接口中定义的多。
	class Asian implements Human {
		constructor(name: string) {
			this.name = name;
		}
		name: string; // 如果此处定义为 privete name：string 则会报错，因为只能实现为公有成员。
		eat() {} // 如果注释此行则会报错，因为Human类中定义的属性没有被全部实现
		age: number = 0;
		sleep() {}
	}

	// "接口"被继承
	interface Man extends Human {
		run(): void;
	}

	interface Child {
		cry(): void;
	}

	// "接口"被继承，而且可以继承自多个接口
	interface Boy extends Man, Child {}

	// 定义一个对象，符合Boy接口的规范，所有属性全部实现。
	// 定义接口可以将不同属性归集分类到不同接口，实现类的组合重用
	let boy: Boy = {
		name: '',
		run() {},
		eat() {},
		cry() {},
	};

	class Auto {
		state = 1;
		// private state2 = 1
	}

	// 接口继承类，则接口中就隐含了类的属性，但是类不能有私有属性
	// 注意： 接口在抽离类的成员的时候，不仅抽离了公共成员，而且也抽离了私有成员和受保护成员
	interface AutoInterface extends Auto {
		// 包含 Auto 的公有成员、受保护成员、私有成员
	}

	// 如果Auto 中定义了 private state2=1 此处会报错。因为C不是Auto的子类，也就不能包含Auto的非公有成员
	class CD implements AutoInterface {
		state = 1;
	}

	// 定义一个Auto的子类，并且实现 AutoInterface
	class Bus extends Auto implements AutoInterface {}
}
