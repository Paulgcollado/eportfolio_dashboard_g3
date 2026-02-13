const getTareasPorRA = (ra_) => {

    // RUTA ENDPOINT SACADO DE MOCKI.IO
    const URL = "https://mocki.io/v1/4dd57215-91e4-4d86-bbc4-bbffb5d6d614";

    return fetch(URL)
        .then((response) => response.json())
        .catch((error) => ([]));
}

export default getTareasPorRA;