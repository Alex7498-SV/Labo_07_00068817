window.addEventListener('load', ()=>{
    let container;
    container = document.getElementById("c1");
    console.log(container);
    container.innerText = "!Hola mundo¡";
    container.style.backgroundColor = "#000000";
    container.style.color = "#1cb723";
    container.style.width = "200px";
    container.style.height = "200px";
    container.innerHTML = "<input type=”text” placeholder=’escriba su texto’>";

    let containers = document.querySelectorAll(".c2");
    console.log(containers);

    containers.forEach(element=>{
        element.style.backgroundColor = "#009999";
        element.innerHTML = "<input type=”text” placeholder=’escriba su texto’>";
    })


    let boton = document.getElementById("btn-click");
    console.log(boton);

    boton.onclick = function(evt){
        alert("Hola mundo");
    }

    let btnCopy = document.getElementById("btnCopy");

    btnCopy.onclick = function(evt){
        let msj = document.getElementById('textMsj').value;
        document.getElementById('showMsj').innerText = msj;
    } 

});