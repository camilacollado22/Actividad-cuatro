const parametros =
        new URLSearchParams(window.location.search);

    document.getElementById("nombre").textContent =
        `Nombre:  ${parametros.get("nombre")}`;

    document.getElementById("email").textContent =
        `Email:  ${parametros.get("email")}`;

    document.getElementById("edad").textContent =
        `Edad:  ${parametros.get("edad")}`;

    document.getElementById("pais").textContent =
        `Pais:  ${parametros.get("pais")}`;