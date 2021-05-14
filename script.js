function getRecipe(url, successCallback) {
  fetch("https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi", {
    "method": "POST",
    "headers": {
      "content-type": "text/plain",
      "x-rapidapi-key": "cc18e95e0fmsh1e8f5597163251cp1dc923jsnf4b5c9f80b9e",
      "x-rapidapi-host": "mycookbook-io1.p.rapidapi.com"
    },
    "body": url
  })
  .then(response => response.json()) // Getting the actual response data
  .then(data => {         
      successCallback(data)
      console.log(data)
  })
  .catch(err => {
      console.log(err);
  }); 
}