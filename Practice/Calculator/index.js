let screen = document.getElementById('screen');

let arr = Array.from(document.getElementsByTagName("button"));

arr.map( button => {
    button.addEventListener('click', (e) =>{
       switch(e.target.innerText){
        default:
        screen.innerText += e.target.innerText;
        break;

        case('X'):
        screen.innerText += '*';
        break;

        case('C'):
            screen.innerText = '';
        break;

        case('Backspace'):
            screen.innerText = screen.innerText.slice(0, -1);
        break;

        case('Result'):
        screen.innerText = eval(screen.innerText);
        break;
       }
    })
})