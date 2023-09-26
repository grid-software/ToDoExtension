
//test ob git funktioniert


const Listendiv = document.getElementById("Listendiv");

let globalList;
let globalTasksList;
const listenid = [{}];
const taskid = [{}];
let currentListid = "";
let currentTaskid = "";
let updateTasksjs = [{}];
let addtaskjs = [{}];

async function addlists() {
  await getLists();
  let anzahllisten = globalList.value.length;
  for (let i = 0; i < anzahllisten; i++) {
    const Listenbutton = document.createElement("button");

    Listenbutton.classList.add("Lstbtn");
    Listenbutton.setAttribute('id', i);
    Listenbutton.textContent = globalList.value[i].displayName;

    Listendiv.appendChild(Listenbutton);

    listenid.push(globalList.value[i].id);

    // Den Eventlistener an den Button anhängen
    Listenbutton.addEventListener("click", async function () {
      currentListid = (listenid[((parseInt(event.target.id)) + 1)]);
      console.log(currentListid);
      await getTasks(); //notwenidige berechnung da arrays bei 1 anfangen und json nicht
      addTasks();
    });
  }

  console.log(listenid);
  console.log(listenid[1]);
}



async function addTasks() {
  let elements = document.getElementsByClassName("Lstbtn");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);          //Löschen der Vorherigen HTML Elemente
  }
  let anzahltasks = globalTasksList.value.length;
  console.log(anzahltasks);
  if (anzahltasks === 0) {                                        //falls keine Aufgaben in der Liste vorhanden sind
    const Taskbutton = document.createElement("button");
    Taskbutton.classList.add("Tskbtn");

    Taskbutton.textContent = "keine Aufgaben vorhanden";

    Listendiv.appendChild(Taskbutton);

  }

  for (let i = 0; i < anzahltasks; i++) {                       //Aufzählung der tasks
    const Taskbutton = document.createElement("button");

    Taskbutton.classList.add("Tskbtn");
    Taskbutton.setAttribute('id', i);
    Taskbutton.textContent = globalTasksList.value[i].title;

    Listendiv.appendChild(Taskbutton);
    taskid.push(i);
  }


  // hinzufügen button
  const addbutton = document.createElement("button");
  addbutton.textContent = "neue Aufgabe hinzufügen";
  addbutton.classList.add("addtskbtn");
  Listendiv.appendChild(addbutton);

  //zurück button
  const backbutton = document.createElement("button");
  backbutton.textContent = "Zurück";
  backbutton.classList.add("backbtn")
  Listendiv.appendChild(backbutton);



  const Taskknopf = document.getElementsByClassName("Tskbtn");

  for (let i = 0; i < Taskknopf.length; i++) {
    Taskknopf[i].addEventListener("click", async function (event) {

      chgTasks(event);
    });
  }


  backbutton.addEventListener("click", async function () {
    let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn");
    elements.forEach(element => {
      element.parentNode.removeChild(element);
    })          //Löschen der Vorherigen HTML Elemente

    await getLists();
    await addlists();
  });



  addbutton.addEventListener("click", async function () {
    let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn");
    elements.forEach(element => {
      element.parentNode.removeChild(element);
    });

    const header = document.createElement("h3");
    const headerbox = document.createElement("p");
    const contents = document.createElement("h3");
    const contentbox = document.createElement("p");
    const savebutton = document.createElement("button");
    const backbutton = document.createElement("button");

    headerbox.contentEditable = "true";
    contentbox.contentEditable = "true";

    header.textContent = "Titel";
    contents.textContent = "Inhalt";

    savebutton.textContent = "Speichern";

    backbutton.textContent = "Zurück";


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



    })

  })



}



async function chgTasks(event) {
  let elements = document.querySelectorAll(".Tskbtn, .backbtn, .addtskbtn");
  elements.forEach(element => {
    element.parentNode.removeChild(element);
  });

  const header = document.createElement("h3");
  const headerbox = document.createElement("p");
  const contents = document.createElement("h3");
  const contentbox = document.createElement("p");
  const savebutton = document.createElement("button");
  const backbutton = document.createElement("button");

  headerbox.contentEditable = "true";
  contentbox.contentEditable = "true";

  header.textContent = "Titel";
  contents.textContent = "Inhalt";

  savebutton.textContent = "Speichern";

  //Inhalt der Tasks

  await getTasks();
  console.log(globalTasksList);

  let taskidfin = [(taskid[((parseInt(event.target.id)) + 1)])];
  let currentTaskid = globalTasksList.value[taskidfin].id;               //zieht sich die Id der Task um damit den Patch zu machen
  console.log(currentTaskid);
  console.log(event.target.id)
  console.log("die taskid ist" + taskidfin);

  headerbox.textContent = globalTasksList.value[(taskid[((parseInt(event.target.id)) + 1)])].title;
  contentbox.textContent = globalTasksList.value[(taskid[((parseInt(event.target.id)) + 1)])].body.content;

  backbutton.textContent = "Zurück";


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
      id: "'" + currentTaskid + "'",
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

  });


  backbutton.addEventListener("click", async function () {

    let elements = document.getElementsByClassName("TskchgSite");
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);          //Löschen der Vorherigen HTML Elemente
    }
    await getTasks();
    await addTasks();
  })

}














