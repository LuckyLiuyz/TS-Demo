{
    interface List {
        readonly id: number;// 只读属性：不允许修改
        name: string;
        age?: number; // 可选属性：既可有可无的属性
        [x: string]: any; // 字符串索引签名：用任意的字符串去索引List，可以得到任意类型的结果
    }
    interface Result {
        data: List[]
    }
    function render(result: Result) {
        result.data.forEach((value) => {
            console.log(value.id, value.name)
            if (value.age) { // 如果List中不定义可选属性，此处就会报错
                console.log(value.age)
            }
            // value.id++
        })
    }
    let result = {
        data: [
            {id: 1, name: 'A', sex: 'male'},
            {id: 2, name: 'B', age: 2}
        ]
    }
    render(result);
    render({
        data: [
            {id: 11, name: '1-A', sex: 'male'}, // 如果List不使用索引签名，此处会报错
            {id: 12, name: '1-B', age: 12}
        ]
    })
    render({
        data: [
            {id: 21, name: '2-A', sex: 'male'},
            {id: 22, name: '2-B', age: 22}
        ]
    } as Result) // 如果List不使用索引签名,可以使用类型断言，绕过检测也不报错
}

// 数字索引的接口：如果不确定一个对象中有多少属性
interface StringArray {
    [index: number]: string // 用任意数字类型去索引StringArray，得到的是string类型的值
}
let chars: StringArray = ['a', 'b']

interface Names {
    // y: number; // 这是不被允许的
    [x: string]: any; 
    //[x: string]: string; // 此时会报错，因为下面数字索引签名的返回值定义的是number，不兼容
    [z: number]: number; // 数字索引签名的返回值，必须是字符串索引签名返回值的子类型
}

{
    // 定义方式一
    // let add: (x: number, y: number) => number
    
    // 定义方式二(等价与方式一)
    // interface Add {
    //     (x: number, y: number): number
    // }

    // 定义方式三：类型别名，即type关键字，为当前函数类型起一个名字
    type Add = (x: number, y: number) => number

    let add: Add = (a, b) => a + b; //函数实现
    console.log('add(1,2) =',add(1,2))
}

{
    // 混合类型的接口：既可以定义函数，又可以定义普通字符属性等
    interface Lib {
        (): void;
        version: string;
        doSomething(): void;
    }

    function getLib() {
        let lib = (() => {}) as Lib; // 如果不用类型断言，会报错。
        lib.version = '1.0.0'
        lib.doSomething = () => {}
        return lib;
    }
    let lib1 = getLib()
    lib1()
    let lib2 = getLib()
    lib2.doSomething()
}
