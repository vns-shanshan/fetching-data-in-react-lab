const BASE_URL = "https://swapi.dev/api/starships";

async function show() {
    try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        // console.log(data)
        return data.results;
    } catch (error) {
        console.log(error);
    };
};

export { show };