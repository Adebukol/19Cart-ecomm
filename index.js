//Navlinks toggle button
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const Links = document.getElementsByClassName("navbar-links")[0]
// console.log(Links);

toggleButton.addEventListener("click", ()=> {
    Links.classList.toggle('active')   
})
// end


let count = 0;
let addtocartBtn = document.querySelectorAll(".product-btn")

function increment(){
    countEl.textContent = count;
    count += 1;
    if(count <= 50){
        return ('')
    }else if(count = 100){ 
        alert("cart is full, proceed to checkout")
    }
    else{
        return ("")
    }
}
let countEl = document.getElementById("count-el");

increment()

//Action dropdown menu
function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(e){
    if(!e.target.matches(".dropbtn")){
        var myDropdown = document.getElementById("myDropdown");
        // var i;
        // for(i = 0; i<dropdowns.length; i++) {
        //     var openDropdown = dropdowns[i];
            if(myDropdown.classList.contains("show")){
                myDropdown.classList.remove("show");
            }

        }
    }
    //end



    function search(){
        const searchbox = document.getElementById("search-item").value.toUpperCase();
        const storeitems = document.getElementById("product-list")
        const product = document.querySelectorAll(".img-container")
        const pname = document.getElementsByTagName("h3")
        //const btn = document.getElementsByClassName("search-button")
    
        for(var i = 0; i < pname.length; i++){
            let match = product[i].getElementsByTagName('h3')[0];
            if(match){
               let searchvalue = match.textContent || match.innerHTML
    
               if(searchvalue.toUpperCase().indexOf(searchbox) > -1){
                   product[i].style.display = "";
               }else{
                 product[i].style.display = "none";
               }
            }
        }
    }


// if(Cart === 'visible'){
//     toggleCart.style.display ='none';
//     emptyCart.innerHTML = 'Show'
// }else{
//     toggleCart.style.display = 'visible';
//     emptyCart.innerHTML = 'Hide'
    
    
    
//-------------------------------------------Product-page ------------------------------//
//Product dropdown menu
function display(){
    document.getElementById("productDropdown").classList.toggle("show");
}


window.onclick = function(e){
    if(!e.target.matches("#product-link")){
        var myDropdown = document.getElementById("productDropdown");
        // var i;
        // for(i = 0; i<dropdowns.length; i++) {
        //     var openDropdown = dropdowns[i];
            if(myDropdown.classList.contains("show")){
                myDropdown.classList.remove("show");
            }

        }
    };
    //end


//image slider-----------------------------//

(function myfunction(){
    const pictures = [
        "background-home",
        "small-bags",
        "heel-shoe",
        "cloth-5",
        "cloth-background",
        "shopping"
    ];
    console.log(pictures);
    const buttons = document.querySelectorAll(".btn");
    console.log(buttons);
    const imgDiv = document.querySelector(".img-slider");
    
    let counter = 0
    buttons.forEach(function(button) {
        button.addEventListener("click", function (e){
            if(button.classList.contains('btn-left')){
                counter--
                if(counter < 0){
                    counter = pictures.length - 1
                }
                imgDiv.style.backgroundImage = `url('/${pictures[counter]}.png')`
            }
            if(button.classList.contains('btn-right')){
                counter++
                if(counter > pictures.length - 1){
                    counter = 0
                }
                imgDiv.style.backgroundImage = `url('/${pictures[counter]}.png')`      
          }
        })
    })
    })();

(function(){
    const filterButton = document.querySelectorAll('.dropdown-item1 btn')
    const storeImages = document.querySelectorAll('.img-container')

    filterButton.forEach((button) => {
        button.addEventListener('click', (e) =>{
            e.preventDefault()
            const filter = e.target.dataset.filter

            storeImages.forEach((item)=>{
                if(filter === 'all'){
                    item.style.display ='block'
                }else{
                    if(item.classList.contains(filter)){
                        item.style.display = 'block'
                    }
                    else{
                        item.style.display ='none'
                    }
                  }
                })
            })
        })
    }
)();









// let c = [1, 6, 38, 100]
// for (let i = 1; i <= 100; i++) {
//     console.log(count[i])
// }

function addToCart(){
    var addToCart = document.getElementsByClassName("product-btn")
 for(var i =0; i < addToCart.length; i++){
     var button = addToCart[i]
     button.addEventListener('click', function(event){
         var buttonPressed = event.target
         buttonPressed.parentElement.add()
     })
 }
}

var deleteCart= document.getElementsByClassName("delete-btn")
console.log(deleteCart)
for (var i = 0; i <deleteCart.length; i++){
    var button = deleteCart[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()   
        updateCartTotal()

    })
}
function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-page')[0]
    console.log(cartItemContainer)
    var cartItems = document.getElementsByClassName('cart-info')

    for (var i = 0; i <deleteCart.length; i++){
    var cart = cartItems[i]
    var priceElement = cartItems.getElementsByClassName('product-price')[0]
    var quantity = cartItems.getElementsByClassName()
    
    
    }
}
