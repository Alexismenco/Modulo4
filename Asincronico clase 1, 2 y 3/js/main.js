var input = document.querySelector(".input");
var botonAgregar = document.querySelector(".boton-agregar");
var container = document.querySelector(".container");

class Item {
    constructor(nuevaTarea){
        this.nuevaTarea=nuevaTarea;
        this.crearDiv = function (nuevaTarea){

            botonAgregar.addEventListener("click", function(nuevaTarea){
                var nuevoTexto = document.createElement("div");
                var container = document.querySelector(".container");

                if(input.value == ''){
                    
                } else {

                    var container = document.querySelector(".container");
                    var inputNew= document.createElement("input");
                    var candado = document.createElement("button");
                    var borrar = document.createElement("button");
                    var nuevoDiv = document.createElement("div");
                    
                    console.log(nuevoTexto)

                    inputNew.disabled = true; 
                    inputNew.value=input.value;
                    candado.innerHTML='<i class="fa-solid fa-lock"></i>';
                    borrar.innerHTML='<i class="fa-solid fa-trash"></i>';
                
                    var array = [];
                    array.push(inputNew);
                    array.push(candado);
                    array.push(borrar);
                    input.value='';
                    nuevoDiv.appendChild(array[0]);
                    nuevoDiv.appendChild(array[1]);
                    nuevoDiv.appendChild(array[2]);
                    container.appendChild(nuevoDiv);
                    
                    candado.addEventListener("click", function(){
        
                        if (inputNew.disabled === true) {
                            candado.innerHTML='<i class="fa-solid fa-lock-open"></i>';
                            inputNew.disabled = false; 
                        } else {
                            candado.innerHTML='<i class="fa-solid fa-lock"></i>';
                            inputNew.disabled = true; 
                        };
                    });
                    
                    borrar.addEventListener("click", function(){
                        nuevoDiv.remove();
                    });
                };
            });
        };
    };
};

var dataInput = new Item(input.value);
dataInput.crearDiv();


