console.log('exports === module.exports', exports === module.exports)

exports.c = 3;
exports.d = 4;

// module.exports 是commonjs顶级导出，一个文件中如果既存在顶级导出，又存在普通导出，最终普通导出会被覆盖掉。
// ES6 中，export.default 与 export 是可以并存的，且不会产生覆盖。
module.exports = {
	a:1,
	b:2
}

