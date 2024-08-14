function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
    event.preventDefault();
    let instructionsInput = document.querySelector("#user-instruction")
    let apiKey = "3d1a7f2f23o09983b2643c5a0t1032fc";
    let prompt = `Generate a French poem about ${instructionsInput.value}`;
    let context = "";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);