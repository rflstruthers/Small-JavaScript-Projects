var lang="JavaScript";

function myFunction(lang){
    this.lang=lang;
    console.log("hello, welcome to "+this.lang);
};
var Test=new myFunction(lang)
//prints "hello, welcome to JavaScript" in console only.

//-------------------------------------------------

var myCar1=new Object();

myCar1.make="Ford";
myCar1.model="Mustang";

document.write(myCar1.make);//can do this syntax, or next line syntax.
document.write(myCar1["model"]);
//prints "FordMustang" on web page.

//---------------------------------------------------

function myFunction(make, model){
    this.make=make;
    this.model=model;
    document.write(this.make+" : "+this.model);
};
var myCar1=new myFunction("Ford", "Mustang");//instantiate objects
var myCar2=new myFunction("Ford", "F150");
//prints "Ford : MustangFord : F150" on web page

//--------------------------------------------------------------

function animal(name, eyes, ears, nose, legs, fur){
    this.name=name;
    this.eyes=eyes;
    this.ears=ears;
    this.nose=nose;
    this.legs=legs;
    this.fur=fur;
    document.write("<br><br>Species: "+this.name);
    document.write("<br>Eyes: "+this.eyes);
    document.write("<br>Ears: "+this.ears);
    document.write("<br>Nose: "+this.nose);
    document.write("<br>Legs: "+this.legs);
    document.write("<br>Fur: "+this.fur);
};
var zebra=new animal("Zebra",2,2,1,4,true);
var snake=new animal("Snake",2,0,1,0,false);
//prints Zebra and Snake and their eyes,ears,nose,legs,and fur. 

//---------------------------------------------------------------

function myFunction(){
    var num1=2;
    var num2=12;
    var equality=(num1=="2");
    var strict=(num1==="2");//strict equality compares data type as well as value
    document.write("Equality: "+equality+"<br>");
    document.write("Strict: "+strict+"<br><br>");

    document.write("Data type: "+typeof num1);//typeof gets data type of variable
    document.write("<br>Data type: "+typeof "2");

    var test=isNaN(num2);//is Not a Number?
    console.log("isNaN(num2): "+test);
    var words="words";

    var array=[1,2,3,4,5]
    document.write("<br>Data type: "+typeof array);

    var test2=isNaN(words);
    console.log("isNaN(test2): "+test2);
    var results=num1+num2;
    document.write("<br>Data type: "+typeof results);

    console.log(num1+" + "+num2+" = "+results);
};
myFunction()

