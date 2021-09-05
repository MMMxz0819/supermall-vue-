module.exports = {
    plugins: {
        autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
        'postcss-px-to-viewport': {
            unitToConvert: 'px', // 需要转换的单位，默认为"px"
            viewportWidth: 375, // 设计稿的视口宽度
            unitPrecision: 6, // 单位转换后保留的精度
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: [], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: false, // 媒体查询里的单位是否需要转换单位
            replace: true, // 是否转换后直接更换属性值
            exclude: undefined, // 设置忽略文件，用正则做目录名匹配
            include: undefined, //如果设置了include，那将只有匹配到的文件才会被转换
            landscape: false, // 是否处理横屏情况
            landscapeUnit: 'vw', // 横屏时使用的单位
            landscapeWidth: 568,  // 横屏时使用的视口宽度
            //exclude: []  正则表达式，排除不需要的文件
        }
    }
}
