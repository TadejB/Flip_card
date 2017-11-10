/**
 * Created by tadej on 11/9/2017.
 */
const cards = document.querySelectorAll('.card');
const back = document.querySelector('.back');
const front = document.querySelector('.front');



const manipulateCard = (card) => {
        card.addEventListener('click', () => {
            if (card.getAttribute('opened') === '0') {
                card.setAttribute('opened', '1');
                card.style.transform = 'rotate3d(0, 1, 0, 180deg)';
                card.style.transition = 'transform 1s ease-in-out';
                front.style.visibility = 'hidden';
                back.style.visibility = 'visible';
                back.style.transition = 'visibility 2s';
            } else {
                card.setAttribute('opened', '0');
                card.style.transform = 'rotate3d(0, 1, 0, 0deg)';
                card.style.transition = 'transform 1s ease-in-out';
                front.style.visibility = 'visible';
                back.style.visibility = 'hidden';
                front.style.transition = 'visibility 2s ease-in-out';
                back.style.transition = 'visibility 2s ease-in-out';
            }
        })
};

cards.forEach(manipulateCard);


