const getAllRoles = () => {

    // RUTA ENDPOINT SACADO DE MOCKI.IO
    const URL = "https://mocki.io/v1/45554de4-ca5a-4e8e-bf89-e6cc9bf9d28d";

    return fetch(URL)
        .then((response) => response.json())
        .catch((error) => ([]));
}

export default getAllRoles;