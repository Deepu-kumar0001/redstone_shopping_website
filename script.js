var MenuItems = document.getElementById("menuItems");
MenuItems.style.maxHeight = "0px"

function menutoggle(){
    if(MenuItems.style.maxHeight == "0px")
    {
        MenuItems.style.maxHeight = "200px"
    }
    else{
        MenuItems.style.maxHeight = "0px"
    }
}

// product details in js

var ProductImg = document.getElementById("product-img");
var smallImg = document.getElementsByClassName("small-img")
smallImg[0].onclick = function(){
    ProductImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    ProductImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    ProductImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    ProductImg.src = smallImg[3].src;
}

// account js

  