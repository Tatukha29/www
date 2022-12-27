const url = "https://aws.random.cat/meow"

const image = document.querySelector(".meowimage");

async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        image.src = data.file;
    }
    catch (error) {
        console.log('error');
    }
}

image.addEventListener("click", () => {
    fetchHandler();
})