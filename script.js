let c = 1;
function decrease() {
    if (c == 1)
        return;
    let s = "#c" + c;
    document.querySelector(s).style.border = "3px solid #a9a3a3";
    s = "#b" + c;
    document.querySelector(s).style.border = "3px solid #a9a3a3";
    c--;
    document.querySelector('#next').style.backgroundColor = "blue";
    if (c == 1) {
        document.querySelector('#prev').style.backgroundColor = "#a9a3a3";
    }
    else {
        document.querySelector('#prev').style.backgroundColor = "blue";
    }
}

function increase() {
    if (c == 4)
        return;
    c++;
    let s = "#c" + c;
    document.querySelector(s).style.border = "3px solid blue";
    s = "#b" + c;
    document.querySelector(s).style.border = "3px solid blue";
    document.querySelector('#prev').style.backgroundColor = "blue";
    if (c == 4) {
        document.querySelector('#next').style.backgroundColor = "#a9a3a3";
    }
    else {
        document.querySelector('#next').style.backgroundColor = "blue";
    }
}