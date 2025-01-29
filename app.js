let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; //Limpia el campo amigos
    mostrarLista();
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; //Limpia lista

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        li.classList.add("name-item"); // Estilo
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe haber al menos un nombre en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `<li class="winner">🎉 ¡El amigo secreto es: ${amigoSecreto}! 🎉</li>`;
}
