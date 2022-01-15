"use strict";
function validName(tagN) {
    let ph = /^[A-za-z]*$/g;
    let p = document.getElementById(tagN).value;
    console.log(p);
    let result = ph.test(p);
    console.log(result);
    document.getElementById(tagN).classList.remove('invalid');
    if (!result) {
        console.log(result);
        document.getElementById(tagN).classList.add('invalid');
    }
}
function validPhn(tagN) {
    let ph = /^[0-9]{10}$/g;
    let p = document.getElementById(tagN).value;
    let result = ph.test(p);
    console.log(result);
    document.getElementById(tagN).classList.remove('invalid');
    if (!result)
        document.getElementById(tagN).classList.add('invalid');
}
function validNum(tagN) {
    let ph = /[^0-9]/g;
    let p = document.getElementById(tagN).value;
    let result = p.match(ph);
    document.getElementById(tagN).classList.remove('invalid');
    if (result != null) {
        document.getElementById(tagN).classList.add('invalid');
    }
}
function isNull(tagN) {
    let p = document.getElementById(tagN).value;
    document.getElementById(tagN).classList.remove('invalid');
    if (p == "") {
        document.getElementById(tagN).classList.add('invalid');
    }
}
//To add new Interests
function createNewElement1() {
    var txtNewInputBox = document.createElement('div');
    txtNewInputBox.innerHTML = "<input class='form-control me-2' type= 'text' placeholder= 'Interests' style='margin-bottom: 3px;'>";
    document.getElementById("newElementId1").appendChild(txtNewInputBox);
    console.log('Lab Test Field Added Successfully');
}
