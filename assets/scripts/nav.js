function toggleNav() {
    // Get links from navigation
    const links = document.getElementById("nav-links");
  
    //   Check styles on links
    links.style.width == "0px"
      ? (links.style.width = "50vw")
      : (links.style.width = "0px");
  }
  