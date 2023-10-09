
const Listendiv = document.getElementById("Listendiv");
const h1 = document.getElementsByClassName("h1")[0];
const sigbtn = document.getElementsByClassName("sigbtn")[0];
let globalList;
let globalTasksList;
const listenid = [{}];
const taskid = [{}];
let currentListid = "";
let currentTaskid = "";
let updateTasksjs = [{}];
let addtaskjs = [{}];
let addlstjs = [{}];
let updatelistjs = [{}];
let uncheckTasksjs = [{}];
let checkTasksjs = [{}];

sigbtn.addEventListener("click", function(){
  signInWithWebAuthFlow();
});



async function addlists() {
  let elements = document.querySelectorAll(".sigbtn");
      elements.forEach(element => {
      element.parentNode.removeChild(element);
      });

  await getLists();
  let anzahllisten = globalList.value.length;
  listenid.length = 0; //cleart das arrays
  
  h1.textContent = "Listen";



  for (let i = 0; i < anzahllisten; i++) {
    const Listenbutton = document.createElement("button");
    

    
    Listenbutton.classList.add("Lstbtn");

    
    Listenbutton.setAttribute('id', i);
    Listenbutton.textContent = globalList.value[i].displayName;


      //div für actions
      var actiondiv = document.createElement("div");
      actiondiv.style = "float: right";
      actiondiv.classList.add("actiondiv");

      //divs für listenbuttons
      var lstbtndiv = document.createElement("div");
      lstbtndiv.style = "display: flex";
      lstbtndiv.classList.add("lstbtndiv");
      lstbtndiv.style= "align-items : center";
      lstbtndiv.style = "width: 80%";

      //div für beiede zusammen
      var fulllistact = document.createElement("div");
      fulllistact.style = "display : flex";


      //delete image
      var deleteimg = document.createElement('img');
      deleteimg.src = "delete.png";
      deleteimg.width = 20;
      deleteimg.height = 20;
      deleteimg.alt = "löschen";
     // deleteimg.style = 'float: left';
      deleteimg.classList.add('deleteimg');
      deleteimg.setAttribute('id', i);


      //edit image
      var editimage = document.createElement("img");
      editimage.src = "edit.png";
      editimage.width = 25;
      editimage.height = 25;
      editimage.classList.add('invert');
      editimage.alt = "editieren";
     // editimage.style ="float: left";
      editimage.classList.add("editimg");
      editimage.setAttribute("id", i);
      

      Listendiv.sytle = "display: flex"

      lstbtndiv.style.marginLeft = 56 + "px";

      lstbtndiv.appendChild(Listenbutton);
      actiondiv.appendChild(editimage);
      actiondiv.appendChild(deleteimg);
      fulllistact.appendChild(lstbtndiv);
      fulllistact.appendChild(actiondiv);
      Listendiv.appendChild(fulllistact);
      
      
      listenid.push(globalList.value[i].id);
      
      editimage.addEventListener("click", async function(){

      const parentButtonId = event.target.parentNode.id;
      currentListid = (listenid[((parseInt(event.target.id)) )]);
      
      
      //Löscht alle elemente aus der Ansicht
      let elements = document.querySelectorAll(".Lstbtn, .addlstbtn, .deleteimg, .editimg, .inspect");
      elements.forEach(element => {
      element.parentNode.removeChild(element);
      });

      //erstellt die zu bearbeitende ansicht
      
      const header = document.createElement("h3");
      const headerbox = document.createElement("p");
      const savebutton = document.createElement("button");
      const backbutton = document.createElement("button");
      const savespan = document.createElement("span");
      const backspan = document.createElement("span");

      headerbox.contentEditable = "true";
      header.textContent = "Titel";
      savespan.textContent = "Speichern";
      backspan.textContent = "Zurück";

      savebutton.appendChild(savespan);
      backbutton.appendChild(backspan);

      headerbox.classList.add("header-box");
      savebutton.classList.add("addlstbtn");
      backbutton.classList.add("backbtn");

      header.classList.add("TskchgSite");
      headerbox.classList.add("TskchgSite");
      savebutton.classList.add("TskchgSite");
      backbutton.classList.add("TskchgSite");

      console.log(listenid);
      console.log(globalList);
      headerbox.textContent = globalList.value[(parseInt(event.target.id)) ].displayName;

      Listendiv.appendChild(header);
      Listendiv.appendChild(headerbox);
      Listendiv.appendChild(savebutton);
      Listendiv.appendChild(backbutton);


      savebutton.addEventListener("click", async function(){

        updatelistjs = {

          "displayName": headerbox.textContent

        }
        await editLists(currentListid,updatelistjs);
        reloadLists();
       });


       backbutton.addEventListener("click", function(){
        reloadLists();
       })
      
      
      })





    deleteimg.addEventListener("click", async function () {

        
        const parentButtonId = event.target.parentNode.id;
        currentListid = (listenid[((parseInt(event.target.id)) )]);
        console.log(event.target.id);
        console.log(currentListid);

        await deleteLists(currentListid);
        reloadLists();
        
      }
    );
        


    // Den Eventlistener an den Button anhängen
    Listenbutton.addEventListener("click", async function () {
      currentListid = (listenid[((parseInt(event.target.id)) )]);
      console.log(currentListid);
      await getTasks(); //notwenidige berechnung da arrays bei 1 anfangen und json nicht
      addTasks();
    });
  }

  //hinzufügen
  const addlst = document.createElement("button");
  const addspan = document.createElement("span");
  addspan.textContent = "neue Liste hinzufügen";
  addlst.appendChild(addspan);
  addlst.classList.add("addlstbtn");
  Listendiv.appendChild(addlst);

  addlst.addEventListener("click", async function() {
    let elements = document.querySelectorAll(".Lstbtn, .addlstbtn, .deleteimg, .editimg, .inspect");
    elements.forEach(element => {
      element.parentNode.removeChild(element);
    });
  
    const header = document.createElement("h3");
    const headerbox = document.createElement("p");
    const savebutton = document.createElement("button");
    const backbutton = document.createElement("button");
    const savespan = document.createElement("span");
    const backspan = document.createElement("span");
  
    headerbox.contentEditable = "true";
    header.textContent = "Titel";
    savespan.textContent = "Speichern";
    backspan.textContent = "Zurück";

    savebutton.appendChild(savespan);
    backbutton.appendChild(backspan);
  
    headerbox.classList.add("header-box");
    savebutton.classList.add("addlstbtn");
    backbutton.classList.add("backbtn");
    backbutton.classList.add("TskchgSite");
  
    header.classList.add("TskchgSite");
    headerbox.classList.add("TskchgSite");
    savebutton.classList.add("TskchgSite");
  
    Listendiv.appendChild(header);
    Listendiv.appendChild(headerbox);
    Listendiv.appendChild(savebutton);
    Listendiv.appendChild(backbutton);
  
    savebutton.addEventListener("click", async function() {
      addlstjs = {
        displayName: headerbox.textContent 
      };
  
      await postLists(addlstjs);
  
      let elements = document.querySelectorAll(".TskchgSite");
      elements.forEach(element => {
        element.parentNode.removeChild(element);
      });
  
      await addlists();
    });
  
    backbutton.addEventListener("click", async function() {
      let elements = document.querySelectorAll(".TskchgSite");
      elements.forEach(element => {
        element.parentNode.removeChild(element);
      });
      await addlists();
    });
  });
  
  console.log(listenid);
  console.log(listenid[1]);

};

