// console.log(document);
// var title=document.getElementById("header-title");
// title.innerText="ITEMLIST";
// var divcontainer=document.getElementById("div-cont");
// divcontainer.style.border="4px solid yellow";


// var list=document.getElementsByClassName("list-group-item");
// list.style.color="red";



// var header=document.querySelector("#main-header");
// header.style.borderBottom="solid 4px red";
// var input=document.querySelector('input');
// input.value="hello";

// var item=document.querySelector('input[type="submit"]');
// item.value="send";
// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color="red";

//third item invisible;
// var thirdItem=document.querySelectorAll(".list-group-item:nth-child(3)");
// thirdItem.style.display="none";


// var thirdItem=document.querySelectorAll(".list-group-item");
// thirdItem[2].style.display="none";



///traversing the dom


// var itemList=document.querySelector("#items");
// //parentNOde

// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor='#f4f4f4';
// // console.log(itemList.parentNode.parentNode);

// //parent element

// // console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor='#f4f4f4';
// // console.log(itemList.parentElement.parentElement);




// //child NOde (not recommended)
// // console.log(itemList.childNodes);
// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// // itemList.children[1].style.backgroundColor="yellow";


// //firstChild(useless)
// // console.log(itemList.firstChild);


// //firstelementchild
// // console.log(itemList.firstElementChild);
// // itemList.firstElementChild.innerHTML="hello bhai";


// ///nextsiblings
// // console.log(itemList.nextSibling);
// // console.log(itemList.nextElementSibling);
// // console.log(itemList.previousElementSibling);
// // itemList.previousElementSibling.style.color="green";


// //ceate element
//    //create a div
//      var newDiv=document.createElement('div');
//      newDiv.className="hello";
//      newDiv.id='hello1';
//      newDiv.setAttribute('title','hello div');
//     //  newDiv.innerText="helo world";

//      var newDivtext=document.createTextNode('hello world');
//      newDiv.appendChild(newDivtext);
//      console.log(newDiv);

//      var container=document.querySelector('header .container');
//      var h1=document.querySelector('header h1');
//      container.insertBefore(newDiv,h1);





var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//adding data to local storage
form.addEventListener("submit",function(){

})

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
let i=1;
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
 
   localStorage.setItem(`itemvalue${i++}`,newItem);
  
   
  // Create new li element
//   var li = document.createElement('li');
//   // Add class
//   li.className = 'list-group-item';
//   // Add text node with input value
//   li.appendChild(document.createTextNode(newItem));

//   // Create del button element
//   var deleteBtn = document.createElement('button');

//   // Add classes to del button
//   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//   // Append text node
//   deleteBtn.appendChild(document.createTextNode('X'));

//   // Append button to li
//   li.appendChild(deleteBtn);

//   // Append li to list
//   itemList.appendChild(li);
  
   var li=document.createElement("li");
   li.classList='list-group-item';
   li.appendChild(document.createTextNode(newItem));

   var deletebutton=document.createElement("button");
   deletebutton.classList="btn btn-danger btn-sm float-right delete";
   deletebutton.appendChild(document.createTextNode("X"));

  li.appendChild(deletebutton);

   itemList.appendChild(li);


}

// Remove item
function removeItem(e){

if(e.target.classList.contains('delete')){
    if(confirm('are u sure??')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
}
}


// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}



