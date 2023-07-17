const { override, fixBabelImports } = require('customize-cra');

// 实现antd组件的按需引入
module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css',
	})
);
