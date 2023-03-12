const JsAddProduct = function(){
const productId = '123'; // Replace with the actual product ID
const productUrl = `/api/products/${productId}`;

fetch(productUrl)
  .then(response => response.json())
  .then(data => {
    document.getElementById('name').value = data.name;
    document.getElementById('description').value = data.description;
    document.getElementById('price').value = data.price;
    document.getElementById('image').value = data.image;
  });

  const updateProduct = (event) => {
    event.preventDefault();
  
    const updatedProduct = {
      name: document.getElementById('Product Name').value,
      description: document.getElementById('Product Description').value,
      price: document.getElementById('Price').value,
      image: document.getElementById('Add Image URL').value,
    };
  
    const productId = '123'; // Replace with the actual product ID
    const productUrl = `/api/products/${productId}`;
  
    fetch(productUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(response => response.json())
      .then(data => {
        // Handle successful update
      });
  };
  
  const deleteProduct = () => {
    const productId = '123'; // Replace with the actual product ID
    const productUrl = `/api/products/${productId}`;
  
    fetch(productUrl, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.status === 204) {
          // Handle successful deletion
        }
      });
  };
  
  document.querySelector('form').addEventListener('submit', updateProduct);
  document.querySelector('#delete-button').addEventListener('click', deleteProduct);
}