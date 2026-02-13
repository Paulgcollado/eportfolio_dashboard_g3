const newEvidencia = (evidencia_) => {

    // LA RUTA DEL ENDPOINT LA HE PUESTO IGUAL QUE LA DE TAREAS. NO FUNCIONARÁ EL POST PORQUE NO PERMITE REALIZAR POST EN MOCKI.IO
    const URL = "https://mocki.io/v1/4dd57215-91e4-4d86-bbc4-bbffb5d6d614";

    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(evidencia_),
        headers: {
            'Content-type': 'application/json; charset=UTF8'
        }
    })
        .then((response) => response.json())
        .catch((error) => ({}));
}

export default newEvidencia;