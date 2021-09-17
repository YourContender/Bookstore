console.log('Hello world!');

// database
const database = [
    {
        // flag: false,
        title: 'JavaScript',
        src: './image/javascript.png',
        author: 'Sergey Sayenko',
        price: '1000$',
        description: `
            <span>- Desc1</span><br />
            <span>- Desc2</span><br />
            <span>- Desc3</span><br />
            <span>- Desc4</span><br />
        `
    },
    {
        // flag: false,
        title: 'React',
        src: './image/react.png',
        author: 'Sergey Sayenko',
        price: '2000$'
    },
    {
        // flag: false,
        title: 'Redux',
        src: './image/redux.jpg',
        author: 'Sergey Sayenko',
        price: '3500$'
    }, 
    {
        // flag: false,
        title: 'TypeScript',
        src: './image/typescript.png',
        author: 'Sergey Sayenko',
        price: '5000$'
    }
];

// create slider 
const parent = document.querySelector('.slides-list')

database.forEach(item => {
    console.log(item.title);
})

function displayElements() {
    database.map(item => {  
        const element = document.createElement('div');
        element.classList.add('current__slide');
        
        element.innerHTML = `
            <h4 class='slide__text'>${item.title}</h4>
            <img class='slide_img' src=${item.src} alt='logo'><br />
            <span>Author: ${item.author}</span>
            <h5 class='slide__text' >${item.price}</h5>
        `;

        parent.append(element);
    })
}

displayElements();

//Slider

const list = document.querySelectorAll('.current__slide');
const prev = document.querySelector('.slider__btn-prev');
const next = document.querySelector('.slider__btn-next');
const text = document.querySelector('.num__slide span');

let currentNumberSlide = 1;

function correctNumDisplay(length, num) {
    if (length < 10) {
        text.textContent = `0${num}`
    } else {
        text.textContent = num
    }
};
correctNumDisplay(list.length, currentNumberSlide);

function showSlide(elemList) {
    if (currentNumberSlide > elemList.length) {
        currentNumberSlide = 1;
    } 
    if (currentNumberSlide < 1) {
        currentNumberSlide = elemList.length;
    }

    elemList.forEach(elem => {
        elem.style.display = 'none';
    });

    elemList[currentNumberSlide - 1].style.display = 'block'

}
showSlide(list);

prev.addEventListener('click', () => {
    currentNumberSlide--;
    showSlide(list);
    correctNumDisplay(list.length, currentNumberSlide);
});

next.addEventListener('click', () => {
    currentNumberSlide++;
    showSlide(list);
    correctNumDisplay(list.length, currentNumberSlide);
});




// Modal
const btn__header = document.querySelector('.btn__header-add-link');

const modal = document.querySelector('.modal__window');
modal.style.display = 'none';

const products = document.querySelector('.modal__products');
const close = document.querySelector('.close__modal');

// create function add products to basket
const basket = document.querySelector('.btn__header-remove-link');
const basket_window = document.querySelector('.modal__basket-window');
basket_window.style.display = 'none';
const test =  document.querySelector('.test')

btn__header.addEventListener('click', () => {
    createBuyList();
    btn__header.setAttribute('disabled', true);
});


close.addEventListener('click', () => {
    modal.style.display = 'none';
    btn__header.removeAttribute('disabled');

    document.querySelectorAll('.buy__book').forEach(elem => {
        elem.remove();
    })
    
})

function createBuyList() {

    if (document.querySelectorAll('.buy__book').length === 0) {
        modal.style.display = 'block';

        database.map(elem => {
            const buy = document.createElement('div');
            buy.classList.add('buy__book');
            buy.innerHTML = `
                <div class='shop__book'>
                    <div>
                        <img class='modal__shop-src' src=${elem.src} alt='logo'><br />
                    </div>
                    <div class='shop__content'>
                        <h4 class='modal__shop-title'>${elem.title}</h4>
                        <span>Author: ${elem.author}</span>
                        <h5 class='modal__shop-price' >${elem.price}</h5>
                        <button class='shop__buy-btn'>buy now</button>
                    </div>
                    <div class='shop__description'>
                        ${elem.description}
                    </div>
                </div>
            `;
            products.append(buy);
        });
    } 

    // click => buy products => add to basket
    const buy_btn = document.querySelectorAll('.shop__content');
    console.log(buy_btn);

    buy_btn.forEach(elem => {
        elem.addEventListener('click', () => {
            console.log(elem.parentNode);
            basket_window.innerHTML += elem.parentNode;

            basket_window.append(elem.parentNode)
        })
    })
}

basket.addEventListener('click', () => {
    modal.style.display = 'none';
    basket_window.style.display = 'block';
})