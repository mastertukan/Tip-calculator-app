function buttonEnable() 
{
    var button = document.getElementById('reset-button');
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;

    if(bill != "" || people != "") 
    {
        button.disabled = false;
        button.style.backgroundColor = "hsl(172, 67%, 45%)";
    }
    else 
    {
        button.disabled = true;
        button.style.backgroundColor = "hsl(183, 79%, 24%)";
    }
}

function tooSmallBill() {
    var bill = document.getElementById("bill").value;
    console.log("Bill = " + bill);

    if (bill == "" || bill == 0) 
    {
        document.getElementById("alert1").innerHTML = "Can't be zero";
        document.getElementById("input-div-1").style.border = "3px solid hsl(15, 100%, 72%)";
        document.getElementById("bill").value = "";
        console.log("Opcja 1");
    }
    else if (bill < 0)
    {
        document.getElementById("alert1").innerHTML = "Can't be negative";
        document.getElementById("input-div-1").style.border = "3px solid hsl(15, 100%, 72%)";
        document.getElementById("bill").value = "";
        console.log("Opcja 2");
    }
    else
    {
        document.getElementById("alert1").innerHTML = "";
        document.getElementById("input-div-1").style.border = "3px solid hsl(189, 41%, 97%)";
        console.log("Opcja 3");
    }
}

function tooFewPeople() {
    var people = document.getElementById("people").value;

    if (people == "" || people == 0) 
    {
        document.getElementById("alert2").innerHTML = "Can't be zero";
        document.getElementById("input-div-3").style.border = "3px solid hsl(15, 100%, 72%)";
        document.getElementById("people").value = "";
    }
    else if (people < 0)
    {
        document.getElementById("alert2").innerHTML = "Can't be negative";
        document.getElementById("input-div-3").style.border = "3px solid hsl(15, 100%, 72%)";
        document.getElementById("people").value = "";
    }
    else
    {
        document.getElementById("alert2").innerHTML = "";
        document.getElementById("input-div-3").style.border = "3px solid hsl(189, 41%, 97%)";
    }
}

function inputActive(index) {
    var input1 = document.getElementById("input-div-1");
    var input2 = document.getElementById("input-div-2");
    var input3 = document.getElementById("input-div-3");

    switch (index) {
        case 1:
        {
            input1.style.border = "3px solid hsl(173, 60%, 76%)";
            break;
        }
        case 2:
        {
            input2.style.border = "3px solid hsl(173, 60%, 76%)";
            break;
        }
        case 3:
        {
            input3.style.border = "3px solid hsl(173, 60%, 76%)";
            break;
        }
    }
}

selectedButtonValue = document.getElementById("input-div-2").value;

function tipSelection(index) 
{
    switch (index) {
        case 1:
        {
            selectedButtonValue = 1.05;
            break;
        }    
        case 2:
        {
            selectedButtonValue = 1.10;
            break;
        }
        case 3:
        {
            selectedButtonValue = 1.15;
            break;
        }
        case 4:
        {
            selectedButtonValue = 1.25;
            break;
        }
        case 5:
        {
            selectedButtonValue = 1.50;
            break;
        }
        case 6:
        {
            var percentValue = document.getElementById("custom-input").value;

            if (percentValue < 10) {
                selectedButtonValue = ("1.0" + percentValue) * 1;
            }
            else if (percentValue > 99) { 
                var percentValueLength = percentValue.length;
                selectedButtonValue = percentValue.slice(0, (percentValueLength - 2)) + "." + percentValue.slice((percentValueLength - 2));
                selectedButtonValue = (selectedButtonValue * 1) + 1;
            }
            else
            {
                selectedButtonValue = "1." + percentValue;
                selectedButtonValue = selectedButtonValue * 1;
            }
            break;
        }
    }
    return selectedButtonValue;
}

function activeButton(index) {
    var customInput = document.getElementById("custom-input").value;

    document.getElementById("btn1").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("btn1").style.color = "hsl(189, 41%, 97%)";

    document.getElementById("btn2").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("btn2").style.color = "hsl(189, 41%, 97%)";

    document.getElementById("btn3").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("btn3").style.color = "hsl(189, 41%, 97%)";

    document.getElementById("btn4").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("btn4").style.color = "hsl(189, 41%, 97%)";

    document.getElementById("btn5").style.backgroundColor = "hsl(183, 100%, 15%)";
    document.getElementById("btn5").style.color = "hsl(189, 41%, 97%)";
    
    document.getElementById("input-div-2").style.border = "3px solid hsl(189, 41%, 97%)";

    switch (index) {
        case 1:
        {
            document.getElementById("btn1").style.backgroundColor = "hsl(172, 67%, 45%)";
            document.getElementById("btn1").style.color = "hsl(183, 100%, 15%)";
            break;
        }
        case 2:
        {
            document.getElementById("btn2").style.backgroundColor = "hsl(172, 67%, 45%)";
            document.getElementById("btn2").style.color = "hsl(183, 100%, 15%)";
            break;
        }
        case 3:
        {
            document.getElementById("btn3").style.backgroundColor = "hsl(172, 67%, 45%)";
            document.getElementById("btn3").style.color = "hsl(183, 100%, 15%)";
            break;
        }
        case 4:
        {
            document.getElementById("btn4").style.backgroundColor = "hsl(172, 67%, 45%)";
            document.getElementById("btn4").style.color = "hsl(183, 100%, 15%)";
            break;
        }
        case 5:
        {
            document.getElementById("btn5").style.backgroundColor = "hsl(172, 67%, 45%)";
            document.getElementById("btn5").style.color = "hsl(183, 100%, 15%)";
            break;
        }
        case 6:
        {
            if (customInput != "") {
                document.getElementById("input-div-2").style.border = "3px solid hsl(172, 67%, 45%)";
            }
            break;
        }
        default: console.log("Error"); break;
    }
}

function calculate() {
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    var tipValue = tipSelection();
    var tipPerPersonDiv = document.getElementById("tip-per-person");
    var totalPerPersonDiv = document.getElementById("total-per-person");

    if (bill == "") 
    {
        tipPerPersonDiv.innerHTML = 0;
        totalPerPersonDiv.innerHTML = 0;
    }
    if (bill < 0) 
    {
        bill = 0;
    }
    if (tipValue == undefined)
    {
        tipValue = 1;
    }
    if (people == "" || people == 0 || people == undefined) {
        people = 1;
    }

    var tipPerPerson = ((bill * tipValue) - bill) / people;
    var tipPerPersonRound = (Math.round((tipPerPerson + Number.EPSILON) * 100) / 100).toFixed(2);

    var totalPerPerson = (bill * tipValue) / people; 
    var totalPerPersonRound = (Math.round((totalPerPerson + Number.EPSILON) * 100) / 100).toFixed(2);

    tipPerPersonDiv.innerHTML = "$" + tipPerPersonRound;
    totalPerPersonDiv.innerHTML = "$" + totalPerPersonRound;
}

function resetButton() {
    document.getElementById("tip-per-person").innerHTML = "$0.00";
    document.getElementById("total-per-person").innerHTML = "$0.00";

    document.getElementById("alert1").innerHTML = "";
    document.getElementById("alert2").innerHTML = "";

    document.getElementById("input-div-1").style.border = "3px solid hsl(189, 41%, 97%)";
    document.getElementById("input-div-3").style.border = "3px solid hsl(189, 41%, 97%)";

    document.getElementById("myForm").reset();
    document.getElementById("reset-button").disabled = true;
    document.getElementById("reset-button").style.backgroundColor = "hsl(183, 79%, 24%)";
}