const items = document.getElementById('items');
const card = document.getElementById('cartCard')
let cart = {};

document.addEventListener('DOMContentLoaded',() => {
    fetchData()
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'))
        showCard()
    }
});

//
document.addEventListener('click', e => {
    addCart(e)

})

const fetchData = async () => {
        try {
            const res = await fetch('../data/data.json')
            const data = await res.json()
            showCard(data)
        } catch (error) {
            console.log(error);
        };
};


const showCard = data => {
    data.forEach(product =>{
        const containerMax = document.querySelector('.container__max');

        const containerProduct = document.createElement('div');
        containerProduct.classList.add('container__products');
        containerMax.appendChild(containerProduct);

        const container = document.createElement('div');
        container.classList.add('container');
        containerProduct.appendChild(container);

        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        const imgBx = document.createElement('div');
        imgBx.classList.add('imgBx');
        card.appendChild(imgBx);

        const img = document.createElement('img');
        img.src = `${product.img}`;
        imgBx.appendChild(img);

        const contentBx = document.createElement('div');
        contentBx.classList.add('contentBx');
        card.appendChild(contentBx);

        const name = document.createElement('h2');
        name.textContent = `${product.productName}`;
        contentBx.appendChild(name);

        const price = document.createElement('h2');
        price.classList.add('price')
        price.textContent = `$${product.price}`;
        contentBx.appendChild(price);

        const color = document.createElement('div');
        color.classList.add('color');
        contentBx.appendChild(color);

        const nameColor = document.createElement('h3');
        nameColor.textContent = `Color: `;
        color.appendChild(nameColor);

        const span1 = document.createElement('span');
        color.appendChild(span1);

        const span2 = document.createElement('span');
        color.appendChild(span2);

        const span3 = document.createElement('span');
        color.appendChild(span3);

        const span4 = document.createElement('span');
        color.appendChild(span4);

        const button = document.createElement('button');
        button.classList.add('btn');
        button.dataset.id = product.id;
        button.textContent = `Agregar al carrito`;
        contentBx.appendChild(button);

        document.body.appendChild(containerMax);



        console.log(containerProduct);
    });
    
};


const addCart = e => {
   //console.log(e.target.classList.contains('btn'))
    if(e.target.classList.contains('btn')){
        setCart(e.target.parentElement)
    }
    e.stopPropagation();
}
//manda info

const setCart = objet => {

    const product = {
        id: objet.querySelector('.btn').dataset.id,
        productName: objet.querySelector('h2').textContent,
        price: objet.querySelector('.price').textContent,
    }
    cart[product.id] = { ...product}
     showCart()

}

 const showCart = () => {
     Object.values(cart).forEach( product => {
         const containerCart = document.querySelector('.container_cart');

         const cart = document.createElement('div');
         cart.classList.add('cart');
         containerCart.appendChild(cart);

         const products = document.createElement('div');
         products.classList.add('products');
         cart.appendChild(products);

         const producT =  document.createElement('div');
         producT.classList.add('producT');
         products.appendChild(producT);

         const img = document.createElement('img');
         img.src = `${product.img}`;
         producT.appendChild(img);

         const productInfo = document.createElement('div');
         productInfo.classList.add('product-info');
         producT.appendChild(productInfo);

         const productName = document.createElement('h3');
         productName.classList.add('product-name');
         productName.textContent = `${product.productName}`;
         productInfo.appendChild(productName);

         const productPrice = document.createElement('h4');
         productPrice.classList.add('product-price');
         productPrice.textContent = `$ ${product.price}`;
         productInfo.appendChild(productPrice);

         const cartTotal = document.createElement('div');
         cartTotal.classList.add('cart-total');
         cart.appendChild(cartTotal);

         const parrafo = document.createElement('p');
         cartTotal.appendChild(parrafo);

         const span = document.createElement('span');
         span.textContent = `Precio total`;
         parrafo.appendChild(span);

         const span1 = document.createElement('span');
         span1.textContent = `Total $ ....`;
         parrafo.appendChild(span1);

         Document.body.appendChild(containerCart);

         
     })

     localStorage.setItem('cart', JSON.stringify(cart));
 }