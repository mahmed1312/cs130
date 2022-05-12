/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                style="background-image:url('${image}')"
                data-index=${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
};

initScreen();

let currentIndex = 0;

// create event handler:
const showImage = (ev) => {

    const elem = ev.currentTarget;
    currentIndex = parseInt(elem.dataset.index);
    console.log(elem.style.backgroundImage);

    console.log("nicecock:", currentIndex);

    console.log("nicecock:", images[currentIndex]);

  // div.style.backgroundImage = images[currentIndex].style.backgroundImage;

   var url = images[currentIndex];
   var div = document.getElementById("a");
   div.style.backgroundImage = `url(${url})`;

    //console.log(document.getElementById('a').style.backgroundImage);
         
    // update .featured_image
};

const showNext = (ev) => {
    currentIndex += 1;
    console.log("currentIndex:", currentIndex);
    // update .featured_image
    if(currentIndex===8){
        currentIndex=0;
    }
    var url = images[currentIndex];
    var div = document.getElementById("a");
    div.style.backgroundImage = `url(${url})`;

};

const showPrev = (ev) => {
    currentIndex -= 1;
    console.log("currentIndex:", currentIndex);
    if(currentIndex===-1){
        currentIndex=7;
    }
    var url = images[currentIndex];
    var div = document.getElementById("a");
    div.style.backgroundImage = `url(${url})`;

    // update .featured_image
};


// attach event handler to all of the image tags 
// (after initScreen() has been invoked).
const imageElements = document.querySelectorAll('.image');
for (const elem of imageElements) {
    elem.onclick = showImage;
}

document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;
document.querySelector('.featured_image').onclick = showNext;