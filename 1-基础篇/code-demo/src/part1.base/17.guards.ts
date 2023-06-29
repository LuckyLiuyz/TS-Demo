enum Type {
	Strong,
	Week,
}

class Java {
	helloJava() {
		console.log('Hello Java');
	}
	java: any;
}

class JavaScript {
	helloJavaScript() {
		console.log('Hello JavaScript');
	}
	js: any;
}

function isJava(lang: Java | JavaScript): lang is Java {
	return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, arg2: string | number) {
	let lang = type === Type.Strong ? new Java() : new JavaScript();

	// if ((lang as Java).helloJava) {
	//     (lang as Java).helloJava();
	// } else {
	//     (lang as JavaScript).helloJavaScript();
	// }

	// 方法1：instanceof
	// if (lang instanceof Java) {
	//     lang.helloJava()
	//     // lang.helloJavaScript()
	// } else {
	//     lang.helloJavaScript()
	// }

	// 方法2：in
	// if ('java' in lang) {
	//     lang.helloJava()
	// } else {
	//     lang.helloJavaScript()
	// }

	// 方法3：typeof
	if (typeof arg2 === 'string') {
	    console.log(arg2.length)
	} else {
	    console.log(arg2.toFixed(2))
	}

	// 方法4： 类型保护函数
	if (isJava(lang)) {
		lang.helloJava();
	} else {
		lang.helloJavaScript();
	}
	return lang;
}

getLanguage(Type.Week, 1);
