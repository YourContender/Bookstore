console.log('Hello world!');
const database = [
    {
        title: 'JavaScript',
        src: './image/javascript.png',
        author: 'Sergey Sayenko',
        price: '1000$'
    },
    {
        title: 'React',
        src: './image/react.png',
        author: 'Sergey Sayenko',
        price: '2000$'
    },
    {
        title: 'Redux',
        src: './image/redux.jpg',
        author: 'Sergey Sayenko',
        price: '3500$'
    }, 
    {
        title: 'TypeScript',
        src: './image/typescript.png',
        author: 'Sergey Sayenko',
        price: '5000$'
    }
];
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
// const btn__header = document.querySelector('.btn__header');
// const btn__remove = document.querySelector('.btn__header-remove');

// btn__header.addEventListener('click', () => {
//     console.log('button work!');
//     render(books_list)
// })

// btn__remove.addEventListener('click', () => {
//     console.log('click delete content');
//     const parent = document.querySelector('.books__list');
//     const element = document.querySelectorAll('.current__item');
//     console.log('delete: ', element);
//     element.forEach(elem => {
//         elem.remove();
//     })
// })

// const books_list = [
//     {
//         logo: './image/javascript.png',
//         title: 'JavaScript',
//         author: 'Sergey Sayenko',
//         price: 5000
//     },
//     {
//         logo: './image/react.png',
//         title: 'React',
//         author: 'Sergey Sayenko',
//         price: 5000
//     },
//     {
//         logo: './image/redux.jpg',
//         title: 'Redux',
//         author: 'Sergey Sayenko',
//         price: 5000
//     },
// ];

// function render(obj) {
//     const parent = document.querySelector('.books__list');
    
//     obj.map(item => {
//         const element = document.createElement('div');
//         element.classList.add('current__item');
        
//         element.innerHTML = `
//             <img src=${item.logo} width='150px'>
//             <h3 class="elem__title">${item.title}</h3>
//             <div class="elem__author">${item.author}</div>
//             <div class="elem__price">${item.price}</div>
//         `;
//         parent.append(element);
//     })
// }


