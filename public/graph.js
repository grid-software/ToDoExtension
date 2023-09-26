// Helper function to call MS Graph API endpoint 
// using authorization bearer token scheme
async function callMSGraph(endpoint, token, callback) {
  const headers = new Headers();
  const bearer = `Bearer ${token}`;

  headers.append("Authorization", bearer);

  const options = {
      method: "GET",
      headers: headers
  };

  console.log('request made to Graph API at: ' + new Date().toString());
  console.log(endpoint);
 await fetch(endpoint, options)
    .then(response => response.json())
    .then(ListinJson =>{globalList = ListinJson;;})
    .then(response => callback(globalList, endpoint))
    .catch(error => console.log(error))
}

////
// dier Teil ist für die Patch Http Requests zuständig

async function callMSGraphPatch(endpoint, token, data, callback) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;
  
    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");
  
    const options = {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(data)
    };
  
    console.log('request made to Graph API at: ' + new Date().toString());
    console.log(endpoint);
   await fetch(endpoint, options)
      .then(response => response.json())
      .then(ListinJson =>{globalList = ListinJson;;})
      .then(response => callback(globalList, endpoint))
      .catch(error => console.log(error))
  }
  
  // Helper function to call MS Graph API endpoint 
// using authorization bearer token scheme
async function callMSGraphTasks(endpoint, token, callback) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;
  
    headers.append("Authorization", bearer);
  
    const options = {
        method: "GET",
        headers: headers
    };
  
    console.log('request made to Graph API at: ' + new Date().toString());
    console.log(endpoint);
   await fetch(endpoint, options)
      .then(response => response.json())
      .then(ListinJson =>{globalTasksList = ListinJson;;})
      .then(response => callback(globalTasksList, endpoint))
      .catch(error => console.log(error))
  }


  //funktion um neue Task zu erstellen

  async function callMSGraphPost(endpoint, token, data, callback) {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;
  
    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");
  
    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
    };
  
    console.log('request made to Graph API at: ' + new Date().toString());
    console.log(endpoint);
   await fetch(endpoint, options)
      .then(response => response.json())
      .then(ListinJson =>{globalList = ListinJson;;})
      .then(response => callback(globalList, endpoint))
      .catch(error => console.log(error))
  }
  