import createElement from '../helper/createElement.js';
import  declensionNum  from '../helper/declensionNum';

const createCatalog = (parent) => {
    const catalogSection = createElement('section', {
        className: 'catalog',
    });
    const container = createElement('div', {
        className: 'container',
    });
    const catalogInner = createElement('div', {
        className: 'catalog__inner',
    });
    const catalogTitle = createElement('h2', {
        className: 'catalog__title title',
        textContent: 'Каталог квестов',
    });
    const catalogList = createElement('ul', {
        className: 'catalog__list',
    });
    const createCatalogCards = (data) => {
        const catalogItem = createElement('li', {
            className: 'catalog__item',
        });
        catalogItem.dataset.id = data.id;

        const catalogItemLink = createElement('a', {
            className: 'catalog__item-link',
            href: '#',
        });

        const catalogTitle = createElement('h3', {
            className: 'catalog__item-title catalog__item--hover',
            textContent: data.title,
        });
        const catalogImgBox = createElement('div', {
            className: 'catalog__img-box',
            innerHTML:`<img src="images/lamp.png" alt="" class="catalog__img img1" />
                       <img src="images/lampon.png" alt="" class="catalog__img img2" />`,
        });


        const catalogText = createElement('p', {
            className: 'catalog__item-text catalog__item--hover',
            textContent: `${data.questions.length} ${declensionNum(data.questions.length, ['вопрос','вопроса','вопросов'])}`,
        });

        catalogItem.append(catalogItemLink);
        catalogItemLink.append(catalogTitle,catalogImgBox,catalogText);

        return catalogItem;
    };
    const catalogBtnMore = createElement('button', {
        className: 'catalog__btn btn',
        textContent: 'Показать больше',
    });

    const mount = (data, count) => {
        catalogList.textContent = '';
      
        const quiz = data.map(createCatalogCards)
        catalogList.append(...quiz.slice(0, count));

        parent.append(catalogSection);

    }

    const unMount = () => {
        catalogSection.remove()
    }

    parent.append(catalogSection);
    catalogSection.append(container);
    container.append(catalogInner);
    catalogInner.append(catalogTitle, catalogList, catalogBtnMore);

    return {catalogList, mount, unMount};
};

export default createCatalog;
