# Math对象

提供了一些数学函数
Math.E
Math.PI
Math.round(x)

随机数
Math.random() 给出一个[0,1)的随机数

# 条件语句

```javascript
if (条件) {

} else if (条件) {

} else {

}
```
三目运算符也是和C类似。
switch也是一样。

```javascript
switch (东西) {
    case 情况1:
        语句;
        break;
    case 情况2:
        ...
        break;
    default 默认:
        ...
        break;
}

```

```javascript
== 值相等
=== 值相等且数据类型相等

!= 不相等
!== 值不相等或数据类型不相等
```

# 循环

```javascript
while一样
for (let i = 0; i <= 10; i++) {

}
```

# checked

element.checked
1. 获取复选框或单选按钮是否被选中
2. 设置复选框或单选按钮的状态

# 选择

checkbox 方框 可以多选
radio 圆框 单选 通过name属性来分组

## label

使用for属性与相应的id值，在点击label文字时可以进行选择。

# 字符串

```javascript
.charAt(i)//获取第i个位置的字母
.indexOf("a")//获取字符第一次出现的下标
.lastIndexOf("a")//最后一次出现的下标
.length
.trim()//删除两端空格
.replace("a", "b")
.replaceAll("a", "b")
.slice(l, r)//截取一段
```
## join方法

将数组连接成字符串。

# method chaining

一些函数执行完返回的还是当前对象，因此可以继续使用.进行方法操作。

```javascript
//使字符串去掉空格，首字母大写，其余字母小写。
username = window.prompt("Enter your name");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
```

# isNaN(x)

判断是否为数字

"123"也视作数字

# 函数
```javascript
function dfs(x, y) {

}

dfs(x, y);

function max(x, y) {
    return x > y ? x : y;
}

let a = max(a, b);
```

# 作用域

# 数组

```javascript
let a = ["Alice", "Bob", "Cat"];
a.push("Dog");//在后面加入
a.pop();//删掉最后一个
a.sort();//排序
a.reverse();//反转

for (let i = 0; i < a.length(); i++)
    console.log(a[i]);

for (let b of a) {//这种遍历方法
    console.log(b);
}
```

# 扩展运算符(...)

扩展运算符可以将数组或者字符串展开。

1. 传入多个参数
```javascript
a = [1, 1, 4, 5, 1, 4, 2, -1];
maximum = Math.max(...a);//这样传参
```

2. 展开字符串
```javascript
username = "Taylor Swift";
letters = [...username];
```

3. 展开数组
```javascript
let a = [1, 2, 3, 4];
let b = [1, 1, 4, 5];

let c = [...a, ...b, 5, 1, 4];
```

4. 展开对象
5. 
# rest参数

将若干个参数打包成一个数组，因此它必须是函数的最后一个参数。

```javascript
function myFun(...args) {
    //args是一个数组
}
```

# 回调函数(callback)

把一个函数作为参数传递给另一个函数。

主要用来实现异步操作。

```javascript
function hello(callback) {//不用加括号
    console.log("Hello");
    callback();
}
function goodbye() {
    console.log("Goodbye");
}
hello(goodbye);
```
这样可以在完成某些任务后调用goodbye。

# forEach方法

遍历数组，并对每个元素执行一个函数。
```javascript
array.forEach(callback(currentValue, index, array), thisArg);
```
callback：一个函数，用于对每个数组元素执行操作。它有三个参数：

currentValue：当前正在处理的元素。

index（可选）：当前正在处理的元素的索引。

array（可选）：调用 forEach 的数组本身。

thisArg（可选）：可选的值，用于指定 callback 中 this 的值。如果未提供，this 将是 undefined。

```javascript
let numbers = [1, 2, 3, 4, 5];
function display(number) {
    console.log(number);
}

function double(element, index, array) {
    array[index] = element * 2;
}

numbers.forEach(display);
numbers.forEach(double);//实现对原来数组double
```