async function addTasks() {
  let elements = document.querySelectorAll(".Lstbtn, .addlstbtn, .deleteimg, .editimg, .inspect");
  elements.forEach(element => {
    element.parentNode.removeChild(element);
  });
  let anzahltasks = globalTasksList.value.length;
  console.log(anzahltasks);

  h1.textContent = "Aufgaben";

  if (anzahltasks === 0) {                                        //falls keine Aufgaben in der Liste vorhanden sind
    const NoTaskbutton = document.createElement("button");
    NoTaskbutton.classList.add("Tskbtn");

    NoTaskbutton.textContent = "keine Aufgaben vorhanden";

    Listendiv.appendChild(NoTaskbutton);
    NoTaskbutton.addEventListener("click",function(){
          let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn, .deleteimg, .inspect");
          elements.forEach(element => {
            element.parentNode.removeChild(element);
          });

          const header = document.createElement("h3");
          const headerbox = document.createElement("p");
          const contents = document.createElement("h3");
          const contentbox = document.createElement("p");
          const savebutton = document.createElement("button");
          const backbutton = document.createElement("button");
          const savespan = document.createElement("span");
          const backspan = document.createElement("span");


          headerbox.contentEditable = "true";
          contentbox.contentEditable = "true";

          header.textContent = "Titel";
          contents.textContent = "Inhalt";

          savespan.textContent = "Speichern";
          savebutton.appendChild(savespan);
          backspan.textContent = "Zurück";
          backbutton.appendChild(backspan);


          headerbox.classList.add("header-box");
          contentbox.classList.add("content-box");
          savebutton.classList.add("addlstbtn");
          backbutton.classList.add("backbtn");

          header.classList.add("TskchgSite");
          headerbox.classList.add("TskchgSite");
          contents.classList.add("TskchgSite");
          contentbox.classList.add("TskchgSite");
          savebutton.classList.add("TskchgSite");
          backbutton.classList.add("TskchgSite");

          Listendiv.appendChild(header);
          Listendiv.appendChild(headerbox);
          Listendiv.appendChild(contents);
          Listendiv.appendChild(contentbox);
          Listendiv.appendChild(savebutton);
          Listendiv.appendChild(backbutton);

          savebutton.addEventListener("click", async function() {

            addtaskjs = {
            
              body: {
                content: contentbox.textContent
                ,
                contentType: "text"
              },
              title: headerbox.textContent
            };

            await postTasks(addtaskjs);

            let elements = document.getElementsByClassName("TskchgSite");
          while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);          //Löschen der Vorherigen HTML Elemente
          }

          await getTasks();
          await addTasks();


        });});
  }

  taskid.length = (0);                          //reset der Taskid liste
  
  for (let i = 0; i < anzahltasks; i++) {                       //Aufzählung der tasks
    const Taskbutton = document.createElement("button");

    //Löschbutton
    var deleteimg = document.createElement('img');
    deleteimg.src = "delete.png";
    deleteimg.width = 20;
    deleteimg.height = 20;
    deleteimg.alt = "löschen";
    deleteimg.classList.add('deleteimg');
    deleteimg.setAttribute('id', i);
    //Löschbutton



    //inspect button
    var eyebutton = document.createElement("img");
    eyebutton.src = "eye.png"
    eyebutton.width = 20;
    eyebutton.height = 20;
    eyebutton.style.marginRight = 20+"px";
    eyebutton.alt = "ansehen";
    eyebutton.classList.add("inspect");
    eyebutton.setAttribute('id', i);
    //inspect button


    Taskbutton.classList.add("Tskbtn");
    Taskbutton.setAttribute('id', i);
    Taskbutton.textContent = globalTasksList.value[i].title;

    //check ob aufgabe erledigt ist oder nicht
    if (globalTasksList.value[i].status === "completed"){
      Taskbutton.classList.add("fertig");
    };
    //


    //divs für alle Elemente
    const actiondiv = document.createElement("div");
    const Taskdiv = document.createElement("div");
    const gesamtdiv = document.createElement("div");

    Taskdiv.style.display = "flex";
    Taskdiv.style.width = "80%";
    Taskdiv.style.marginLeft = 56 + "px";
    Taskdiv.style.paddingRight = 0;
    gesamtdiv.style.display = "flex";
    gesamtdiv.style.alignItems = "center";
    gesamtdiv.style.justifyContent ="flex-start";




    actiondiv.appendChild(eyebutton);
    actiondiv.appendChild(deleteimg);
    Taskdiv.appendChild(Taskbutton);
    gesamtdiv.appendChild(Taskdiv);
    gesamtdiv.appendChild(actiondiv);
    Listendiv.appendChild(gesamtdiv);
    taskid.push(i);

    deleteimg.addEventListener("click", async function () {
      
    let taskidfin = [];
    let currentTaskid = [];
    taskidfin.length = (0);
    currentTaskid.length = (0);

    taskidfin = [(taskid[((parseInt(event.target.id))  )])];
    currentTaskid = globalTasksList.value[taskidfin].id; 
      
    
      console.log(event.target.id);
      console.log(currentTaskid);
      console.log(currentListid);

      await deleteTask(currentListid,currentTaskid);

      let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn, .deleteimg, .inspect");
      elements.forEach(element => {
        element.parentNode.removeChild(element);
      })          //Löschen der Vorherigen HTML Elemente
  
      await getTasks();
      await addTasks();
    });
  
    
      
    };



  


  // hinzufügen button
  const addbutton = document.createElement("button");
  const addspan = document.createElement("span");
  addspan.textContent = "neue Aufgabe hinzufügen";
  addbutton.classList.add("addtskbtn");
  addbutton.appendChild(addspan);
  Listendiv.appendChild(addbutton);

  //zurück button
  const backbutton = document.createElement("button");
  const backspan = document.createElement("span");
  backspan.textContent = "Zurück";
  backbutton.classList.add("backbtn")
  backbutton.appendChild(backspan);
  Listendiv.appendChild(backbutton);



  const Taskknopf = document.getElementsByClassName("Tskbtn");
  const Eyes = document.getElementsByClassName("inspect");

  for (let i = 0; i < Taskknopf.length; i++) {
    Eyes[i].addEventListener("click", async function (event) {

      chgTasks(event);
    });

    Taskknopf[i].addEventListener("click", async function(event){
      await checkTask(event);
    })
  }


 


  backbutton.addEventListener("click", async function () {
    let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn, .deleteimg, .inspect");
    elements.forEach(element => {
      element.parentNode.removeChild(element);
    })          //Löschen der Vorherigen HTML Elemente

    await getLists();
    await addlists();
  });



  addbutton.addEventListener("click", async function () {
    let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn, .deleteimg, .inspect");
    elements.forEach(element => {
      element.parentNode.removeChild(element);
    });

    const header = document.createElement("h3");
    const headerbox = document.createElement("p");
    const contents = document.createElement("h3");
    const contentbox = document.createElement("p");
    const savebutton = document.createElement("button");
    const backbutton = document.createElement("button");
    const savespan = document.createElement("span");
    const backspan = document.createElement("span");

    headerbox.contentEditable = "true";
    contentbox.contentEditable = "true";

    header.textContent = "Titel";
    contents.textContent = "Inhalt";

    savespan.textContent = "Speichern";
    savebutton.appendChild(savespan);
    backspan.textContent = "Zurück";
    backbutton.appendChild(backspan);

    headerbox.classList.add("header-box");
    contentbox.classList.add("content-box");
    savebutton.classList.add("addlstbtn");
    backbutton.classList.add("backbtn");

    header.classList.add("TskchgSite");
    headerbox.classList.add("TskchgSite");
    contents.classList.add("TskchgSite");
    contentbox.classList.add("TskchgSite");
    savebutton.classList.add("TskchgSite");
    backbutton.classList.add("TskchgSite");

    Listendiv.appendChild(header);
    Listendiv.appendChild(headerbox);
    Listendiv.appendChild(contents);
    Listendiv.appendChild(contentbox);
    Listendiv.appendChild(savebutton);
    Listendiv.appendChild(backbutton);

    savebutton.addEventListener("click", async function() {

      addtaskjs = {
      
        body: {
          content: contentbox.textContent
          ,
          contentType: "text"
        },
        title: headerbox.textContent
      };

      await postTasks(addtaskjs);

      let elements = document.getElementsByClassName("TskchgSite");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);          //Löschen der Vorherigen HTML Elemente
    }

    await getTasks();
    await addTasks();



    });

    backbutton.addEventListener("click", async function(){
    
      let elements = document.querySelectorAll(".TskchgSite");
    elements.forEach(element => {
      element.parentNode.removeChild(element);
    })          //Löschen der Vorherigen HTML Elemente

    await getTasks();
    await addTasks();
    })
  
  
  
  });
}






