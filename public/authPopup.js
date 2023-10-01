// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new Msal.UserAgentApplication(msalConfig);

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

function seeProfile() {
  if (myMSALObj.getAccount()) {
    getTokenPopup(loginRequest)
      .then(response => {
        callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, updateUI);
      }).catch(error => {
        console.log(error);
      });
  }
}

function readMail() {
  if (myMSALObj.getAccount()) {
    getTokenPopup(tokenRequest)
      .then(response => {
        callMSGraph(graphConfig.graphMailEndpoint, response.accessToken, updateUI);
      }).catch(error => {
        console.log(error);
      });
  }
}

async function getLists() {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      await callMSGraph(graphConfig.graphListEndpoint, response.accessToken, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}

async function getTasks() {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+currentListid+"/tasks";
      await callMSGraphTasks(graphConfig.graphTasksEndpoint, response.accessToken, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}


async function updateTasks(updatetaskjs, currentTaskid) {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksUpdateEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+currentListid+"/tasks/"+currentTaskid+"/";
      console.log(graphConfig.graphTaskUpdateEndpoint);
      await callMSGraphPatch(graphConfig.graphTasksUpdateEndpoint, response.accessToken, updatetaskjs, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}

async function postTasks(addtaskjs) {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksUpdateEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+currentListid+"/tasks";
      console.log(graphConfig.graphTaskUpdateEndpoint);
      await callMSGraphPost(graphConfig.graphTasksUpdateEndpoint, response.accessToken, addtaskjs, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}

async function postLists(addlstjs) {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphListsUpdateEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists";
      console.log(graphConfig.graphListsUpdateEndpoint);
      await callMSGraphPost(graphConfig.graphListsUpdateEndpoint, response.accessToken, addlstjs, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}


async function deleteLists(currentListid) {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphListsDeleteEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+ currentListid;
      console.log(graphConfig.graphListsDeleteEndpoint);
      await callMSGraphDelete(graphConfig.graphListsDeleteEndpoint, response.accessToken, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}

async function deleteTask(currentListid,currentTaskid) {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksDeleteEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+ currentListid +'/tasks/'+ currentTaskid ;
      console.log(graphConfig.graphTasksDeleteEndpoint);
      await callMSGraphDelete(graphConfig.graphTasksDeleteEndpoint, response.accessToken, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}


async function editLists(currentListid,updatelistjs) {
  if (myMSALObj.getAccount()) {
    try {
      const response = await getTokenPopup(tokenRequest);
      graphConfig.graphTasksPatchEndpoint = "https://graph.microsoft.com/v1.0/me/todo/lists/"+ currentListid ;
      console.log(graphConfig.graphTasksPatchEndpoint);
      await callMSGraphPatch(graphConfig.graphTasksPatchEndpoint, response.accessToken,updatelistjs, updateUI);
    } catch (error) {
      console.log(error);
    }
  }
}