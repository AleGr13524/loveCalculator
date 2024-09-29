const contenedor = document.querySelector(".contenedor")
const resultado = document.querySelector(".resultado");
const resultadoDiv = document.querySelector(".resultado-content")
const boton = document.querySelector("#botonxd");
const volverCalcular = document.querySelector("#volverCalcular");
const nombre1 = document.getElementById("input1");
const nombre2 = document.getElementById("input2");

boton.addEventListener("click", ()=>{
    const valor1 = nombre1.value;
    const valor2 = nombre2.value;
    if(valor1 == "" || valor2 == ""){
        resultadoDiv.textContent = "introduce un nombre o una inicial"
        contenedor.classList.toggle("oculto");
        resultado.classList.toggle("oculto")
    }else{
        calcularNombres(valor2, valor1);
        contenedor.classList.toggle("oculto");
        resultado.classList.toggle("oculto")
    }
})

function calcularNombres (valor1, valor2){
        resultadoDiv.innerHTML = "";
        let porcentaje = Math.random()*100;
        console.log();
        const parrafo = document.createElement("p");
        parrafo.innerHTML = `<span>${valor1}</span> + <span>${valor2}</span> <br> tiene una compatibilidad de ${Math.round(porcentaje)}% `;
        resultadoDiv.appendChild(parrafo);
}

volverCalcular.addEventListener("click", ()=>{
    resultado.classList.toggle("oculto")
    contenedor.classList.toggle("oculto")
    nombre1.value = "";
    nombre2.value = "";
})





