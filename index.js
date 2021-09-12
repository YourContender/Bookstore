console.log('Hello world!');
const database = [
    {
        title: 'JavaScript',
        src: '#',
        author: 'Example1',
        price: 'number 1'
    },
    {
        title: 'React',
        src: '#',
        author: 'Example2',
        price: 'number 2'
    },
    {
        title: 'Redux',
        src: '#',
        author: 'Example3',
        price: 'number 3'
    }
];

database.forEach(item => {
    console.log(item.title);
})


// Slider 
const slideList = document.querySelectorAll('.current__slide');
const prev = document.querySelector('.slider__btn-prev');
const next = document.querySelector('.slider__btn-next');
const text = document.querySelector('.num__slide span');

let currentNumberSlide = 1;

function correctNumDisplay(length, num) {
    if (length < 10) {
        text.textContent = `0${num}`
    }
}

function showSlide(list, length) {
    if (currentNumberSlide > list.length) {
        currentNumberSlide = 1
    }

    if (currentNumberSlide < 1) {
        currentNumberSlide = list.length
    }
    
    list.forEach(slide => {
        slide.style.display = 'none';
    });
    
    list[currentNumberSlide - 1].style.display = 'block';
    
    if (length < 10) {
        text.textContent = `0${currentNumberSlide}`
    }
}

correctNumDisplay(slideList.length, currentNumberSlide);
showSlide(slideList, slideList.length);


prev.addEventListener('click', () => {
    currentNumberSlide--;
    showSlide(slideList, slideList.length);
});

next.addEventListener('click', () => {
    currentNumberSlide++;
    showSlide(slideList, slideList.length);
})





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


