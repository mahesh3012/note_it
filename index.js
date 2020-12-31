
    showNotes();
    let addBtn=document.getElementById('addBtn');
    addBtn.addEventListener("click",function(){
        let addText=document.getElementById('addText');
        let title=document.getElementById('title');
        let notes=localStorage.getItem("notes");
        if(notes==null){
            notesObj=[];
        }
        else{
            notesObj=JSON.parse(notes);
        }
        notesObj.push(addTxt.value);
        localStorage.setItem("notes",JSON.stringify(notesObj));
        addTxt.value="";


        
        let titles=localStorage.getItem("titles");
        if(titles==null){
            titlesObj=[];
        }
        else{
            titlesObj=JSON.parse(titles);
        }
        titlesObj.push(title.value);
        localStorage.setItem("titles",JSON.stringify(titlesObj));
        title.value="";
        
        


        showNotes();
    })
    function showNotes(){
        let notes=localStorage.getItem("notes");
        if(notes==null){
            notesObj=[];
        }
        else{
            notesObj=JSON.parse(notes);
        }


         
        let titles=localStorage.getItem("titles");
        if(titles==null){
            titlesObj=[];
        }
        else{
            titlesObj=JSON.parse(titles);
        }


        let html="";
        notesObj.forEach(function(element,index){
            if(titlesObj[index]==""){
           html += `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title search">Note ${index+1}</h5>
              <p class="card-text search">${element}</p>
              <button id = "${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
          </div>`}
          else{
            html += `<div class="noteCard card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title search">${titlesObj[index]}</h5>
              <p class="card-text search">${element}</p>
              <button id = "${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
          </div>`
          }
        });
        let notesElm = document.getElementById("notes");
        if(notesObj.length!=0){
            notesElm.innerHTML=html;
            
        }
        else{
            notesElm.innerText="Nothing to Show.Start Making Notes..!";
        }
    }
    function deleteNote(index){
        let notes=localStorage.getItem("notes");
        if(notes==null){
            notesObj=[];
        }
        else{
            notesObj=JSON.parse(notes);
        }
        

        let titles=localStorage.getItem("titles");
        if(titles==null){
            titlesObj=[];
        }
        else{
            titlesObj=JSON.parse(titles);
        }
        titlesObj.splice(index,1);
        notesObj.splice(index,1);
        localStorage.setItem("titles",JSON.stringify(titlesObj));
        localStorage.setItem("notes",JSON.stringify(notesObj));
        showNotes();
    }
    let searchText=document.getElementById("searchText");
    searchText.addEventListener("input",function(){
        value=searchText.value.toLowerCase();
        noteCard=document.getElementsByClassName("noteCard");
        Array.from(noteCard).forEach(function(element){
            let cardText=element.getElementsByClassName('search')[1].innerText.toLowerCase();
            let titleText=element.getElementsByClassName('search')[0].innerText.toLowerCase();
            if(cardText.includes(value) || titleText.includes(value)){
                element.style.display="block";
            }
            else{
                element.style.display="none";
            }
        })
    })
