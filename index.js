// console.log(document);
// var title=document.getElementById("header-title");
// title.innerText="ITEMLIST";
// var divcontainer=document.getElementById("div-cont");
// divcontainer.style.border="4px solid yellow";

// var list=document.getElementsByClassName("list-group-item");
// list.style.color="red";



var header=document.querySelector("#main-header");
header.style.borderBottom="solid 4px red";
var input=document.querySelector('input');
input.value="hello";

var item=document.querySelector('input[type="submit"]');
item.value="send";
var lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color="red";

//third item invisible;
// var thirdItem=document.querySelectorAll(".list-group-item:nth-child(3)");
// thirdItem.style.display="none";


var thirdItem=document.querySelectorAll(".list-group-item");
thirdItem[2].style.display="none";