# map方法

遍历数组，并对每个元素执行一个函数，返回一个新数组，并且不会改变原数组。

```javascript
numbers = [1, 2, 3, 4, 5];
function square(element) {
    return Math.pow(element, 2);
}
squares = numbers.map(square);
```

# filter方法

筛选数组中元素，满足条件的放进去。

```javascript
numbers = [1, 1, 4, 5, 1, 2, 4, 6];
function isEven(element) {
    return element % 2 === 0;
}
evenNumbers = numbers.filter(isEven);
```

# reduce方法
将数组归为一个数值。可以实现累加，计数等功能。
```javascript
array.reduce(callback(accumulator, currentValue, index, array), initialValue);
```
callback: 处理每个数组元素的函数。它有四个参数：

accumulator: 上一次调用 callback 时返回的（累加）值，或 initialValue（如果提供了）。

currentValue: 当前处理的数组元素。

index（可选）: 当前处理的元素的索引。

array（可选）: 调用 reduce() 的数组本身。

initialValue（可选）: 初始值，第一次调用 callback 时传递给 accumulator 的值。如果未提供，accumulator 将使用数组中的第一个元素，currentValue 从第二个元素开始。

```javascript
numbers = [14, 242, 21, 23, 589];
function sum(accumulator, element) {
    return accumulator + element;
}
total = numbers.reduce(sum);
```

```javascript
numbers = [14, 242, 21, 23, 589];
function max(accumulator, element) {
    return Math.max(accumulator, element);
}
total = numbers.reduce(max);
```

# 函数表达式 不用管我看不懂
区别于函数声明，将函数扔掉变量里面。

有一种作用就是可以直接把函数写在传参里面作为callback。

```javascript
numbers = [14, 2, 5, 114, 23, 514];
squares = numbers.map(function (element) {//可以不用起名
    return Math.pow(element, 2);
});
```

# 箭头函数

简洁地写函数表达式的方法。

```javascript
const functionName = (parameters) => {
  // 函数体
};
```

functionName 是函数的名称（可选）。

parameters 是函数的参数，可以是一个或多个。如果只有一个参数，可以省略圆括号。如果没有参数，必须使用空的圆括号 ()。

箭头 => 是箭头函数的标志。

{} 包含函数体。如果函数体有多个语句，则需要使用大括号包围，并且在函数体的最后需要显式返回值（使用 return 关键字）。

如果函数体只有一个表达式，可以省略大括号和 return 关键字，直接返回表达式的值。

## 简单实现累加：
```javascript
numbers = [1, 1, 4, 5, 1, 4];
total = numbers.reduce((accumulator, element) => accumlator + element);
console.log(total);
```

# 对象

一些方法，属性的集合。

```javascript
const object = {
    key1: value,
    key2: function(){},
    ...//没有分号
}
```

## this关键词

在对象方法中，this 关键字引用对象本身：this指向

在箭头函数中，this继承自外部作用域，因此在对象方法中不常用箭头函数。

```javascript
const person1 = {
    name: "Alice",
    age: 14,
    greet: function() {
        console.log(`hello, I'm ${this.name}`);
    }
}
person1.greet();
```

# 构造函数（Constructor）

用来初始化对象的函数，在对于创建多个对象时起到便利。

```javascript
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.hello = function() {console.log(`Hello, I'm ${this.name}`);}
}
person1 = new Person("Alice", 15, "female");
```

# 类（Class）

另一种创建对象的方法，它将使其变得清楚简洁。

```javascript
class myClass {
    constructor() {}
    myMethod() {} //无需在前面写function
}
myStuff = new myClass();
```


```javascript
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayProduct() {
        console.log(`Product:${this.name}`);
        console.log(`Price:$${this.price}`);
    }
}

