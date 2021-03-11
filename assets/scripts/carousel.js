// Get HTML containers to add elements to
let slidesContainer = document.getElementById("carousel-container");
let bulletsContainer = document.getElementById("carousel-bullets");

// Content for slides
let slideContent = [
  
  {
    title: "About Us",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elvida <br> bendum, ac varius ante mollis. Vivamus accumsan magna elit, nec mollis lectus faucibus eu. Nulla facilisi. Aenean id est consequat, ultrices nisi quis, blandit tortor. Sed vel elit ipsum. <br> Vestibulum sodales, elit at fringilla bibendum, erat dui ornare velit, placerat porttitor massa lacus vitae purus. Morbi at aliquam ex. Mauris pretium sit amet magna ut gravida.",
  },
  {
    title: "Our Team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis mauris ut ligula bibendum, ac varius ante mollis. Vivamus accumsan magna elit, nec mollis lectus faucibus eu. Nulla facilisi. Aenean id est consequat, ultrices nisi quis, blandit tortor. Sed vel elit ipsum. Vestibulum sodales, elit at fringilla bibendum, erat dui ornare velit, placerat porttitor massa lacus vitae purus. Morbi at aliquam ex.",
  
  },
  {
    title: "Our Values",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas mauris at ultricies gravida. Nam lobortis mauris ut ligula bibendum, ac varius ante mollis. Vivamus accumsan magna elit, nec mollis lectus faucibus eu. Nulla facilisi. Aenean id est consequat, ultrices nisi quis, blandit tortor. Sed vel elit ipsum. Vestibulum sodales, elit at fringilla bibendum, erat dui ornare velit, placerat porttitor massa lacus vitae purus. Morbi at aliquam ex. Mauris pretium sit amet magna ut gravida.",
     
  },


];


let totalSlides = slideContent.length;

// Function to create bullets
function createBullet(index) {
    // Create button to be clicked on and add attributes
    let bulletButton = document.createElement("button");
    bulletButton.classList.add("carousel-bullet");
    bulletButton.setAttribute("onclick", `bulletSlider(${index})`);
  
    // Create bullet with active classes
    let bullet = document.createElement("i");
    bullet.classList.add("fas");
    bullet.classList.add("fa-circle");
    if (index == 0) bullet.classList.add("active");
  
    // Add bullet to bulletButton
    bulletButton.appendChild(bullet);
  
    // Add bulletButton to buttonContainer
    bulletsContainer.appendChild(bulletButton);
  }
  
  // Function to create slides
  function createSlide(slide, index) {
    // Create slide container
    let slideWrapper = document.createElement("div");
    slideWrapper.classList.add("carousel-slide");
    if (index == 0) slideWrapper.classList.add("active");
  
    // Create content for slide
  
    let slideHeading = document.createElement("h2");
    slideHeading.innerHTML = slide.title;
  
    let slideDescription = document.createElement("p");
    slideDescription.innerHTML = slide.description;
  
    // Build slide
    slideWrapper.appendChild(slideHeading);
    slideWrapper.appendChild(slideDescription);
  
    // Add slide to container
    slidesContainer.appendChild(slideWrapper);
  }
  
  // Initialize Carousel
  slideContent.forEach((slide, index) => {
    createBullet(index);
    createSlide(slide, index);
  });
  
  let bulletSlider = (index) => {
    let bullets = document.getElementsByClassName("fa-circle");
    for (let i = 0; i < totalSlides; i++) {
      if (index === i) {
        bullets[i].classList.add("active");
        slides[i].classList.add("active");
      } else {
        bullets[i].classList.remove("active");
        slides[i].classList.remove("active");
      }
    }
  };
  
  let changeSlide = (toSlide) => {
    let bullets = document.getElementsByClassName("fa-circle");
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < totalSlides; i++) {
      if (slides[i].classList.contains("active")) {
        let endOfArray = i + toSlide > totalSlides - 1 ? true : false;
        let beginningOfArray = i + toSlide < 0 ? true : false;
        slides[i].classList.remove("active");
        bullets[i].classList.remove("active");
        if (endOfArray) {
          slides[0].classList.add("active");
          bullets[0].classList.add("active");
        } else if (beginningOfArray) {
          bullets[totalSlides - 1].classList.add("active");
          slides[totalSlides - 1].classList.add("active");
        } else {
          bullets[i + toSlide].classList.add("active");
          slides[i + toSlide].classList.add("active");
        }
        break;
      }
    }
  };
  
