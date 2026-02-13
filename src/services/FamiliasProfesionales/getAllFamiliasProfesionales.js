const getAllFamiliasProfesionales = () => {

    // RUTA ENDPOINT SACADO DE MOCKI.IO
    const URL = "https://mocki.io/v1/5758e855-23b0-4296-a163-f6fdfcd8070e";

    return fetch(URL)
        .then((response) => response.json())
        .catch((error) => ([]));
}

export default getAllFamiliasProfesionales;