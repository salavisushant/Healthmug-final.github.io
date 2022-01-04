
let data = [
    {
      name: "Salicyclic Acid I.P.(20g)",
      price: "69",
      img: "https://static.oxinis.com/healthmug/image/product/127856-1-200.jpg",
      background: "background-image:url(https://static.oxinis.com/healthmug/css/image/product-image-placeholder.jpg);"
    },
    {
      name: "Calcirol Sachet 60K (1g)",
      price: "200",
      img: "https://static.oxinis.com/healthmug/image/product/79425-1-200.jpg",
    },
    {
      name: "Gulact Granules Elaichi(200g)",
      price: "326",
      img: "https://static.oxinis.com/healthmug/image/product/99350-1-200.jpg",
    },
    {
      name: "Hydrogen Peroxide Solution(100ml)",
      price: "31",
      img: "https://static.oxinis.com/healthmug/image/product/127819-1-200.jpg",
    },
    {
      name: "Cloping Dusting Powder(100mg)",
      price: "114",
      img: "https://static.oxinis.com/healthmug/image/product/84334-3-200.jpg",
    },
    {
      name: "Zincovet Tablet(15tb)",
      price: "89",
      img: "https://static.oxinis.com/healthmug/image/product/150304-1-200.jpg",
    },
    {
      name: "lactifier Granules(180mg)",
      price: "327",
      img: "https://static.oxinis.com/healthmug/image/product/94090-1-200.jpg",
    },
    {
      name: "Benzyle Benzonate Application I.P.(400ml)",
      price: "165",
      img: "https://static.oxinis.com/healthmug/image/product/127745-1-200.jpg",
    },
    {
      name: "Absorb Dusting Powder(100g)",
      price: "115",
      img: "https://static.oxinis.com/healthmug/image/product/92883-1-200.jpg",
    },
    {
      name: "Econorm Sachet(1Sachet)",
      price: "44",
      img: "https://static.oxinis.com/healthmug/image/product/86428-1-200.jpg",
    },
    {
      name: "Argipreg granules(6.5g)",
      price: "38",
      img: "https://static.oxinis.com/healthmug/image/product/91338-1-200.jpg",
    },
    {
      name: "Dynapar QPS Plus Topical Solution (30ml)",
      price: "242",
      img: "https://static.oxinis.com/healthmug/image/product/121868-1-200.jpg",
    },
    {
      name: "Macgesia Oil(50ml)",
      price: "135",
      img: "https://static.oxinis.com/healthmug/image/product/107695-1-200.jpg",
    },
    {
      name: "Lactonic Granules Elaichi(200g)",
      price: "283",
      img: "https://static.oxinis.com/healthmug/image/product/77066-2-200.jpg",
    },
    {
      name: "Ketostar Anti Dandruff Lotion (50ml)",
      price: "92",
      img: "https://static.oxinis.com/healthmug/image/product/91733-1-200.jpg",
    },
    {
      name: "Volini Spray",
      price: "162",
      img: "https://static.oxinis.com/healthmug/image/product/95692-1-200.jpg",
    },
  ];
    
    let parent = document.getElementById('medicine');
 
    function showProducts(p) {

      parent.innerHTML=null;
 
    data.forEach(function (product){
 
        let div = document.createElement("div");
 
        let img = document.createElement("img");
 
        img.src = product.img;
 
        let product_prize = document.createElement("p");
 
        product_prize.textContent ="₹" + product.price;
 
        let product_name = document.createElement("p")
 
        product_name.textContent = product.name;
 
        let addtocart_btn = document.createElement("button");
 
        addtocart_btn.innerText = "Add to cart";
        addtocart_btn.style.color="white"
 
        // let promo = document.createElement("input");
 
        // promo.innerText = "Add Promo code";
 
        addtocart_btn.onclick = function () {
            addtoCart(product);  
        };
 
        div.append(img, product_name, product_prize,addtocart_btn)
 
        parent.append(div);
 
    });
 
}
 
showProducts();
 
//check if cart exists in local storage
 
if(localStorage.getItem("cart")==null){
    localStorage.setItem("cart",JSON.stringify([]));
}
 
function addtoCart(p) {
    let products_cart = JSON.parse(localStorage.getItem('cart'));
 
    products_cart.push(p);
 
    localStorage.setItem("cart",JSON.stringify(products_cart));
 
}

function sortLH () {
  
  let arr = data.sort(function (a,b){
    return a.price - b.price

  });
  showProducts(arr);
}

function sortHL () {
  
  let arr = data.sort(function (a,b){
    return b.price - a.price

  });
  showProducts(arr);
}
 