const secreto = document.querySelector(".secret")
const vinhetas = document.querySelector(".vinheta")

secreto.addEventListener('mouseenter', () => {
    vinhetas.classList.add('DoRuim');
});
secreto.addEventListener('mouseleave', () => {
    vinhetas.classList.remove('DoRuim');
});