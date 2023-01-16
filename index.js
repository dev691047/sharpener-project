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


var itemList=document.querySelector("#items");
//parentNOde

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);

//parent element

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);




//child NOde (not recommended)
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="yellow";


//firstChild(useless)
// console.log(itemList.firstChild);


//firstelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.innerHTML="hello bhai";


///nextsiblings
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="green";


//ceate element
   //create a div
     var newDiv=document.createElement('div');
     newDiv.className="hello";
     newDiv.id='hello1';
     newDiv.setAttribute('title','hello div');
    //  newDiv.innerText="helo world";

     var newDivtext=document.createTextNode('hello world');
     newDiv.appendChild(newDivtext);
     console.log(newDiv);

     var container=document.querySelector('header .container');
     var h1=document.querySelector('header h1');
     container.insertBefore(newDiv,h1);