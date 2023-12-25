const products = [
    { 
        id : 1,
        name : "Iced Matcha Green Tea Latte",
        img  : "https://i.pinimg.com/564x/0c/e0/7f/0ce07f3642177b347d8d8b7cd855856e.jpg",
        price: 2.99,
        category: "matcha",
        description: "Iced Matcha Green Tea Latte"
    },
    { 
        id : 2,
        name : "Caramel Frappuccinos",
        img  : "https://i.pinimg.com/564x/f2/36/5c/f2365c6cd1bf3317ad07e83f1e9e314f.jpg",
        price: 3.99,
        category: "frapp",
        description: "Hotchata Hair is the New Pumpkin Spice"
    },
    { 
        id : 3,
        name : "Strawberries frappuccino",
        img  : "https://i.pinimg.com/564x/77/ff/e8/77ffe89dad1f563a9b510325b03d5f7c.jpg",
        price: 3.99,
        category: "frapp",
        description: "country-style of strawberries and cream"
    },
    { 
        id : 4,
        name : "Mango Frappuccinos",
        img  : "https://i.pinimg.com/564x/b5/f3/3e/b5f33e9f469a41bd9eaad0d87bcd8e55.jpg",
        price: 3.99,
        category: "frapp",
        description: "Mango Passion Fruit Frappuccino®"
    },
    { 
        id : 5,
        name : "Starbucks Ground Coffee",
        img  : "https://i.pinimg.com/564x/fb/3c/ff/fb3cffafd900cfab00e8545464be529a.jpg",
        price: 3.99,
        category: "coffee",
        description: "Medium Roasted coffee 100% Arabica"
    },
    { 
        id : 5,
        name : "Starbucks Ground Coffee 200 G",
        img  : "https://i.pinimg.com/564x/db/6f/41/db6f411b14651670af129e103d5b0434.jpg",
        price: 3.99,
        category: "coffee",
        description: "Starbucks Blend Ground Coffee 200G "
    },
    { 
        id : 6,
        name : "Via Instant Colombia Coffee",
        img  : "https://i.pinimg.com/564x/e9/eb/50/e9eb503a3216c0e95a5995e674675b81.jpg",
        price: 3.99,
        category: "coffee",
        description: "Starbucks Via Instant Coffee Colombia Brew"
    },
    { 
        id : 7,
        name : "Matcha Green Tea Frappucino®",
        img  : "https://i.pinimg.com/564x/e9/42/fb/e942fb292f4397aac14f2b2d34b56338.jpg",
        price: 3.99,
        category: "matcha",
        description: "Starbucks Green Tea Frappuccino [10/10]."
    },
    { 
        id : 7,
        name : "Egg Grilled Cheese Sandwich",
        img  : "https://i.pinimg.com/564x/13/4b/9d/134b9da478633b953c5e2f1d372c2beb.jpg",
        price: 3.99,
        category: "food",
        description: "Bacon egg grilled cheese sandwich"
    },
    { 
        id : 8,
        name : "Starbucks Feta Wrapped Recipe",
        img  : "https://i.pinimg.com/564x/d0/a3/a7/d0a3a7e2bf6fdbe0a2b2eaae1ebb7cd2.jpg",
        price: 3.99,
        category: "food",
        description: "Starbucks Spinach Feta Egg White Wraps"
    },
    { 
        id : 9,
        name : "Everything Bagel",
        img  : "https://i.pinimg.com/564x/b0/f1/c8/b0f1c8aa4723cb2830c62ee65002364b.jpg ",
        price: 2.99,
        category: "food",
        description: "Everything Bagel with lox, cream cheese"
    },
    { 
        id : 10,
        name : "Ham & Swiss on Baguette",
        img  : "https://i.pinimg.com/564x/79/f9/f7/79f9f7d31282c859ca408509efa9e39d.jpg",
        price: 2.99,
        category: "food",
        description: "Ham and Swiss cheese toasted baguette."
    },
    { 
        id : 11,
        name : "Bottled Coffee",
        img  : "https://i.pinimg.com/564x/f6/aa/62/f6aa62d4b69c044226cd13fbabbde057.jpg",
        price: 2.99,
        category: "can",
        description: "Frappuccino Vanilla Chilled Coffee "
    },
     { 
        id : 12,
        name : "Cold Coffee",
        img  : "https://i.pinimg.com/564x/6c/b9/6f/6cb96fe6b53394cb880ce5c05b9ea393.jpg",
        price: 2.99,
        category: "coffee",
        description: "The fantastic taste of iced coffee"
    },
    { 
        id : 13,
        name : "Chocolate Cookie",
        img  : "https://i.pinimg.com/564x/bf/3c/bb/bf3cbbb31f19d16d21da3ffce75567c7.jpg",
        price: 2.99,
        category: "can",
        description: "Chocolate Crumble Creme Frappucino"
    },
    { 
        id : 14,
        name : "Frappucino Mocha",
        img  : "https://i.pinimg.com/564x/0e/80/12/0e80124cfcaefa185c03a5bd561e0d92.jpg",
        price: 2.99,
        category: "can",
        description: "Starbucks Frappucino Mocha Marrisons"
    },
    { 
        id : 15,
        name : "Frappucino Vanilla",
        img  : "https://i.pinimg.com/564x/dc/53/58/dc535819ead8d253e529df6d4753210d.jpg",
        price: 2.99,
        category: "can",
        description: "Starbucks Frappucino Vanilla iced coffee"
    },
    { 
        id : 16,
        name : "Vanilla Latte",
        img  : "https://i.pinimg.com/564x/16/8a/f7/168af753e31c2ac499d91e7ab37f1c88.jpg",
        price: 2.99,
        category: "can",
        description: "Starbucks Vanilla Iced Expresso"
    },
    { 
        id : 17,
        name : "Mocha Almondmilk",
        img  : "https://i.pinimg.com/564x/2f/48/f5/2f48f544a8980b436a5d9430b7246726.jpg",
        price: 2.99,
        category: "can",
        description: "Starbucks Iced Mocha Almondmilk"
    },
    { 
        id : 18,
        name : "Double Premium",
        img  : "https://i.pinimg.com/564x/39/d5/e4/39d5e45a1d3c9d1ec452f95b7ce5aeeb.jpg",
        price: 2.99,
        category: "can",
        description: "Be energized With B vitamins & ginseng"
    },
    { 
        id : 19,
        name : "Avocado Spread",
        img  : "https://i.pinimg.com/564x/b0/11/f9/b011f923cc7dea8ffd3fcd1b198cd2da.jpg",
        price: 2.99,
        category: "food",
        description: "Add a fried egg to round out your meal"
    },
    { 
        id : 20,
        name : "Tomato & Mozzarella on Focaccia",
        img  : "https://i.pinimg.com/564x/53/d8/d3/53d8d3673d6e9fd2534c3e1dc646045c.jpg",
        price: 2.99,
        category: "food",
        description: "Tomato & Mozzarella on Focaccia Bread"
    },
    { 
        id : 21,
        name : "L'assitte Kebab",
        img  : "https://i.pinimg.com/564x/17/82/fb/1782fb7be3eca04ccee9f222f58efe66.jpg",
        price: 2.99,
        category: "food",
        description: "Turkish Salad Babeque"
    },
    { 
        id : 22,
        name : "Arabica Frappuccinos",
        img  : "https://i.pinimg.com/564x/f1/ac/44/f1ac4481e6bf540577179aaab27a1aab.jpg",
        price: 3.99,
        category: "frapp",
        description: "Frapped Coffe Drink with Arabica Taste"
    },
    { 
        id : 23,
        name : "Purp Frappuccinos",
        img  : "https://i.pinimg.com/564x/01/f5/ac/01f5acdf6c589102cd430eb751dcf42b.jpg",
        price: 3.99,
        category: "frapp",
        description: "Frapped Coffe Drink with Arabica Taste"
    },
    { 
        id : 24,
        name : "Cookie Frappuccinos",
        img  : "https://i.pinimg.com/564x/cd/0e/5f/cd0e5f7837c4e98117541f25ddb6f083.jpg",
        price: 3.99,
        category: "frapp",
        description: "Frapped Coffe Drink with Cream and Cookie"
    },
    { 
        id : 25,
        name : "Volcan Frappuccinos",
        img  : "https://i.pinimg.com/564x/13/bb/26/13bb261d1cf387729bccc71ec1f5f27b.jpg",
        price: 3.99,
        category: "frapp",
        description: "Frapped Strong Chocolate and Cream Coffe"
    },
    { 
        id : 26,
        name : "Double Chocolate Green Tea",
        img  : "https://i.pinimg.com/564x/59/fa/e1/59fae1b2d31e1cf0acf391c31bea1468.jpg",
        price: 2.99,
        category: "matcha",
        description: "Starbucks Green Tea with chocolate sauce"
    },
    { 
        id : 27,
        name : "Nestle Matcha Latte",
        img  : "https://i.pinimg.com/564x/71/20/25/712025097cb3d63a05db86b87f72474b.jpg",
        price: 2.99,
        category: "matcha",
        description: "Nestle Japan Starbucks Premium Mix Matcha Latte"
    },
    { 
        id : 28,
        name : "Kyoto Matcha Latte",
        img  : "https://i.pinimg.com/564x/3f/54/9b/3f549bc47bb57fe8bfb6908bbdff7b5d.jpg",
        price: 2.99,
        category: "matcha",
        description: "Starbuck Kyoto Matcha Latte"
    },
    { 
        id : 29,
        name : "Matcha Latte Powder",
        img  : "https://int.japanesetaste.com/cdn/shop/files/P-1-SBK-MATLAT-4-Starbucks_20Matcha_20Latte_20Powder_20Premium_20Mixes_204_20Sticks_grande.jpg?v=1698813944",
        price: 2.99,
        category: "matcha",
        description: "Starbuck Matcha Latte Powder"
    },
    { 
        id : 30,
        name : "Matcha Yogurt",
        img  : "https://i.pinimg.com/564x/62/74/f4/6274f4714d4974c1966808fdcf50360a.jpg",
        price: 2.99,
        category: "matcha",
        description: "Starbuck Matcha Yogurt Product"
    },
    { 
        id : 31,
        name : "Milk Coffee",
        img  : "https://i.pinimg.com/564x/6c/fb/53/6cfb53e7be6131771a03efadd32fc25e.jpg",
        price: 2.99,
        category: "coffee",
        description: "The fantastic taste of iced coffee and milk"
    },
    { 
        id : 32,
        name : "Iced Latte",
        img  : "https://i.pinimg.com/564x/53/f0/12/53f0124445c9987bf76ab317106f2cbf.jpg",
        price: 2.99,
        category: "coffee",
        description: "The fantastic taste of iced coffee and milk"
    },
    { 
        id : 33,
        name : "Iced Latte",
        img  : "https://i.pinimg.com/564x/57/2e/45/572e45c9a7a996faf699eb2f559478cb.jpg",
        price: 2.99,
        category: "coffee",
        description: "The fantastic taste of iced coffee and milk"
    },
    { 
        id : 34,
        name : "Caramel Macchiato",
        img  : "https://i.pinimg.com/564x/e7/62/ee/e762eeb59be145ec4e41fa62a9598b27.jpg",
        price: 2.99,
        category: "coffee",
        description: "Starbuck Caramel Macchiato Iced Coffee"
    },
];
const allproducts = document.querySelector('.product-list');
function output(products){
    let html = '';
    products.forEach(product => {
        html +=`
            <div class="col-lg-3 col-12 box">
            <div class="card mb-3">
            <img class="card-img-top rounded-3" src="${product.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text price">$${product.price}</p>
                <a href="" class="add">Add to cart</a>
            </div>
            </div>
        </div>
        `;
    });
    return html;
}
function displaytohtml(products){
    allproducts.innerHTML = output(products);
}


