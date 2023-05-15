/* Data to Show*/
const data = [
  {
   quote: `“Be like a mountain.”`, 
   emoji: '🗻', 
   image: `url(assets/mountain.jpg)`
  }, 
  {
   quote: `“Brave the oceans.”`, 
   emoji: '🌊', 
   image: `url(assets/ocean.jpg)`
  },  
  {
   quote: `“Grow like a tree.”`, 
   emoji: '🌲' , 
   image: `url(assets/tree.jpg)`
  },
  {
    quote: `“We'll be ok now.”`, 
    emoji: '👌', 
    image: `url(assets/forest.jpg)`
  }
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector('blockquote');
// emoji
const emoji = document.querySelector('p');
// background
const bgImage = document.querySelector('body');

// Check-Check: change text
quote.innerHTML = "The results of your shots are feedback";
// Check-Check: change emoji text
emoji.innerHTML = "👏";
// Check-Check: background image
bgImage.style.backgroundImage= 'url(/assets/golf ball next to hole.jpg)';

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");

// listen for clicks on next button
nextButton.addEventListener("click", () => {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  
});
  
// listen for clicks on previous button
prevButton.addEventListener("click", () => {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener('click', () => {
  
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * data.length );
  
  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  
});

// listen for keypress next
document.addEventListener('keyup', (event) => {
  
  // check-check: What key was pressed?
  // console.log(event);

  // Next Right Arrow  
  if ( event.key === "ArrowRight" ) {
   
   // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
    
  }
  
  // Prev Left Arrow
  if ( event.key === "ArrowLeft" ) {
  
   // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  }
  
  // Random Spacebar
  if ( event.key === " ") {
    
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor ( Math.random() * data.length );

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
  
  }
  
});