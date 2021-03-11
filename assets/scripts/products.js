
function getProducts(){
    fetch('http://127.0.0.1:5000/show_products/')
    .then(res => res.json())
    .then(data => {
        console.table(data);
        // Write to vases wrapper
        let vaseWrapper = document.getElementById("vase-wrapper");
        let vases = data.filter(product => {
            return product.category == "vase"
        })
        vases.forEach(vase => {
            let item = createProductItem(vase);
            vaseWrapper.innerHTML += item;    
        });

        // Write to bowls wrapper
        let bowlWrapper = document.getElementById("bowl-wrapper");
        let bowls = data.filter(product => {
            return product.category == "bowl"
        })
        bowls.forEach(bowl => {
            let item = createProductItem(bowl);
            bowlWrapper.innerHTML += item;    
        });

        // Write to cups wrapper
        let cupWrapper = document.getElementById("cup-wrapper");
        let cups = data.filter(product => {
            return product.category == "cup"
        })
        cups.forEach(cup => {
            let item = createProductItem(cup);
            cupWrapper.innerHTML += item;    
        });

        console.log(vases);
    })
}
getProducts();

function createProductItem(product){
    let item = `
    <div>

      <img src=${ product.image } width="300px" height="220px"/>
      <h2>${product.product_name}</h2>
      <h4>${product.category}</h4>
      <p>R${ product.product_price }</p>
      <p><mark>add to cart</mark></p>
      <button>View Item</button>
      <button id="addItem">Add To Cart</button>
        </div>
      </div>

    </div>
    `;

    return item;
}

function getProductsTwo(){
    fetch('http://127.0.0.1:5000/show_products/')
    .then(res => res.json())
    .then(data => {
        console.table(data);
        // Write to bowls wrapper
        let bowlWrapper = document.getElementById("bowl-wrapper");
        let bowls = data.filter(product => {
            return product.category == "bowl"
        })
        vases.forEach(vase => {
            let item = createProductItem(vase);
            vaseWrapper.innerHTML += item;    
        });

        console.log(vases);
    })
}
getProducts();