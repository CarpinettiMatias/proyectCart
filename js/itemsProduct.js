const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateFooter = document.getElementById('template-footer').content
const templateCart = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let cart = {};


document.addEventListener('DOMContentLoaded', e => {
    fetchData()
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
        showCart()
    }
});


document.addEventListener('DOMContentLoaded', e => { fetchData()
 });
items.addEventListener('click', e => { increaseDecrease(e) })



function MotorExample1(){
    MotorFadeInFadeOut(tagMasterBox);
    }

window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle('active', window.scrollY > 600)
})
function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
}

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
    });

};


const addCart = e => {
    //console.log(e.target.classList.contains('btn'))
     if(e.target.classList.contains('btn')){
         setCart(e.target.parentElement)
     }
     e.stopPropagation();
 }

 const setCart = objet => {

     const product = {
         id: objet.querySelector('.btn').dataset.id,
         productName: objet.querySelector('h2').textContent,
         price: objet.querySelector('.price').textContent,
         quantity: 1
     }

        if(cart.hasOwnProperty(product.id)){
         product.quantity = cart[product.id].quantity + 1
        }


        cart[product.id] = { ...product}
         showCart()
    }



  const showCart = () => {
     items.innerHTML = ''

      Object.values(cart).forEach( product => {
        templateCart.querySelector('th').textContent = product.id
        templateCart.querySelectorAll('td')[0].textContent = product.productName
        templateCart.querySelectorAll('td')[1].textContent = product.quantity
        templateCart.querySelector('span').textContent = product.price

        templateCart.querySelector('.btn-info').dataset.id = product.id
        templateCart.querySelector('.btn-danger').dataset.id = product.id

            const clone = templateCart.cloneNode(true)
            fragment.appendChild(clone)
        })
        items.appendChild(fragment)
        showFooter()
        localStorage.setItem('cart', JSON.stringify(cart))

}

const showFooter = () => {
    footer.innerHTML = ''
    if (Object.keys(cart).length === 0) {
        footer.innerHTML = `
        <th>Carrito vacío</th>
        `
        return
    }

    const nQuantity = Object.values(cart).reduce((acc, { quantity }) => acc + quantity, 0)
    const nPrice = Object.values(cart).reduce((acc, {quantity, price}) => acc + quantity * price ,0)
    // console.log(nPrecio)

    templateFooter.querySelectorAll('td')[0].textContent = nQuantity
    templateFooter.querySelector('span').textContent = nPrice

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const button = document.querySelector('#vaciar-carrito')
    button.addEventListener('click', () => {
        cart = {}
        showCart()
    })

}

const increaseDecrease = e => {
    if (e.target.classList.contains('btn-info')) {
        const product = cart[e.target.dataset.id]
        product.quantity++
        cart[e.target.dataset.id] = { ...product }
        showCart()
    }

    if (e.target.classList.contains('btn-danger')) {
        const product = cart[e.target.dataset.id]
        product.quantity--
        if (product.quantity === 0) {
            delete cart[e.target.dataset.id]
        } else {
            cart[e.target.dataset.id] = {...product}
        }
        showCart()
    }
    e.stopPropagation()
}
