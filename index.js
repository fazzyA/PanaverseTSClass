// OOPS classes in TS
class Car {
    // information variable data members
    // methods / functions - behaviour
    color;
    hp;
    model;
    _lisence; // read , update
    constructor(color, hp, model) {
        // first method which runs after object initiate
        this.color = color;
        this.hp = hp;
        this.model = model;
    }
    get lisence() {
        return this._lisence;
    }
    set lisence(val) {
        this._lisence = val;
    }
    displayAll() {
        return `${this.color} ${this.model} ${this.hp}`;
    }
    displayModel() {
        return this.model;
    }
    carStart() {
        return this.color;
    }
    changeGear() {
        return ' car is changing gear';
    }
    stopCar() {
        return ' car is stopping';
    }
}
const cultus = new Car("silver", "100", 2022); // instance/ object 
const civic = new Car("blue", '1998', 100); // instance/ object
const alto = new Car("orange", '2022', 100); // instance/ object
// console.log(cultus.displayAll())
// console.log(civic.displayAll())
// console.log(alto.displayAll())
cultus.lisence = "str123";
console.log(cultus.lisence); //str123
export {};
// // //
// // // console.log('classs 2');
// // // let num: number = 1000;
// // // let a = "im a string";
// // // let anyVar: any;
// // // anyVar = 5;
// // // console.log(typeof anyVar);
// // // anyVar = "any str";
// // // console.log(typeof anyVar);
// // // anyVar = 6;
// // // console.log(anyVar.length);
// // // if(anyVar.length > 0){
// // //     //
// // // }
// // // UNION TYPES
// // // let res: strnum; // "success", 201
// // // res = 100;
// // // if(Math.random() > 5){
// // //     res = "im a string";
// // // } else{
// // //     res = 100;
// // // }
// // // // let res2: res;
// // // if(typeof res === "string"){
// // //     console.log(res.length);
// // // } else if(typeof res === "number"){
// // //     console.log(res.toFixed(2));
// // // } 
// // // function numorStr(response: strnum){
// // //     if (typeof response === "string"){
// // //         console.log(`response is ${response} and length of res is ${response.length}`);
// // //     } else {
// // //         console.log(`response is ${response} and length of res is ${response.toFixed(2)}`);
// // //     }
// // // }
// // // function addition(response: strnum){
// // //     if (typeof response === "string"){
// // //         console.log(`response is ${response} and length of res is ${response.length}`);
// // //     } else {
// // //         console.log(`response is ${response} and length of res is ${response.toFixed(2)}`);
// // //     }
// // // }
// // // numorStr(2);
// // // numorStr("dsad");
// // // let a: strnum  = 10;
// // // let b = a;
// // // console.log(typeof b);
// // // // b = "faiza";
// // // type strnum = number | string;
// // // type bool = boolean;
// // // let alltypes: strnum | bool;
// // // let myname: string | null;
// // // myname =null;
// // // if (myname) {
// // // console.log(myname);
// // // } else{
// // //     console.log("no name exists")
// // // }
// // let aNum = 10;
// // let newAge = Math.random() > 0.6 ? "five": 60;
// // // 0 - 1
// //  // condition ? true : false
// //  newAge.toString();
// // //  newAge.toFixed(2);
// // "faiza".toString(); // faiza
// // aNum.toString();  '10'
// // if (newAge === "five") {
// //     // Type of newAge: string
// //     newAge.toUpperCase(); // Can be called // FIVE
// // }
// // // OR
// // if(typeof newAge === "string"){
// //     // Type of newAge: string
// //     newAge.toUpperCase(); // Can be called // FIVE
// // }
// // if (newAge === 60) {
// //     // Type of newAge: string
// //     newAge.toFixed(2); // Can be called // 60.00
// // }
// // typeof newAge === "string"
// // ? newAge.toUpperCase() // Ok: string
// // : newAge.toFixed(); // Ok: number
// // // let a: "faiza";
// // // a= "faiza"; //ok
// // // a= "zeeshan"
// let a = 6;
// let yourName = a > 5 ? "Hira Khan": undefined;
// if (yourName) {
//     yourName = yourName.toUpperCase(); // Ok: string
// }
// console.log(yourName);
