declare namespace umdLib {
	const version: string;
	function doSomething(): void;
}

export as namespace umdLib;  // umd库，这条语句是不可缺少的

export = umdLib;
