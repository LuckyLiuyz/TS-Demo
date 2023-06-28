{
	interface Obj {
		a: string;
		b: number;
	}

	// 将所有属性定义为只读属性
	type ReadonlyObj = Readonly<Obj>;

	// 把一个接口的所有属性定义为可选的
	type PartialObj = Partial<Obj>;

	// 抽取接口的子集
	type PickObj = Pick<Obj, 'a' | 'b'>;

	// 非同态的类型
	type RecordObj = Record<'x' | 'y', Obj>;

}
