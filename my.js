let player = 1;

function play() {
    let rows = +document.getElementById('rows').value;
    let cels = +document.getElementById('cels').value;
    let html = "";
    for(let i = 0; i < rows; i++) {
        html += '<tr>';
        for(let j = 0; j < cels; j++) {
            html += '<td id="'+i+'-'+j+'" onclick="change(this)">';
            html += "</td>";
        }
        html += '</tr>';
    }
    document.getElementById('content').innerHTML = html;
}

function change(element) {
    if(!element.innerHTML) {
        if(player == 1) {
            element.innerHTML = "X";
            player = 2;
            checkWin();
        } else {
            element.innerHTML = "0";
            player = 1;
            checkWin();
        }
    }
}

function checkWin() {
    // check hang ngang

    // check hang doc

    // check cheo trai

    //check cheo phai
}