async function chgTasks(event) {
  let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn, .deleteimg, .inspect");
  elements.forEach(element => {
    element.parentNode.removeChild(element);
  });

  const header = document.createElement("h3");
  const headerbox = document.createElement("p");
  const contents = document.createElement("h3");
  const contentbox = document.createElement("p");
  const savebutton = document.createElement("button");
  const backbutton = document.createElement("button");
  const savespan = document.createElement("span");
  const backspan = document.createElement("span");

  headerbox.contentEditable = "true";
  contentbox.contentEditable = "true";

  header.textContent = "Titel";
  contents.textContent = "Inhalt";

  savespan.textContent = "Speichern";
  savebutton.appendChild(savespan);
  backspan.textContent = "Zurück";
  backbutton.appendChild(backspan);

  //Inhalt der Tasks

  await getTasks();
  console.log(globalTasksList);

  let taskidfin = [];
  let currentTaskid = [];
  taskidfin.length = (0);
  currentTaskid.length = (0);

  taskidfin = [(taskid[((parseInt(event.target.id))  )])];
  currentTaskid = globalTasksList.value[taskidfin].id;               //zieht sich die Id der Task um damit den Patch zu machen
  console.log(currentTaskid);
  console.log(event.target.id)
  console.log("die taskid ist" + taskidfin);

  headerbox.textContent = globalTasksList.value[(taskid[((parseInt(event.target.id)) )])].title;
  contentbox.textContent = globalTasksList.value[(taskid[((parseInt(event.target.id)) )])].body.content;

  


  headerbox.classList.add("header-box");
  contentbox.classList.add("content-box");
  savebutton.classList.add("addlstbtn");
  backbutton.classList.add("backbtn");

  header.classList.add("TskchgSite");
  headerbox.classList.add("TskchgSite");
  contents.classList.add("TskchgSite");
  contentbox.classList.add("TskchgSite");
  savebutton.classList.add("TskchgSite");
  backbutton.classList.add("TskchgSite");

  Listendiv.appendChild(header);
  Listendiv.appendChild(headerbox);
  Listendiv.appendChild(contents);
  Listendiv.appendChild(contentbox);
  Listendiv.appendChild(savebutton);
  Listendiv.appendChild(backbutton);


  savebutton.addEventListener("click", async function () {
    console.log("gedrückt");


    updateTasksjs = {
      id: "'" + currentTaskid + "'" ,
      body: {
        content: contentbox.textContent
        ,
        contentType: "text"
      },
      title: headerbox.textContent
    };

    await updateTasks(updateTasksjs, currentTaskid);
    console.log("fertig");

    let elements = document.getElementsByClassName("TskchgSite");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);          //Löschen der Vorherigen HTML Elemente
    }

    await getTasks();
    await addTasks();

  }
  
  );


  backbutton.addEventListener("click", async function () {
    console.log("hey ich drpck doch")
    let elements = document.getElementsByClassName("TskchgSite");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);          //Löschen der Vorherigen HTML Elemente
    }
    await getTasks();
    await addTasks();
  })

}

