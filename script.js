/*1) The class Movie is stated below. An instance of class Movie represents a film. 
This class has the following three properties: 
title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
a String representing the studio, and a String representing the rating as its arguments, and sets the 
respective class properties to these values.*/

/*
class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const obj= new Movie("Captian Miller","SJF",6.6)
console.log(obj.title,obj.studio,obj.rating);
*/

/*b) The constructor for the class Movie will set the class property rating to "PG" as default
when no rating is provided.*/

/*
class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const obj= new Movie("Vikram","RKFI")
console.log(obj.title,obj.studio,obj.rating);
*/

/*c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array 
of only those movies in the input array with a rating of "PG". You may assume the input array is full 
of Movie instances. The returned array need not be full.*/

/*
class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const obj1= new Movie("Pisaasu","BS",7.5)
const obj2= new Movie("Jailer","SP")
const obj3= new Movie("Leo","SSS")
const obj4= new Movie("Don","LP","6.8")
const obj5= new Movie("Marster","SS")
console.log(obj1.title,obj1.studio,obj1.rating);
console.log(obj2.title,obj2.studio,obj2.rating);
console.log(obj3.title,obj3.studio,obj3.rating);
console.log(obj4.title,obj4.studio,obj4.rating);
console.log(obj5.title,obj5.studio,obj5.rating);
*/

/*d) Write a piece of code that creates an instance of the class Movie with the title 
“Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”*/

/*
class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const casino= new Movie("Casino Royale","Eon Productions","PG13")
console.log(casino.title,casino.studio,casino.rating);
*/


//---------------------------------------------------------------------------------------------------------
//2) Circle - Class
//Convert the UML diagram to Typescript class. - use number for double

/*
class Circle {
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get Radius(){
        return this.radius;
    }
    set Radius(n){
        this.raidus=n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color=c;
    }
    get toString(){
        return `"Circle[radius = ${this.radius} , color = ${this.color}]"`
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get Circumference(){
            return 2*Math.PI*this.radius
        }
    }
 
let obj = new Circle(1.0,"red")
console.log(obj.Radius); 
console.log(obj.Color);
console.log(obj.toString);
console.log(obj.area);
console.log(obj.Circumference);
*/

//-------------------------------------------------------------------------------------------------------

//3) Write a “person” class to hold all the details.

/*class Person{
    constructor(name,age,gender,number,email){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.number=number;
        this.email=email;
    }
}
const a= new Person("Chandran",24,"Male",1122334455,"chandhuu1234@gmail.com")
console.log("NAME:"+" "+a.name);
console.log("AGE:"+" "+a.age);
console.log("GENDER:"+" "+a.gender);
console.log("NUMBER:"+" "+a.number);
console.log("E-MAIL:"+" "+a.email);
*/

//-------------------------------------------------------------------------------------------------------

//4) write a class to calculate the Uber price.

/*
class UberPrice{
    constructor(kilometer,price){
        this.kilometer=kilometer;
        this.price=price;
    }
    set Price(n){
        this.kilometer=n;
    }
    get Price (){
        return (this.price*this.kilometer);
    }
    
}
const obj = new UberPrice(100, 50)
console.log("Total Ride amount:"+" "+obj.Price);
*/
