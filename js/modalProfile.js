const modalOpen = document.querySelector('.header-profile');
// const modalClose = document.querySelector('.modal-close');

const modal = document.querySelector('.modal-authorization');

// const body = document.querySelector('body');

const logIn = document.querySelector('.log-in-active');
const logUp = document.querySelector('.log-up');
const modalLog = document.querySelector('.modal-log')

const logUpSwitch = document.querySelector('.log-up-switch');
const logInSwitch = document.querySelector('.log-in-switch');

const bodyElement = document.querySelector('.body');

let profileActive = false;

modalOpen.addEventListener('click', () => {
    modal.classList.remove('modal-authorization-off');

    bodyElement.classList.add('body-modal-active');

    profileActive = !profileActive;
})

logUpSwitch.addEventListener('click', () => {
        logIn.classList.replace('log-in-active', 'log-in');
        logUp.classList.replace('log-up', 'log-up-active');

})

logInSwitch.addEventListener('click', () => {
    logIn.classList.replace('log-in', 'log-in-active');
    logUp.classList.replace('log-up-active', 'log-up');
})

bodyElement.addEventListener('click', (e) => {
    if (profileActive && !logIn.contains(e.target) && !logUp.contains(e.target) && !modalOpen.contains(e.target)) {
        modal.classList.add('modal-authorization-off');
        bodyElement.classList.remove('body-modal-active');
        profileActive = !profileActive;
    }
})

