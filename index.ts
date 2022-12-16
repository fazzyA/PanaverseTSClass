// OOPS classes in TS
// inheritance examples
class Car {
    // information variable data members
    // methods / functions - behaviour
    color!: string;
    hp!: string;
    model!: number;
    _lisence!: string;// read , update
 constructor(color:string, hp:string, model:number){
   // first method which runs after object initiate
   this.color = color;
   this.hp = hp;
   this.model = model;
 }
 get lisence(){
    return this._lisence;
 }
 set lisence(val: string){
    this._lisence = val;
 }



 displayAll(){
    return `${this.color} ${this.model} ${this.hp}`;
 }
 displayModel(){
    return this.model;
 }
    carStart() { //run when called
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

cultus.lisence = "str123"; //set
console.log(cultus.lisence); //str123 //get


alto.lisence = "alto123"; //set
console.log(alto.lisence); //alto123 //get
