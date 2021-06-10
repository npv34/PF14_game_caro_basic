let player = 1;
const ROWS = 10;
const CELLS = 10;


function play() {
    let html = "";
    for(let i = 0; i < ROWS; i++) {
        html += '<tr>';
        for(let j = 0; j < CELLS; j++) {
            html += '<td id="'+i+'-'+j+'" onclick="change(this, '+i+','+j+')">';
            html += "</td>";
        }
        html += '</tr>';
    }
    document.getElementById('content').innerHTML = html;
}

function change(element, x, y) {
    if(!element.innerHTML) {
        if(player == 1) {
            element.innerHTML = "X";
            player = 2;
        } else {
            element.innerHTML = "0";
            player = 1; 
        }
        checkWin(element, x, y);
    }
}

function checkWin(element, x, y) {
    // check hang ngang
    var i = 1;
    let count = 1;
    // kiem tra hang ngang ve ben trai
    while(y - i >= 0 && document.getElementById(x + '-' + (y - i)).innerHTML == element.innerHTML) {
        i++;
        count++;
    }

    // kiem tra hang ngang ve ben phai
    var i = 1;
    while(y + i <= CELLS && document.getElementById(x + '-' + (y + i)).innerHTML == element.innerHTML) {
        i++;
        count++;   
    }

    if(count == 5) {
        alert('win')
    }


    // check hang doc

    // check cheo trai

    //check cheo phai
}