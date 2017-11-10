/**
 * Created by tadej on 11/9/2017.
 */
const cards = document.querySelectorAll('.card');
const body = document.querySelector('body');
const back = document.querySelector('.back');
const front = document.querySelector('.front');



const manipulateCard = (card) => {
        card.addEventListener('click', () => {
            if (card.getAttribute('opened') === '0') {
                card.setAttribute('opened', '1');
                card.style.transform = 'rotate3d(0, 1, 0, 180deg)';
                card.style.transition = 'transform 1s ease-in-out';
            } else {
                card.setAttribute('opened', '0');
                card.style.transform = 'rotate3d(0, 1, 0, 0deg)';
                card.style.transition = 'transform 1s ease-in-out';
            }
        })
};

cards.forEach(manipulateCard);


