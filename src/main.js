//run this command in the Terminal browserify src/main.js -t envify > bundle.js
const path = require("path");
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
} );


let input = document.querySelector('#message');
let form = document.querySelector('form');
let ul = document.querySelector('#chat-messages');
// let liResponse = document.createElement('li')
// let liMessage = document.createElement('li')


form.addEventListener('submit', (event) => {


event.preventDefault()
let question = input.value

let liMessage = document.createElement('li')
liMessage.innerText = `You: ${question}`;
ul.appendChild(liMessage);

// Replace with your OpenAI API key
const apiKey = process.env.OPENAI_API_KEY;

// Set the API endpoint
const endpoint = "https://api.openai.com/v1/completions";

// Set the parameters for the API call
const params = {
  model: "text-davinci-003",
  prompt: question,
  max_tokens: 100,
  temperature: 0.5,
};

// Make the API call and get the response
fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify(params),
})
  .then((response) => response.json())
  .then((data) => {
    // Print the response
    console.log(data);
    const responseText = data.choices[0].text;
    console.log(responseText);
    input.value = "";
    
    
    
    let liResponse = document.createElement('li')
    liResponse.innerText = `AI: ${responseText}`;
    ul.appendChild(liResponse)
    

  });

})


// Replace with your OpenAI API key
const apiKey = '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';

// Set the API endpoint
const endpoint = "https://api.openai.com/v1/completions";

// Set the parameters for the API call
const params = {
  model: "text-davinci-003",
  prompt: "What is the capital of France?",
  max_tokens: 100,
  temperature: 0.5,
};

// Make the API call and get the response
fetch(endpoint, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify(params),
})
  .then((response) => response.json())
  .then((data) => {
    // Print the response
    console.log(data);
    const responseText = data.choices[0].text;
    console.log(responseText);
    

  });