// scroll to change background on navbar
const navbar = document.querySelector('.navbar');
const content = document.querySelector("#TeangOs")
window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        navbar.classList.add('fixed-top');
        content.style.transition = '0.5s';
        content.style.marginTop = '-550px';
    }
    else{
        navbar.classList.remove('fixed-top');
    } 
});
// search item
const search = document.querySelector('#search-item');
search.addEventListener('keyup', function(e){
   // if(e.keyCode === 13){
    let value = e.target.value.toLowerCase(); //input coffee
        if(value == " "){
            displaytohtml(products);
        }
        else{
        let check = products.filter(p => p.name.toLowerCase().includes(value));
        //let check2 = products.filter(p => p.category.toLowerCase().includes(value));
        displaytohtml(check);
        }
   // }
});

displaytohtml(products);

const Category = document.querySelector('#category');
const allmenu = document.querySelector("#all");
allmenu.addEventListener('click', function(){
    displaytohtml(products);
    Category.innerHTML = "All category";
});
const Food = document.querySelector("#food");
Food.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category === 'food'));
    Category.innerHTML = "Food";
});
const Frappe = document.querySelector("#frappe");
Frappe.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category === 'frapp'));
    Category.innerHTML = "Frapped";
});
const Coffee = document.querySelector("#coffee");
Coffee.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category === 'coffee'));
    Category.innerHTML = "Coffee";
});
const Can = document.querySelector("#can");
Can.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category === 'can'));
    Category.innerHTML = "Cans";
});
const Matcha = document.querySelector("#matcha");
Matcha.addEventListener('click', function(){
    displaytohtml(products.filter(p => p.category === 'matcha'));
    Category.innerHTML = "Matcha";
});
const productScroll = document.querySelector("#product-list");
productScroll.addEventListener("scroll", () =>{
    window.scrollY = window.innerHeight;
});

//dark theme
const Darkmode = document.querySelector('#moon');

let darkMode = false;
function toggleDarkMode() {
    darkMode = !darkMode; // Toggle the mode on each click

    if (darkMode) {
        // Apply Dark Mode styles
        document.body.classList.add('dark-mode');
        document.querySelector('#moon').setAttribute('class', 'fa-solid fa-sun');
    } else {
        // Remove Dark Mode styles
        document.body.classList.remove('dark-mode');
        document.querySelector('#moon').setAttribute('class', 'fa-solid fa-moon');
    }
}

Darkmode.addEventListener('click', toggleDarkMode);


let toggle = false;
function toggleHide(){
    toggle = !toggle;

    if (toggle) {
        document.body.classList.add('hide-nav');
    } else {
        document.body.classList.remove('hide-nav');
    }
}
document.querySelector('.navbar-toggler').addEventListener('click', toggleHide);