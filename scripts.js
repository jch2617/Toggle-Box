function toggleColor() {
    //changes color of background every time toggle button is clicked
    document.body.classList.toggle("changeme");
}


let i = 1; /* declares an iterable number for the
div boxes that will appear*/ 
function addBox() {
    let addme = document.createElement("div");
    // creates div element
    addme.classList.add("box");
    // adds class of "box to that element"
    addme.title = "I'm a box!";
    // adds title to new div
    addme.textContent = i++;
    /* iterates every time button is clicked
    and gives the div a new number */
    addme.style.display = "inline-flex";
    /* adds new divs in rows rather than one 
    big column down middle of page */
    addme.style.width = "100px";
    // sets width of box
    addme.style.height = "100px";
    // sets height of box
    addme.style.border = "5px solid black";
    // sets border of box
    document.body.appendChild(addme);
    // appends box to page
    addme.onclick = function() {
        addme.remove();
        // removes specified div on user click
    }
 }
// adds function to "Add Box" button in html
 let newbutton = document.getElementById("add-box");
 newbutton.addEventListener('click', addBox);