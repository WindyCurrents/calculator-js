//var for what operation is in progress
var OperationThatWantsToBeDone = "empty"
//var for value saved
var SavedValue = 0
//var for display
var Display = new Array(0);
//function that adds information to screen
function EnterToScreen(inputnumvalue){
    var numbers = new Array(10);
    numbers[0] = 0;
    numbers[1] = 1;
    numbers[2] = 2;
    numbers[3] = 3;
    numbers[4] = 4;
    numbers[5] = 5;
    numbers[6] = 6;
    numbers[7] = 7;
    numbers[8] = 8;
    numbers[9] = 9;
    Display.push(numbers[inputnumvalue]);
    var DisplayedDisplay = Display.join('');
    document.getElementById("screen").innerHTML = DisplayedDisplay
    document.getElementById("screen").style.color="black"
}
//simple screen clear function
function ClearScreen(){
    while (Display.length) {
        Display.pop();
    }
    document.getElementById("screen").innerHTML = "0"
}
//equals function
function Equals(){
    if(OperationThatWantsToBeDone=="add"){
        var SecondValue=Number(document.getElementById("screen").innerHTML)
        while (Display.length) {
            Display.pop();
        }
        document.getElementById("screen").innerHTML=SavedValue+SecondValue
    }
    if(OperationThatWantsToBeDone=="subtract"){
        var SecondValue=Number(document.getElementById("screen").innerHTML)
        while (Display.length) {
            Display.pop();
        }
        document.getElementById("screen").innerHTML=SavedValue-SecondValue
    }
    if(OperationThatWantsToBeDone=="multiply"){
        var SecondValue=Number(document.getElementById("screen").innerHTML)
        while (Display.length) {
            Display.pop();
        }
        document.getElementById("screen").innerHTML=SavedValue*SecondValue
    }
    if(OperationThatWantsToBeDone=="powerthingy"){
        var SecondValue=Number(document.getElementById("screen").innerHTML)
        while (Display.length) {
            Display.pop();
        }
        document.getElementById("screen").innerHTML=Math.pow(SavedValue, SecondValue)
    }
}
//condensed prepare function
function CondensedPrepare(PressedButton){
    document.getElementById("screen").style.color="red";
    SavedValue=Number(document.getElementById("screen").innerHTML);
    while (Display.length) {
        Display.pop();
    }
    if(PressedButton=='add'){
        OperationThatWantsToBeDone="add"
    }
    if(PressedButton=='subtract'){
        OperationThatWantsToBeDone="subtract"
    }
    if(PressedButton=='multiply'){
        OperationThatWantsToBeDone="multiply"
    }
    if(PressedButton=='powerthingy'){
        OperationThatWantsToBeDone="powerthingy"
    }
}