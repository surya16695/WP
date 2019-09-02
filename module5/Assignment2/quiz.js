loader()

function loader() {
    var data = {
        question: ['Each computer has a built-in instruction set that it knows how to execute by design.', 'A computer stores all the information in 0s and 1s'],
        choices: [['True', 'False'], ['True', 'False']],
        hints: ['Recall that we use the term computation to mean "the execution of a sequence of instructions by a computer with the intention of solving a given problem"', 'Recall the reason we understood binary numbers.'],
        feedback: [['Correct!', 'Incorrect'], ['Correct!', 'Incorrect']]
    }
    var count = 2;
    const toAdd = document.querySelector('#insert');
    for(var i=0;i<count;i++) {

        var qtemp= '<p>'+data.question[i]+'</p>';
        
        var hnTemp = document.createElement('button');
        hnTemp.textContent='Hint';
        hnTemp.setAttribute("class","btn-warning");
        var hintName = "hint"+i;
        hnTemp.setAttribute("id",hintName);
        var hintfn = "hnfnc("+i+");";
        hnTemp.setAttribute("onclick",hintfn);

        var brk = document.createElement("br");

        var brk1 = document.createElement("br");

        var fbTemp = document.createElement('div');
        var fbName = "fb"+i;
        fbTemp.setAttribute("id",fbName);

        var opt1temp = document.createElement("INPUT");
        opt1temp.setAttribute("type","radio");
        var opt1lbl =document.createElement("label");
        opt1lbl.innerHTML="True";
        var fbfnName1 = "correctfnc("+i+",0);";
        opt1temp.setAttribute("onclick",fbfnName1);

        // var opt1temp = '<div class="radio">\
        // <br>\
        // <label><input type="radio" name="optradio" onclick = "correctfnc(0)">True</label>\
        // <br>\
        // </div>';

        var opt2temp = document.createElement("INPUT");
        opt2temp.setAttribute("type","radio");
        var opt2lbl =document.createElement("label");
        opt2lbl.innerHTML="False";
        var fbfnName2 = "correctfnc("+i+",1);";
        opt2temp.setAttribute("onclick",fbfnName2);
        
        // var opt2temp = '<div class="radio">\
        // <label><input type="radio" name="optradio" onclick = "correctfnc(1)">False</label>\
        // </div>';
        

        toAdd.insertAdjacentHTML('beforeend',qtemp);
        toAdd.insertAdjacentElement('beforeend',hnTemp);
        toAdd.insertAdjacentElement('beforeend',brk);
        toAdd.insertAdjacentElement('beforeend',opt1temp);
        toAdd.insertAdjacentElement('beforeend',opt1lbl);
        toAdd.insertAdjacentElement('beforeend',brk1);
        toAdd.insertAdjacentElement('beforeend',opt2temp);
        toAdd.insertAdjacentElement('beforeend',opt2lbl);
        toAdd.insertAdjacentElement('beforeend',fbTemp);

    }
    
}

function hnfnc(num) {
    var data = {
        question: ['Each computer has a built-in instruction set that it knows how to execute by design.', 'A computer stores all the information in 0s and 1s'],
        choices: [['True', 'False'], ['True', 'False']],
        hints: ['Recall that we use the term computation to mean "the execution of a sequence of instructions by a computer with the intention of solving a given problem"', 'Recall the reason we understood binary numbers.'],
        feedback: [['Correct!', 'Incorrect'], ['Correct!', 'Incorrect']]
    }

    var temp1='<div id="q1Hint" class="alert alert-warning alert-dismissable">'+
    '<button type="button" class="close" data-dismiss="alert">&times;</button>'+data.hints[num]+
    '</div>';
    var hintId = "#hint"+num;
    const add = document.querySelector(hintId);
    add.insertAdjacentHTML("afterend",temp1);
}

function correctfnc(idn, num) {

    const toAdd1 = document.querySelector('#insert');
    var data = {
        question: ['Each computer has a built-in instruction set that it knows how to execute by design.', 'A computer stores all the information in 0s and 1s'],
        choices: [['True', 'False'], ['True', 'False']],
        hints: ['Recall that we use the term computation to mean "the execution of a sequence of instructions by a computer with the intention of solving a given problem"', 'Recall the reason we understood binary numbers.'],
        feedback: [['Correct!', 'Incorrect'], ['Correct!', 'Incorrect']]
        }
    if(num===0) {
    var temp2 = '<div class="alert alert-success alert-dismissable">\
        <button type="button" class="close" data-dismiss="alert">&times;</button>'
        +data.feedback[idn][num]+'</div>';
    } else {
        var temp2 = '<div class="alert alert-danger alert-dismissable">\
        <button type="button" class="close" data-dismiss="alert">&times;</button>'
        +data.feedback[idn][num]+'</div>';
    }
    var fbId ="#fb"+idn;
    const add2 = document.querySelector(fbId);
    add2.insertAdjacentHTML("afterend", temp2);
}

