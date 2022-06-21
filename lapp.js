

// Create a constructor function that creates an object associated with each product, and has the following properties:

let allProducts = [];

// this array is going to hold
let productNames = ['bag','banana','bathroom','boots'];
// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
// an algorithm is a step list of instructions to be executed.
function Product(name,path){
    // Name of the product
    // File path of image
    // Times the image has been shown
    this.timeShown=0;
    this.name=name;
    this.path=path;
    trackClicks = function(event){
    console.log(event.target.value);
    }
    allProducts.push(this);
    }
function getRandomImage(){
    // gives me a whole number
    return Math.floor(Math.random()*productnames.length)
}


// get elements from HTML file
const imageContainer = document.getElementById('image-container');
const resultContainer = document.getElementById('results');

let img_one = document.querySelector('#image-container img:first-child')
let img_two = document.querySelector('#image-container img:first-child(2)')

function constructImages(){


    let bag = new Product('bag','./assets/bag.png');
    let banana = new Product('banana','./assets/banana.jpg');
    // let bag0 = new Product(productNames(0),'./assets' + productNames(0) + '.png' )


    //I want to make an image for every time in the production array
    // for(let i = 0;i<productNames.length;i++){
        // get both images and

         // add the src attribute to the images

    img_one.setAttribute('src',bag.path);
    img_two.setAttribute('src',banana.path);
    img_one.setAttribute('alt',bag.name);
    img_two.setAttribute('alt',banana.name);

    img_one.addEventListener('click',bag.trackClicks);
    
    }

    constructImages()

    