product1 = new Product("Jacket", 19.83);
```

# static关键字

可以创建一些方法和属性，他们是这个类所具有的，不用通过实例来访问。

```javascript
class MathUtil {
    static PI = 3.1415;
}
let MathUtil1 = new MathUtil();
console.log(MathUtil.PI);//可以直接通过类名来访问PI，而不需要通过实例
```

```javascript
class user {
    static userCount = 0;    
    constructor(username) {
        this.username = username;
        user.userCount++;//通过类本身访问
    }
    static getUserCount() {
        console.log(`There are ${user.userCount} people.`);
    }
    sayhello() {
        console.log(`Hello, I'm ${this.username}.`);
    }
}
const user1 = new user("Alice");
const user2 = new user("Bob");
user.getUserCount();
user1.sayhello();
user2.sayhello();
```

# 继承（Inheritance）

子类可以继承父类的方法，属性。

这通过关键字extends实现。

可以实现代码复用，并且子类可以具有自己的方法属性。

```javascript
class Animal {
    alive = true;
    eat() {
        console.log(`This ${this.name} eats.`);
    }
    sleep() {
        console.log(`This ${this.name} sleeps.`);
    }
}

class rabbit extends Animal {
    name = "rabbit";
}

class fish extends Animal {
    name = "fish";
}

