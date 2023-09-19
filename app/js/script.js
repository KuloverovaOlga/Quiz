import createHeader from './modules/createHeader';
import createHero from './modules/createHero';
import createQuiz from './modules/createQuiz';
import createCatalog from './modules/createCatalog';
import { fetchQuizes, fetchQuize } from './services/services';

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    const headerObj = createHeader(header);
    const heroObj = createHero(main);
    const catalogObj = createCatalog(main);
    const quizObj = createQuiz(main);
    
    const allSectionUnMount = () => {
        [headerObj, catalogObj, quizObj].forEach((obj) => obj.unMount());
    };
    
    const returnIndex = async () => {
        allSectionUnMount();
        let quizes = await fetchQuizes();
        let countShowCard = 4;
     
   
        const searchFilters = (goods, value) => {
            return goods.filter((el) => {
                return el.title.toLowerCase().includes(value.toLowerCase());
            });
        };
    
        const search = () => {
            const searchInput = document.querySelector('.header__search-wrapper_input');
            const button = document.querySelector('.catalog__btn');
            searchInput.addEventListener('input', (e) => {
                let value = e.target.value;
                fetchQuizes().then((data) => {
                    catalogObj.mount(searchFilters(data, value), countShowCard);
                    if (searchFilters(data, value).length < countShowCard) {
                        button.style.display = 'none';
                    } else {
                        button.style.display = 'block';
                    }
                });
            });
        };
    
        const loadMore = () => {
    
            const button = document.querySelector('.catalog__btn');
    
            if (quizes.length <= 4) {
                button.style.display = 'none';
            } else {
                button.style.display = 'block';
            }
            button.addEventListener('click', () => {
                if (countShowCard >= quizes.length - countShowCard) {
                    button.style.display = 'none';
                } else {
                    button.style.display = 'block';
                }
                catalogObj.mount(quizes, countShowCard + 4);
                countShowCard += 4;
            });
        };

        catalogObj.catalogList.addEventListener('click', quizRender);

        headerObj.mount();
        catalogObj.mount(quizes, countShowCard);
        heroObj.unMount();
        quizObj.unMount();
        headerObj.headerSearch.style.display = 'flex';
        headerObj.headerBtn.style.display = 'none';
        search();
        loadMore();
        return;
    };
    
    const quizRender = async (e) => {
        let target = e.target;
    
        let categoryItem = target.closest('.catalog__item');
    
        if (categoryItem) {
            allSectionUnMount();
            let id = target.dataset.id
            let dataCards = await fetchQuize(id);
            headerObj.mount();
            headerObj.headerSearch.style.display = 'none';
            headerObj.headerBtn.style.display = 'block';
            quizObj.mount(dataCards);
        }
    }

    heroObj.heroContentButton.addEventListener('click', returnIndex);
    
    headerObj.headerLink.addEventListener('click', () => {
        allSectionUnMount();
        heroObj.mount();
        headerObj.headerSearch.style.display = 'flex';
        location.reload();
    });
    
    headerObj.headerBtn.addEventListener('click', () => {       
        location.reload();
    });

    catalogObj.catalogList.addEventListener('click', quizRender);

    allSectionUnMount();
})


