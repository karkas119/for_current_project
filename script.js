$(document).ready(function(){
  $('.red-effect').hover(function(){
    $(this).css('opacity', '5');
  }, function(){
    $(this).css('opacity', '0');
  });
})

var hover = document.querySelectorAll('.hover-item-img');
var links = document.querySelectorAll('.hover-item');
var numb = document.querySelectorAll('.hover-number');
console.log(numb);


for (let i = 0; i < links.length; i++){
  links[i].addEventListener('click', function (e) {
    e.preventDefault();
    let timer = setInterval(() => {  hover[i].setAttribute('src', './img/menu-line-long.png'); numb[i].textContent = i + 1 + ' '; }, 250);
    setTimeout (() => {clearInterval(timer)}, 300);
    numb[i].style.fontFamily = 'Jura';
    numb[i].style.fontSize = '20px';
    for(let i = 0; i < hover.length; i++){
      if (e.target !== links[i]){
        hover[i].setAttribute('src', './img/menu-line.png');
        numb[i].textContent = '';
      }
    }
    e.stopPropagation();
  })
}
