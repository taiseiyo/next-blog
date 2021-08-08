const ham = document.getElementById('ham');
const menu_wrapper = document.getElementById('menu_wrapper');

ham.addEventListener('click', function() {
  ham.classList.toggle('ham_clicked');
  menu_wrapper.classList.toggle('menu_clicked');
});

console.log("helli");
