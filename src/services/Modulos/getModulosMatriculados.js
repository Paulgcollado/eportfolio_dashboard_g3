const getModulosMatriculados = () => {

    // RUTA ENDPOINT SACADO DE MOCKI.IO
    const URL = "https://mocki.io/v1/3f258f3e-651d-45b0-a261-92e17c2cee39";

    return fetch(URL)
        .then((response) => response.json())
        .catch((error) => ([]));
}

export default getModulosMatriculados;