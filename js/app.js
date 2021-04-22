console.log('hello');

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addtitle=document.getElementById("addtitle");
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title:addtitle.value,
        text:addTxt.value
    }
    notesObj.push
    (myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    addtitle.value = "";
    console.log(notesObj);
    shownotes();

});

function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }

    let a = "";
    notesObj.forEach(function (element, index) {
        a += `
       <div class="my-2 mx-2 card" style="width: 18rem;">
         <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.text}</p>
              <button id=${index} onclick="deletenote(this.id)" href="#" class="btn btn-primary">DELETE NOTE</button>
         </div>
        </div>`;

    }

    );
    let noteselm=document.getElementById('notes');
    if(notesObj.length)
    {
        noteselm.innerHTML=a;
    }
    else{
        noteselm.innerHTML=`nothing to show use  add note to add new notes`;
    }
   
}
function deletenote(index)
{
    console.log('iam deleting',index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);
    }
    
    notesObj.splice(index,1);
    
    localStorage.setItem('notes',JSON.stringify(notesObj));
    shownotes();
}



