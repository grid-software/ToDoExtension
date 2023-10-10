// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new Msal.UserAgentApplication(msalConfig);
let gotToken;

function signIn() {
  myMSALObj.loginPopup(loginRequest)
    .then(loginResponse => {
      console.log("id_token acquired at: " + new Date().toString());
      console.log(loginResponse);
      
      if (myMSALObj.getAccount()) {
        addlists();
      }
    }).catch(error => {
      console.log(error);
    });
}


function signInWithWebAuthFlow() {
  var redirectUrl = chrome.identity.getRedirectURL();

  var authUrl = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?' +
      'response_type=token' +
      '&client_id=0d5bffb8-1943-420d-84b9-63686cd4434a' +
      '&redirect_uri=' + encodeURIComponent(redirectUrl) +
      '&scope=openid profile email Tasks.Read Tasks.ReadWrite' +
      '&nonce=' + encodeURIComponent(Math.random().toString(36).substring(2, 15));

  chrome.identity.launchWebAuthFlow(
      {
          url: authUrl,
          interactive: true
      },
      function (responseUrl) {
          if (chrome.runtime.lastError) {
              // Fehler beim Starten des Web-Auth-Flows
              console.error(chrome.runtime.lastError);
              return;
          }

          // Überprüfe, ob die Antwort-URL korrekt ist
          if (responseUrl && responseUrl.startsWith(redirectUrl)) {
              var params = new URLSearchParams(responseUrl.split("#")[1]);
              var accessToken = params.get("access_token"); // Hier hinzugefügt

              if (accessToken) {
                  console.log("Access token received: " + accessToken);
                  gotToken = accessToken;
                  addlists();
              } else {
                  console.log("Access token not received");
                  console.log(responseUrl);
              }
          } else {
              console.error("Invalid response URL: " + responseUrl);
          }
      }
  );
}




function signOut() {
  myMSALObj.logout();
}

function getTokenPopup(request) {
  return myMSALObj.acquireTokenSilent(request)
    .catch(error => {
      console.log(error);
      console.log("silent token acquisition fails. acquiring token using popup");
          
      // fallback to interaction when silent call fails
        return myMSALObj.acquireTokenPopup(request)
          .then(tokenResponse => {
            return tokenResponse;
          }).catch(error => {
            console.log(error);
          });
    });
}


async function getLists() {
  if (signInWithWebAuthFlow) {
    try {
      const response = await getTokenPopup(tokenRequest);
      await callMSGraph(graphConfig.graphListEndpoint, gotToken, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}

async function getTasks() {
  if (signInWithWebAuthFlow) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+currentListid+"/tasks";
      await callMSGraphTasks(graphConfig.graphTasksEndpoint, gotToken, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}


async function updateTasks(updatetaskjs, currentTaskid) {
  if (signInWithWebAuthFlow) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksUpdateEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+currentListid+"/tasks/"+currentTaskid+"/";
      console.log(graphConfig.graphTaskUpdateEndpoint);
      await callMSGraphPatch(graphConfig.graphTasksUpdateEndpoint, gotToken, updatetaskjs, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}

async function postTasks(addtaskjs) {
  if (signInWithWebAuthFlow) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksUpdateEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+currentListid+"/tasks";
      console.log(graphConfig.graphTaskUpdateEndpoint);
      await callMSGraphPost(graphConfig.graphTasksUpdateEndpoint, gotToken, addtaskjs, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}

async function postLists(addlstjs) {
  if (signInWithWebAuthFlow) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphListsUpdateEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists";
      console.log(graphConfig.graphListsUpdateEndpoint);
      await callMSGraphPost(graphConfig.graphListsUpdateEndpoint, gotToken, addlstjs, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}


async function deleteLists(currentListid) {
  if (signInWithWebAuthFlow) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphListsDeleteEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+ currentListid;
      console.log(graphConfig.graphListsDeleteEndpoint);
      await callMSGraphDelete(graphConfig.graphListsDeleteEndpoint, gotToken, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}

async function deleteTask(currentListid,currentTaskid) {
  if (signInWithWebAuthFlow) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksDeleteEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+ currentListid +'/tasks/'+ currentTaskid ;
      console.log(graphConfig.graphTasksDeleteEndpoint);
      await callMSGraphDelete(graphConfig.graphTasksDeleteEndpoint, gotToken, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}


async function editLists(currentListid,updatelistjs) {
  if (signInWithWebAuthFlow) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksPatchEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+ currentListid ;
      console.log(graphConfig.graphTasksPatchEndpoint);
      await callMSGraphPatch(graphConfig.graphTasksPatchEndpoint, gotToken,updatelistjs, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}