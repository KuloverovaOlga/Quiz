import  createElement from '../helper/createElement.js';

const createHero = (parent) => {
    const heroSection = createElement('section', {
        className: 'hero',
    });
    const container = createElement('div', {
        className: 'container hero__container',
    });
    const heroInner = createElement('div', {
        className: 'hero__inner',
    });
    const heroImgBox = createElement('div', {
        className: 'hero__img-box',
    });
    const heroImg = createElement('img', {
        className: 'hero__img',
        alt: 'lamp',
        src: 'images/hero.png',
    });
    const heroContentBox = createElement('div', {
        className: 'hero__content-box',
    });
    const heroContentTitle = createElement('h1', {
        className: 'hero__title title',
        textContent: 'Онлайн тесты на разные темы',
    });
    const heroContentDesk = createElement('p', {
        className: 'hero__desk desk',
        textContent: ` Разнообразные тематические тесты будут интересны не только взрослым людям, но и детям подросткового и младшего
        возраста`,
    });
    const heroContentButton = createElement('button', {
        className: 'hero__btn btn',
        textContent: `Играть`,
    });

    const mount = () => {
        parent.append(heroSection);
    };
    const unMount = () => {
        heroSection.remove();
    };

    parent.append(heroSection);
    heroSection.append(container);
    container.append(heroInner);
    heroInner.append(heroImgBox, heroContentBox);
    heroImgBox.append(heroImg);
    heroContentBox.append(heroContentTitle, heroContentDesk,heroContentButton);

    return {heroContentButton, mount, unMount };
};

export default createHero
