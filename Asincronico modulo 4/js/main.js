var input = document.querySelector(".input");
var botonAgregar = document.querySelector(".boton-agregar");

class Item {
    constructor(nuevaTarea){
        this.nuevaTarea=nuevaTarea;
        this.crearDiv = function (){

            var candado = document.createElement("button");
            var borrar = document.createElement("button");
            var container = document.querySelector(".container");
            var inputNew= document.createElement("input");          
            var nuevoDiv = document.createElement("div");

            inputNew.disabled = true; 
            inputNew.value=this.nuevaTarea;
            candado.innerHTML='<i class="fa-solid fa-lock"></i>';
            borrar.innerHTML='<i class="fa-solid fa-trash"></i>';
        
            var array = [];
            array.push(inputNew);
            array.push(candado);
            array.push(borrar);
            
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
    };
};

botonAgregar.addEventListener("click", function(){
    chequearInput();
});

function chequearInput(){
    if(!input.value ==''){
        
        var dataInput = new Item(input.value);
        dataInput.crearDiv();
        input.value='';
    };
};



