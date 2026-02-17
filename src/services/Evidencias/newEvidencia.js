const newEvidencia = (evidencia_) => {

    // LA RUTA DEL ENDPOINT CON MOCKAPI.IO
    const URL = "https://69946490fade7a9ec0f5440e.mockapi.io/api/v1/evidencias";

    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(evidencia_),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
        .catch((error) => ({}));
}

export default newEvidencia;