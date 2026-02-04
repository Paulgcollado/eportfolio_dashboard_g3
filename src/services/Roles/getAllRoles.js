const getAllRoles = () => {
    const URL = "http://eportfolio.test/api/v1/roles";
    return fetch(URL)
        .then((response) => response.json())
        .catch((error) => ([]));
}

export default getAllRoles;