rabbit1 = new rabbit();
rabbit1.eat();
rabbit1.sleep();
```

## super关键字

super关键字用来调用父类的方法或构造函数。

```
this = this object
super = the parent
```

```javascript
class Animal {
    alive = true;
}
class Rabbit extends Animal {
    constructor (name, age, runSpeed) {
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal {
    constructor (name, age, swimSpeed) {
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;
    }
}
```

子类如果有相同的属性，可以通过父类的构造函数来初始化。

```javascript
class Animal {
    alive = true;
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal {
    constructor (name, age, runSpeed) {
        super(name, age);//调用父类的constructor
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal {
    constructor (name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
```

extends实现了方法和属性的复用。super实现了构造函数和方法的复用。

super调用父类函数。

```javascript
class Animal {
    alive = true;
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    move (speed) {
        console.log(`This ${this.name} runs at ${speed} km/h.`);
    }
}
class Rabbit extends Animal {
    constructor (name, age, runSpeed) {
        super(name, age);//调用父类的constructor
        this.runSpeed = runSpeed;
    }
    run() {
        console.log(`This ${this.name} can run.`);
        super.move(this.runSpeed);
    }
}
```

而且super在重写函数中可以起到对父类方法的复用。

# getter & setter

通过getter获取内部属性，setter更改内部属性。实现对内部属性的隐藏。

通常在变量名前加上_表示内部属性。

设置属性时，会调用setter。
访问属性时，会调用getter。

```javascript
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        //属性赋值：当你执行 person.age = 25 时，age 属性的 setter 方法会被自动调用。
        //newAge 参数接收到值 25。
    }
    set name(newName) {
        // if (...) 并且可以在赋值的时候进行判断
        this._name = newName;
    }
    get name() {
        return this._name;
    }
    set age(newAge) {
        // if (...)

        this._age = newAge;
    }
    get age() {
        return this._age;
        //return this._Age + "years old";可以是计算后的结果。
    }
    get sex() {//get也可以返回没有construct过的属性
        return "?";
    }
}
```

# 解构赋值（destructuring）

# 数组解构

交换两个值
```javascript
let a = 1;
let b = 2;
[a, b] = [b, a];

const colors = ["yello", "blue", "green", "red"];
[colors[1], colors[3]] = [colors[3], colors[1]];
```

将数组赋值给变量。
```javascript
const colors = ["yello", "blue", "green", "red"];
[firstColor, thirdColor] = [colors[0], color[2]];
```

# 对象解构

```javascript
const person = {
    name: "alice",
    age: 13,
    sex: "female"
};
const person2 = {
    name: "alice",
    age: 13
};
const {name, age, sex} = person;
const {name2, age2, sex2 = "?"} = person2;//可以设置默认
```

# 嵌套对象（Nested object）

对象的属性可以是对象。
```javascript
const person = {
    address: {
        street: "10",
        city: "DG"
    },
    name: "alice",
    age: 10
};
```

怎么创建

```javascript
class Person {
    constructor (name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address {
    constructor (city, country) {
        this.city = city;
        this.country = country;
    }
}
```

# 对象数组
是简单的东西。

# Sort()方法

是将元素当做字符串来按照字典序排序。

```javascript
numbers = [1, 2, 3, 4, 5, 10];
numbers.sort();//1, 10, 2, 3, 4, 5
```

我们可以传入一个callback，实现按数字大小排序

```javascript
numbers = [1, 2, 3, 4, 5, 10];
numbers.sort((a, b) => a > b);//1, 2, 3, 4, 5, 10
```

# Fisher-Yates 洗牌算法

保证每个元素出现在每个位置上的概率是均等的。

```javascript
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));//[0, i]
        [array[i], array[random]] = [array[random], array[i]];
    }
    return array;
}
cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
console.log(shuffle(cards));
```

# Date对象

Date对象是javascript里内置的一个对象，用来处理日期和时间。

```javascript
const date = new Date();//获取当前时间
console.log(date);
```

更多操作上网查。

# 闭包（Closure）

当一个函数在另一个函数内部被定义时，内部函数可以访问外部函数的变量。

即使外部函数已经执行结束，内部函数依然可以访问这些变量，这就是闭包的特性。

```javascript
function outer() {
    let message = "Hello";
    function inner() {
        console.log(message);
    }
    inner();
}
outer();
```

实现一个queue的迭代器。

并且由于闭包的特性，在外部更改不了data和len。

因此当你有一些数据要求保证其私密性，可以在外面套上一个function形成一个闭包。

```javascript
function creatQueue() {
    let data = [1, 2, 3, 4, 5];
    let len = 5;
    function creatIterator(idx) {
        return {
            val() {
                return data[idx];
            },
            next() {
                return creatIterator(idx + 1);
            },
            isEnd() {
                return idx == len;
            }
        }
    }
    return {
        begin() {
            return creatIterator(0);
        }
    }
}
let queue = creatQueue();
let it = queue.begin();
while (!it.isEnd()) {
    console.log(it.val());
    it = it.next();
}
```

# setTimeout & clearTimeout

setTimeout：让函数在若干时间后执行。

clearTimeout: 撤销这个setTimeout。

```javascript
const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
clearTimeout(timeoutId);
```

# 数字时钟

如何让它一直刷新？

setInterval

# 秒表

start stop reset

# ES6 Module

可以导入、导出一些函数。

```html
<!-- index.html -->
<script type="module" src="index.js"></script>
```

导出
```javascript
//mathUtil.js
export const PI = 3.14159;
export function getArea(radius) {
    return PI * radius * radius;
}
export function getCircumference(radius) {
    return 2 * PI * radius;
}
```

导入
```javascript
//index.js
import {PI, getArea, getCircumference} from './mathUtil.js';
```

# 同步（Synchronous）和异步（Asynchronous）

```javascript
fun1();
fun2();
//同步，按顺序执行，fun1执行完后才能执行fun2
```

异步

通过callback，promise，async/await等实现。

```javascript
setTimeout(() => console.log("task 1"), 2000);
console.log("task 2");
//不用等到task1执行完，task2就可以开始执行
```

# Error对象

当程序出现错误，会影响我们执行之后的操作。

try-catch块。
当try中的代码发生错误，会跳转到catch块，否则执行完try块中的代码。

```javascript
try {
    //可能发生错误的代码
    throw new Error("Error message");//可以手动扔出错误信息
} catch(error) {
    console.log(error);//可以发送错误信息
    console.error(error);//将错误信息高亮
} finally {
    //这是可选的，总是会执行。
    //常用来清理资源（关闭文件，连接等）
}
```

# DOM（Document object model）

DOM是网页页面上的对象，提供了接口进行交互。
通过DOM，javascript可以动态地访问、更改html中的元素。

DOM 将 HTML 文档组织为一个树形结构，树中的每个节点都代表文档的一部分，如元素、属性、文本等。

```
document
│
├──html
    │
    ├──head
    ├──body
```

可以修改样式。
```javascript
document.body.style.backgroundColor = "black";
```

## DOM选择器

1. `getElementById(id)`
返回元素或者NULL

2. `getElementClassName(className)`
根据元素的 class 名称获取一组元素。
返回一个类数组的对象 HTMLCollection，包含所有具有指定类名的元素（或空集合）。
用[]来访问每一个。
HTMLCollection没有forEach方法，可以使用Array.from()来转换成数组。

3. `getElementsByTagName(tagName)`
根据元素的标签名称获取一组元素。
返回一个类数组的对象 HTMLCollection，包含所有具有指定类名的元素（或空集合）。

4. `querySelector(selector)`
使用 CSS 选择器语法选择第一个匹配的元素。

5. `querySelectorAll(selector)`
返回一个类数组的对象 NodeList，包含所有与选择器匹配的元素（或空集合）。

nodelist是静态的，不会随DOM改变而改变。而htmlcollection会。但notelist有forEach方法。

## DOM导航

如何遍历DOM这个树结构。

元素导航：只返回元素节点。
```javascript
.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children
```

# Add & change HTML

`document.createElement(tagName)`生成一个`tagName`元素。
再用`append()`插入到DOM上。

```javascript
const newH1 = document.createElement("h1");
newH1.id = "myH1";
newH1.textContent = "This is a newH1";
document.body.append(newH1);//加入body，newH1成为其最后一个孩子
//使用prepend可以是第一个孩子

document.body.insertBefore(newElement, currentElement);//将新元素插入到现有元素前面

document.getElementById(parentId).removeChild(childElement)//可以移除孩子
```
# 事件

## 常见的鼠标事件
1. `click`：当用户点击鼠标时触发。
2. `dblclick`：当用户双击鼠标时触发。
3. `mousedown`：当用户按下鼠标按钮时触发。
4. `mouseup`：当用户释放鼠标按钮时触发。
5. `mousemove`：当鼠标在元素上移动时触发。
6. `mouseover`：当鼠标指针移到元素上方时触发。
7. `mouseout`：当鼠标指针离开元素时触发。
8. `mouseenter`：当鼠标指针进入元素时触发，仅在元素进入时触发一次。
9. `mouseleave`：当鼠标指针离开元素时触发，仅在元素离开时触发一次。
10. `contextmenu`：当用户右击鼠标时触发，通常用于显示上下文菜单。

## 事件监听器
`element.addEventListener(event, callback)`

当元素监测到事件时，就会执行callback。
这个callback可以接受一个参数`event`。
`event.target`: 触发事件的目标元素。

## 常见的键盘事件
keydown: 当用户按下任意键时触发（键被按下时触发，不论是否释放）。
keyup: 当用户释放键时触发。

使用`document.addEvenListener(event, callback)`来监听键盘事件。

一些`event.key`
```
ArrowDown
ArrowUp
ArrowLeft
ArrowRight
```

用方向键控制div移动。
```javascript
document.addEventListener("keydown", (event)=>{
    console.log(event);
    switch (event.key) {
        case "ArrowDown":
            y += step;
            break;
        case "ArrowUp":
            y -= step;
            break;
        case "ArrowLeft":
            x -= step;
            break;
        case "ArrowRight":
            x += step;
            break;
    }
    myDiv.style.top = `${y}px`;
    myDiv.style.left = `${x}px`;
});
```

# Show & Hide 元素


# 一些东西

扔骰子

利用DOM更改innerHTML显示图片

# 函数表达式？

# CSS

怎么顺序也会有影响