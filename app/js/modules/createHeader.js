import createElement  from '../helper/createElement.js';

const createHeader = (parent) => {
    const container = createElement('div', {
        className: 'container header__container',
    });
    const headerInner = createElement('div', {
        className: 'header__inner',
    });
    const headerLink = createElement('a', {
        className: 'header__logo',
        href: '#',
    });
    const logo = createElement('img', {
        className: 'header__logo-img',
        alt: 'logo',
        src: 'images/logo.png',
    });
    const headerSearch = createElement('div', {
        className: 'header__search search',
    });
    const headerSearchWrapper = createElement('div', {
        className: 'header__search-wrapper',
    });
    const headerSearchInput = createElement('input', {
        className: 'header__search-wrapper_input',
        type: 'text',
        placeholder: 'Найти тест',
    });
    const headerSearchBtnBox = createElement('div', {
        className: 'header__search-btn-box',
    });
    const headerSearchBtn = createElement('button', {
        className: 'header__search-btn',
        innerHTML: ` <svg xmlns="http://www.w3.org/2000/svg" width="34" height="32" viewBox="0 0 34 32" fill="none">
                    <path d="M17.6946 6.82191L22.6616 8.78495V0.758763L26.7047 14.0058L22.6616 12.3212V21.3916L17.6946 6.82191ZM23.8442 0.0904947L23.9403 0.417668L25.0638 4.10011C28.0425 5.17908 30.1565 7.90088 30.1565 11.0821C30.1565 14.7228 27.6212 17.7578 23.9921 18.4261V22.1573C29.75 21.4264 34 16.7137 34 11.0891C34 5.48537 29.58 0.842297 23.8442 0.0904947ZM0.827492 31.2207C1.65533 32.0003 2.5349 32.0769 2.94142 31.9516C3.34056 31.8263 4.94449 30.5663 7.40582 28.8609C9.86715 27.1484 9.88932 26.3757 10.5841 24.9139C11.2789 23.459 12.8311 21.9484 14.8342 21.2663L15.5511 20.243C17.3768 21.4194 19.4685 22.1155 21.5603 22.2408L21.4051 21.7814L20.2299 18.3356C16.7929 17.5072 14.2502 14.5766 14.2502 11.0821C14.2502 7.2883 17.0885 3.97481 21.346 3.62675V0C15.1963 0.355018 10.3476 5.18604 10.3476 11.0891C10.3476 13.428 11.1754 15.5929 12.4911 17.3819L11.4119 18.0502C10.6876 19.9367 9.08366 21.3916 7.53886 22.0459C5.99406 22.7003 5.15884 22.7211 3.34056 25.0392C1.52228 27.3503 0.184442 28.8609 0.051397 29.2368C-0.0816478 29.6127 -0.000342615 30.441 0.827492 31.2207ZM1.55924 29.9746C1.55924 29.6683 1.82533 29.4177 2.15055 29.4177C2.47577 29.4177 2.74186 29.6683 2.74186 29.9746C2.74186 30.2809 2.47577 30.5315 2.15055 30.5315C1.82533 30.5315 1.55924 30.2809 1.55924 29.9746Z" fill="#5FC93A"/>
                </svg>`,
    });
    const headerBtn = createElement('button', {
        className: 'header__btn btn',
        textContent: 'Начать заново',
    });

    const mount = () => {
        parent.append(container);
    }

    const unMount = () => {
        container.remove()
    }

    parent.append(container);
    container.append(headerInner);
    headerInner.append(headerLink, headerSearch, headerBtn);
    headerLink.append(logo);
    headerSearch.append(headerSearchWrapper, headerSearchBtnBox);
    headerSearchWrapper.append(headerSearchInput);
    headerSearchBtnBox.append(headerSearchBtn);

    return {headerLink, headerBtn, headerSearch, mount,  unMount};
};

export default createHeader
