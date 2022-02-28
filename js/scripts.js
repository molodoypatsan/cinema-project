const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
const sessionDateItem = document.querySelectorAll(".session-date-item");
const select = document.querySelectorAll(".select");

let cost = 500;
let totalPrice = 0;
schemeSvg.addEventListener("click", (event) => {
    if (!event.target.classList.contains('booked') && !event.target.classList.contains('light')) {
        event.target.classList.toggle("active");
        let totalSeats = schemeSvg.querySelectorAll('.active').length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
});

menuButton.addEventListener("click", () => {
    menu.classList.toggle("is-open");
    document.body.classList.toggle('overflow');
});

sessionDateItem.forEach(element => {
    element.addEventListener("click", () => {
        sessionDateItem.forEach(item => {
            item.classList.remove('active');
        });
        
        element.classList.add('active');
    });
});

select.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle('active');
    });
});

const selectInput = document.querySelectorAll('.select-input');
const selectItem = document.querySelectorAll('.select-item');

for (let selectItems of selectItem) {
        selectItems.addEventListener('click', () => {
            selectInput.forEach(element => {
                let selectValue = selectItems.getAttribute('data-value');
                element.value = selectValue;
            });
        });
}