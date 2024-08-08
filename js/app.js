const products = [
    {
        id:1,
        name:'Ice Cream 1',
        price:10.99,
        description:'This is Ice cream 1',
        image:'https://via.placeholder.com/300'
    },
    {
        id:2,
        name:'Ice Cream 2',
        price:10.99,
        description:'This is Ice cream 2',
        image:'https://via.placeholder.com/300'
    },
    {
        id:3,
        name:'Ice Cream 3',
        price:10.99,
        description:'This is Ice cream 3',
        image:'https://via.placeholder.com/300'
    },
    {
        id:4,
        name:'Ice Cream 4',
        price:10.99,
        description:'This is Ice cream 4',
        image:'https://via.placeholder.com/300'
    },
    {
        id:5,
        name:'Ice Cream 5',
        price:10.99,
        description:'This is Ice cream 5',
        image:'https://via.placeholder.com/300'
    },
    {
        id:6,
        name:'Ice Cream 6',
        price:10.99,
        description:'This is Ice cream 6',
        image:'https://via.placeholder.com/300'
    }
];

const productElement=document.getElementById('products');

function createAndAppendElment(
    tagname,
    attributes={},
    content ="",
    parentSelector="body"
){

    const element=document.createElement(tagname);

    for (const [key,value] of Object.entries(attributes)){
        element.setAttribute(key, value);
    }

    element.innerHTML =content;

    const parentElement = document.querySelector(parentSelector) || document.body;
    parentElement.appendChild(element);
}

products.forEach(product=>{
const divColumelement =document.createElement("div");
divColumelement.classList.add("col-md-4");
divColumelement.classList.add("mb-4");

productElement.appendChild(divColumelement);

createAndAppendElment(
    'div',
    {class: 'card-h-100', id:'product-${product.id}'},
    "",
    '#product > .col-md-4:nth-child(${product.id})'
    );

createAndAppendElment(
    'img',
    {class: 'card-img-top', src: product.image, alt:product.alt},
    "",
    '#product-${product.id}'
    );

createAndAppendElment(
    'div',
    {class:card-body},
    "",
    '#product-${product.id}'
    );

createAndAppendElment(
    'h5',
    {class: 'card-title'},
    product.name,
    '#product-${product.id}>.card-body'
    );

createAndAppendElment(
    'p',
    {class: 'card-text'},
    product.description,
    '#product-${product.id}>.card-body'
    );

createAndAppendElment(
    'p',
    {class: 'card-text'},
    'Price: product.price',
    '#product-${product.id}>.card-body'
    );

createAndAppendElment(
    "div",
    {class:"d-flex buttonGroup-${product.id} justify-content-end gap-3" },
    '',
    '#product${product.id}>.card-body'
);

createAndAppendElment(
    "a",
    {class:"btn, btn-primary", href:"#"},
    "View details",
    '.buttonGroup-${product.id}'
);

createAndAppendElment(
    "a",
    {class:"btn, btn-info", href:"#"},
    "Add to cart",
    '.buttonGroup-${product.id}'
);

});
