var contexto = document.getElementById("lienzoJuego").getContext("2d")
contexto.canvas.width = 300
contexto.canvas.height = 530
//VARIALES
var FPS =60
var gravedad =1.5
var personaje = {
    x:50,
    y:150,
    w:50,
    h:50
}
var tuberias = new Array()
tuberias [0] = {
    x:contexto.canvas.width,
    y:0
}

//VARIABLES IMAGENES//
var bird = new Image()
bird.src = "imagenes/bird.png"
var background = new Image()
background.src = "imagenes/background.png"
var tuberiaNorte = new Image()
tuberiaNorte.src = "imagenes/tuberiaNorte.png"
var tuberiaSur = new Image()
tuberiaSur.src = "imagenes/tuberiaSur.png"
var suelo = new Image()
suelo.src = "imagenes/suelo.png"

//CONTROL//
function presionar() {
personaje.y -=35
}

//BUCLE//
setInterval(loop,1000/FPS)
function loop() {
    contexto.clearRect(0,0,300,530)
    //FONDO
    contexto.drawImage(background,0,0)
    contexto.drawImage(suelo,0,contexto.canvas.height - suelo.height)
    //PERSONAJE//
    contexto.drawImage(bird,personaje.x,personaje.y)
    //TUBERIAS
    for(var i = 0; i < tuberias.length ; i++){
        var constante = tuberiaNorte.height + 80
            contexto.drawImage(tuberiaNorte,tuberias[i].x,tuberias[i].y)
            contexto.drawImage(tuberiaSur,tuberias[i].x,tuberias[i].y + constante)
            tuberias[i].x--

        if(tuberias[i].x == 150){
            tuberias.push({
                x:contexto.canvas.width,
                y: Math.floor(Math.random()*tuberiaNorte.height) - tuberiaNorte.height
            })
        }

    }
    
    //CONDICIONES
    personaje.y += gravedad
}

//Eventos

window.addEventListener("keydown",presionar)
console.log(personaje)