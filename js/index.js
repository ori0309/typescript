"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let str = 'nihao';
console.log(str);
// 定义数组类型
let arr = [];
for (let index = 0; index < 10; index++) {
    arr.push(index);
}
console.log(arr);
let arr1 = ['111', '33333'];
console.log(arr1);
// 定义元祖类型是数组的一种  指定每个值的类型
let arr2 = ['11a', 222];
// 枚举类型 enum
// pay_status 0未支付 1支付 2交易成功 枚举类型可以当做变量进行使用
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
let f = Flag.success;
console.log('f', f);
console.log('f', Flag.error);
// 枚举类型默认没有赋值就是索引值
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["black"] = 4] = "black";
    Color[Color["blue"] = 5] = "blue";
})(Color || (Color = {}));
console.log(Color.blue);
// any任意类型  
let num = 132;
num = 'asdad';
console.log('num', num);
let box = document.getElementById("box");
box.style.color = 'red';
// null undefined 其他类型（never类型）的子类型
let a;
// 输出undefined
console.log('a', a);
let b;
console.log(b);
//  一个元素可能是null undefined number类型
let num1;
let num2;
// void 方法没有返回值
function run() {
    console.log(111);
}
run();
// function run1():string{
//     console.log(111)
// }
// run1()
function info(name, age) {
    return `${name}---${age}`;
}
console.log(info('212', 11));
// 函数的三点运算符 的 参数
function sum(...result) {
    let sum = 0;
    for (let index = 0; index < result.length; index++) {
        sum += result[index];
    }
    return sum;
}
console.log(sum(1, 23, 45));
// 类
class Person {
    constructor(n) {
        this.name = n;
    }
    run() {
        console.log(this.name);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
let p = new Person('xiaoming');
console.log('huoqu ', p.getName());
p.setName('打算');
console.log('set之后 ', p.getName());
// 多态  父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现。 也是继承的一种表现
// 装饰器就是一个方法 可以附加到类 方法 属性 参数上，可以修改类的行为
// 普通装饰器 无法进行传参 作用是进行扩展
// function logClass(param: any) {
//     console.log(param) // param就是当前类
// }
// @logClass
// class HttpClient {
//     constructor() {
//     }
//     getData() {
//     }
// }
// let htt = new HttpClient()
// 装饰器工厂 可以进行传参 
// function logClass(params: string) {
//     console.log(params)
//     return function (target:any){
//         console.log('target',target) //就是类
//         target.prototype.apiUrl = params
//     }
// }
// @logClass('aaaa')
// class HttpClient {
//     constructor() {
//     }
//     getData() {
//     }
// }
// let htt = new HttpClient()
// console.log('d',htt.apiUrl)
// 用装饰器修改类中的构造函数 重载构造函数 或者 方法
function log(target) {
    console.log(target);
    return class extends target {
        constructor() {
            super(...arguments);
            this.api = '修改后的值';
        }
        getData() {
            console.log('ada', this.api);
        }
    };
}
let Ht = class Ht {
    constructor() {
        this.api = '我是构造函数里面的api';
    }
    getData() {
        console.log(this.api);
    }
};
Ht = __decorate([
    log
], Ht);
let http = new Ht();
http.getData();
console.log('-----------------------------------------------');
// 属性装饰器  
