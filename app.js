 const container = document.querySelector('.container');

// Display Products Function
function renderProducts(list) {
  container.innerHTML = '';

  list.forEach(item => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    cardDiv.innerHTML = `
      <img class="img2" src="${item.image}" alt="item">
      <h4>Name: ${item.name}</h4>
      <h4>Year: ${item.size}</h4>
      <h4>Rs: ${item.price} <span class="Off">Rs: ${item.off}</span></h4>
      <button class='btn2'>Order Now: ${item.order}</button>
    `;

    container.appendChild(cardDiv);
  });
}
renderProducts(products);
// End here

// Search Product By Name in Array
function search(){
    const container = document.querySelector('.container') 
   container.innerHTML = ''
    const inputBox = document.querySelector('#inputBox')
    
   const values = inputBox.value.trim().replace(/\s+/g, "").toLowerCase();
  const engine = products.filter(p => p.name.toLocaleLowerCase().includes(values))
 if(!values){
  renderProducts(products)
  return
 }
 if(engine.length === 0){
  container.innerHTML = `
  <h2>Please Boys/Girls for Suits...</h2>
  `
  return
 }
renderProducts(engine)

}

// Prevent Form input from refreshing
function handle(e){
e.preventDefault()
search()
inputBox.value = ""
}
// Home page 
function page(){
  return renderProducts(products)
}