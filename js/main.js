
var bookName =document.getElementById('bookMarkName');
var bookUrl =document.getElementById('bookMarkUrl');
var addBtn =document.getElementById('addBtn');
 var deleteBtn =document.getElementById('deleteBtn')
 var updateBtn = document.getElementById('updateBtn');
 var alertName = document.getElementById('alertName');
 var linkBtn =document.getElementById('alertName');
 var searchTerm = document.getElementById('searchTerm');
 var icon = document.querySelector('.icon')
 var currentIndex ;
 var container=[];

 updateBtn.style.display="none";
 // validation data from Session storage
 
  if(sessionStorage.getItem('ourSite') !=null)
  {
   container = JSON.parse(sessionStorage.getItem('ourSite'));
   displayBookMark();
  }


  // add BookMark
 function addBookMark()  
{ 
   if( validationNameInput() ==true &&validationUrlInput()==true)
   {
      var site={
         name:bookName.value ,
         url:bookUrl.value,
        }
          container.push(site);
          console.log(container);
          sessionStorage.setItem('ourSite',JSON.stringify(container));
          updateBtn.style.display="none";
          addBtn.style.display="block";
          displayBookMark();
          reset();
   }
    
 }
 addBtn.addEventListener('click',addBookMark);



// display BookMark in html
function displayBookMark() {
   var cartoona = '';
   for(var i=0 ;i<container.length ;i++)

   {
           
      cartoona += `
      <div  class=" border border-1 border-secondary-50 w-50 mx-auto d-flex pt-2 my-2 justify-content-between rounded rounded-2 ">
             
      <h3>${container[i].name}</h3>
      <div class="displayBtns ">
        <a  target="_blank"  href="${container[i].url} " class=" text-decoration-none">
            <button class="btn btn-success rounded-pill px-2 ">Visit</button>
         </a>
         <button onclick=' editBookMark(${i})' id='deleteBtn' class="btn btn-secondary px-2 rounded-pill">edit</button>

        <button onclick='deleteBookMark(${i})' id='deleteBtn' class="btn btn-danger rounded-pill px-2">Delete</button>

     
    </div>
 </div>

        

      `
    }

    document.getElementById(' displaySite').innerHTML = cartoona;
    
 
}


//delete BookMark
function deleteBookMark(i){
   container.splice(i,1);
  sessionStorage.setItem('ourSite',JSON.stringify(container));
   displayBookMark();
}


// edit
function editBookMark(i){
   bookName.value = container[i].name ;
   bookUrl.value = container[i].url;
   currentIndex = i;
   addBtn.style.display="none";
   updateBtn.style.display="block";

}

// update
function update(){
   container[currentIndex].name = bookName.value;
   container[currentIndex].url = bookUrl.value;
   sessionStorage.setItem('ourSite',JSON.stringify(container));

   displayBookMark();
   reset();
}
updateBtn.addEventListener('click', update);


//reset data
function reset(){
   bookName.value='';
   bookUrl.value ='';
}

//search 

   
//validation name inputs
function validationNameInput()
{
   var regex = /^[A-Z][0-9]*[a-z]+$/
  if( regex.test(bookName.value)==true)
  {
   alertName.classList.replace('d-block','d-none');
   return true;
  }
  else
  {
   alertName.classList.replace('d-none','d-block');

   return false;
  }
}


//validation url input
function validationUrlInput()
{
   var regex = /^https:\/{2}www.[A-Z]*[a-z]+[0-9]*[a-z]*((.com|.net)|.org)$/
  if( regex.test(bookUrl.value)==true)
  {
   alertUrl.classList.replace('d-block','d-none');
   return true;
  }
  else
  {
   alertUrl.classList.replace('d-none','d-block');

   return false;
  }
 
}



