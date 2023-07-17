



function easy(){
    X = 10
    start()
}

function medium(){
    X = 50
    start()
}

function hard(){
    X = 100
    start()
}

function insane(){
    X = 250
    start()
}

function impossible(){
    X = 1000
    start()
}

function start(){
    buttons = document.getElementsByTagName("button")
    buttons.forEach(()=> {
        buttons.style.display = "none"
    });
    //selectNumber();
    
}

