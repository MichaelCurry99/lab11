'use strict;'

// Create a constructor function that creates an object associated with each product, and has the following properties:

let allProducts = [];
let maxClicks = 25;
// this array is going to hold
let productNames = ['bag','banana','bathroom','boots'];
let totalClicks = 0;


// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.
// an algorithm is a step list of instructions to be executed.
// this is a constructor it makes objects
function Product(name,path){
    // Name of the product
    // File path of image
    // Times the image has been shown
    this.timeShown = 0;
    this.timesClicked = 0;
    this.name=name;
    this.path=path;
    this.trackClicks
    allProducts.push(this);
    }
    
    // Product.trackClicks = function(){
    //     console.log('you clicked image' + this.name);
    //     }

function getRandomImage(){
    // gives me a whole number
    return Math.floor(Math.random()*productnames.length)
}


// get elements from HTML file
const imageContainer = document.getElementById('image-container');
const resultContainer = document.getElementById('results');
let img_one = document.querySelector('#image-container img:first-child')
let img_two = document.querySelector('#image-container img:nth-child(2)')
let resultsButton = document.getElementById('results-button')

// instance variable -> Objects

function constructImages(){


    let bag = new Product('bag','./assets/bag.jpg');
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


    
   
    // trackClicks(banana)
    img_one.addEventListener('click',function(){
    trackClicks(bag)
    timeShown(bag)

    });
    img_two.addEventListener('click',function(){
        trackClicks(banana);
        timesShown(banana)
    });
    

    }
    
    
    // function trackClicks (e){
    //     console.log('you clicked on '+ productNames.length);
    // }

    constructImages()

    // make a function to randomly display images
    function displayRandomImage(){

       // this function needs to call the randomizer algorithm
    }
    
    
// make a function to keep track of the times a certain object was clicked
function trackClicks(product){

// need to pass an object to this function

    console.log(product)

// IF the object is clicked ->
// check the timeClicked property against the max clicks
if(product.timesClicked < 25){
// THEN increase the value of timesClicked by one per click
product.timesClicked++
console.log(product.timesClicked)
}
else{
    alert('too many clicks')
}
}

// make a function that keeps track of how many times an image was shown
function timeShown(product){
// we need to pass an object to this function
if(product.name === img_one['alt']){
    console.log(product.name + ' is on the page')
}
else{
    console.log('there is no image here')
}
//IF 
}

function displayResults(productsArray){
    
for(let i=0;i<productsArray.length;i++){
    product = productsArray[i]
    // console.log(product)
    // let resultMessage =
    console.log('this product was clicked'+product.time)
    console.log('this product was shown' + product.timeShown + 'times')
    console.log('this product is called' + product.name )             // ${}
    console.log('you can find this product at : ' + product.path + '!!!')
}
}


function showResults () {
    if(totalClicks === maxClicks){
        displayResults(allProducts)
    }
}

displayResults(allProducts)

constructImages()