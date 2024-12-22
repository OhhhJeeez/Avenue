const catalogSwitch = document.querySelector('.catalog-button'); // кнопка закрытия/открытия модального окна
const modalCatalog = document.querySelector('.modal-catalog');
const modalCategories = document.querySelector('.modal-categories');

// картинка у кнопки
const ctgImg = document.querySelector('#ctg-img');
const ctgImgMenu = 'static/images/header/ctg-menu.png'
const ctgImgCross = 'static/images/header/ctg-cross.png'

let catalogActive = false;

catalogSwitch.addEventListener('click', () => {
    modalCatalog.classList.toggle('modal-catalog-off');
    bodyElement.classList.toggle('body-modal-active');
    catalogActive = !catalogActive;
    if (ctgImg.src.includes(ctgImgMenu)) {
        ctgImg.src = ctgImgCross;
    } else {
        ctgImg.src = ctgImgMenu;
    }
})

bodyElement.addEventListener('click', (e) => {
    if (catalogActive && !modalCategories.contains(e.target) && !catalogSwitch.contains(e.target) && !modalOpen.contains(e.target) && !logIn.contains(e.target) && !logUp.contains(e.target)) {
        modalCatalog.classList.add('modal-catalog-off');
        bodyElement.classList.remove('body-modal-active');
        catalogActive = !catalogActive;
        ctgImg.src = ctgImgMenu;

    } else if (modalOpen.contains(e.target)) {
        modalCatalog.classList.add('modal-catalog-off');
        bodyElement.classList.add('body-modal-active');
        catalogActive = !catalogActive;
        ctgImg.src = ctgImgMenu;
    }
})