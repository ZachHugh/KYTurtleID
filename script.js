let slideIndex = 0;

function carouselHero(){
    let i;

    let slides = document.getElementsByClassName("turtleSlide");
   
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"; //Hides unused slides temporarily.
    }

    slideIndex++
    if (slideIndex > slides.length){
        slideIndex=1;
    }

    slides[slideIndex-1].style.display = "block";
    setTimeout(carouselHero, 3000);//Changes slide every 3 seconds.
}

function filter(){
    let filterColor = document.getElementById("color").value;
    let filterShell = document.getElementById("shell").value;
    let filterFeatures = document.getElementById("features").value;
    let gallery = document.getElementsByClassName("turtle");

    //Loop through gallery
    for(i = 0; i < gallery.length; i++)
    {
        //Checks each element for the following traits.
        if(gallery[i].classList.contains(filterColor) && 
        gallery[i].classList.contains(filterShell) &&
        gallery[i].classList.contains(filterFeatures)){
            gallery[i].style.display = "block" 
        }
        else{
            gallery[i].style.display = "none";
        }
    }
    setTimeout(filter, 1);//Constantly checks to make update.
}

function doubleCheck(){
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let county = document.getElementById("county").value;
    let confirmation = false;

    if(confirm("Hey, " + name + " is this information correct?\n\n" +
                    "Name: " + name + "\nDate: " + date + "\nEmail: " +
                    email + "\nCounty: " + county)){
                        confirmation = true;
                    }
}