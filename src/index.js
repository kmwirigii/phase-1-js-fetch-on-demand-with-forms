const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#searchByID");

        fetch(`http://localhost:3000/movies/${input.value}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Movie not found");
                }
                return response.json();
            })
            .then((data) => {
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");

                title.innerText = data.title;
                summary.innerText = data.summary;
            })
            .catch((error) => {
                console.error("Error fetching movie:", error); // Log the error to avoid the warning
                
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");

                title.innerText = "Movie Not Found";
                summary.innerText = "Please enter a valid movie ID.";
            });
    });
};

document.addEventListener("DOMContentLoaded", init);
