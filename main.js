const card = document.querySelector(".spin__card");
const main = document.querySelector(".main__command");
const joker = document.querySelector(".img__card");


window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start();


recognition.addEventListener("result", onSpeak);


function onSpeak(event){
    let command = event.results[0][0].transcript;
console.log(command)
    showOnScreen(command)
}

const instructions = document.querySelector(".instructions");
var secretNumber = pickRandom ();   
var result = secretNumber / 2;

var commands = ["Agora multiplica por 2...", "Adiciona mais " +  secretNumber, "Agora dividade por 2...", "Menos o primeiro número que você pensou...", "Fale: 'resultado'"];
const spinNo = "class = img__card";
const spinYes = "class = img__card spin__card";
var imgClass = [spinNo, spinYes, spinNo, spinYes, spinNo, spinYes];

var i = 0;

function pickRandom(){
    return Math.round((Math.random() * 100 + 1));   
}

const textCommad = document.querySelector(".p1");

restart();

function showOnScreen(command){
    const textSpan = document.querySelector(".p1__span");

    if(command === "próximo"){
        instructions.innerHTML = `<div class="instructions">ok! Seguimos para o ${command}</div>`

        textCommad.textContent = `${commands[i]}`;
        i++;

        const joker = document.querySelector(".img__card")
        joker.classList = imgClass[i];

        restart();
    }

    if(command !== "próximo"){
        instructions.innerHTML = "<div class='instructions'>Desculpe, pode repetir ?</div>"

        restart();
        }
        
        if(command ==="resultado"){
            finalResult()

        }
        
        if(command ==="reiniciar"){
        window.location.reload();
    }
}


function restart (){
    recognition.addEventListener("end", ()=>{
        recognition.start();
})
}

function finalResult(){
document.body.innerHTML = `<div class="result__box"><h3 class="h3__result">O resultado final é:</h3>  <h3 class="h3__result number__result">${result}
</h3></div> <p class="p2">Se quiser reiniciar o jogo, diga: <h3>"reiniciar"</h3></p>`;
}


