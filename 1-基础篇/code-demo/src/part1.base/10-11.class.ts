{
	// abstract定义抽象类：只能被继承，而不能实例化。好处是可以抽取公共特性，而不用在每个子类中重复编写；
	// 支持多态：定义抽象方法，在不同的子类中实现不同的逻辑处理，运行态根据不同的实例对象运行不同的方法。
	abstract class Animal {
		// 通用的成员函数，可以直接在抽象类定义，子类继承后直接调用
		eat() {
			console.log('eat');
		}
		abstract sleep(): void; // 抽象方法，由子类根据不同情况去各自实现
	}
	// let animal = new Animal(); //报错：只能被继承，不能实例化

	class Dog extends Animal {
		// 如果构造函数加了privete私有属性，那这个类既不能被实例化，也不能被继承
		// 如果构造函数加了protected受保护属性，那这个类只能被继承，而不能被实例化
		constructor(name: string) {
			super(); // 构造函数必须要包含super调用
			this.name = name; // 实例的属性必须有初始值，或者在构造函数中被初始化
			this.pri();
		}

		// 实例的属性必须有初始值，或者在构造函数中被初始化, 或者通过?声明为可选属性
		public name?: string = 'dog';
		run() {}
		private pri() {} //私有成员，只能由自己的实例调用
		protected pro() {} //受保护的成员，只能在当前类或其子类中访问，而不能用实例访问
		readonly legs: number = 4; // 只读属性，不可以被更改，一定要被初始化
		static food: string = 'bones'; // 类的静态成员，只能通过类名来调用，而不能通过实例调用；可以被子类继承
		sleep() {
			console.log('Dog sleep');
		}
	}
	//TODO 注意：类的成员属性都是实例的属性，而不是原型属性；类的成员方法，都是原型方法。
	console.log('Dog.prototype', Dog.prototype);
	let dog = new Dog('wangwang');
	console.log('dog', dog); // 此时只能打印出name legs属性，而不包含方法
	// dog.pri();// 报错：Property 'pri' is private and only accessible within class 'Dog'.
	// dog.pro(); //报错： Property 'pro' is protected and only accessible within class 'Dog' and its subclasses.
	console.log('Dog.food', Dog.food);
	console.log('dog.eat', dog.eat()); // 直接调用抽象类中的方法

	class Husky extends Dog {
		// 构造函数的参数也可以追加修饰符，表示将此参数自动变为当前类的属性
		constructor(name: string, public color: string) {
			super(name);
			this.color = color;
			// this.pri(); // 不能调用父类的私有方法
			this.pro();
		}
		// color: string
	}
	console.log('Husky.food', Husky.food);

	class Cat extends Animal {
		sleep() {
			console.log('Cat sleep');
		}
	}
	let cat = new Cat();

	// 定义一个Animal类实例成员的数组
	let animals: Animal[] = [dog, cat];
	animals.forEach((i) => {
		console.log('多态：');
		i.sleep(); // 实现了多态
	});

	class Workflow {
		step1() {
			return this;
		}
		step2() {
			return this;
		}
	}
	// 链式调用
	new Workflow().step1().step2();

	class MyFlow extends Workflow {
		next1() {
			return this;
		}
		next2() {
			return this;
		}
	}
	new MyFlow().next1().step1().next2().step2();
}