async function reloadLists(){
  let elements = document.querySelectorAll(".Lstbtn, .addlstbtn, .deleteimg, .editimg, .TskchgSite, .inspect");
    elements.forEach(element => {
      element.parentNode.removeChild(element);
    });
    await addlists();


}

async function checkTask(event){
  const checktaskid = (globalTasksList.value[(taskid[((parseInt(event.target.id)) )])].id);
  if(globalTasksList.value[(taskid[((parseInt(event.target.id)) )])].status === "notStarted"){

    checkTasksjs = {
      status : "completed"
    };
    await updateTasks(checkTasksjs, checktaskid);

    let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn, .deleteimg, .inspect");
  elements.forEach(element => {
    element.parentNode.removeChild(element);
  });
    
    await getTasks();
    await addTasks();
    return;

  };
  if (globalTasksList.value[(taskid[((parseInt(event.target.id)) )])].status === "completed"){
    console.log(globalTasksList.value[(taskid[((parseInt(event.target.id)) )])]);
    uncheckTasksjs = {
      status : "notStarted"
    };
    await updateTasks( uncheckTasksjs, checktaskid);

    let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn, .deleteimg, .inspect");
  elements.forEach(element => {
    element.parentNode.removeChild(element);
  });
    
    await getTasks();
    await addTasks();
    return;
  };
  
  

}












