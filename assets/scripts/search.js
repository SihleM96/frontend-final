function searchProducts() {
    //get data from form
    let form = document.getElementById("search_button");
    let searchTerm = form.getElementsByTagName("search")[0].value;
    //create regular expression 
    let searchRefEx = new RegExp(searchTerm, "i");
    //fetch data to search from
    fetch("http://127.0.0.1:5000/show_products/")
    .then((response) => response.json())
    .then((json) => {
        //filter data
        let result = json.filter((product) => {
            return product.product_name.search(searchRegEx) !== -1;

        });
        //check if there are found results
        if (result.length > 0){
            //render items matched
            document.getElementById("vase-wrapper").innerHTML = "";
            result.forEach((product) => createsaleItem(product));
        }else {
            //alert nothing found
            alert("nothing found");
        }
    })
    .catch((err) => {
        //log any error from backend
        console.log(err)
    })
}