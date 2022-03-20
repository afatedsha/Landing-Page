
//  INPUT RANGE

const slider = document.getElementById("range");
const output = document.getElementById("indicator");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

window.onload = function() {
  pointcheck();
}

window.onresize = function() {
  pointcheck();
}

//  LITTLE CIRCLES IN ORDERING

function pointcheck() {
  let foindpointdiv = document.querySelectorAll(".ordering__item");
  foindpointdiv.forEach(element => {
    element.remove();
  });
  let firstitemimage = document.querySelectorAll(".stage__image")[0];
  let seconditemimgae = document.querySelectorAll(".stage__image")[1];
  let betweensize = seconditemimgae.getBoundingClientRect().left - firstitemimage.getBoundingClientRect().right;
  let coundot = Math.trunc(betweensize/25);
  let foundall = document.querySelectorAll(".stage");
  console.log(foundall.length);

  for (var j = 0; j < foundall.length;j++) {
    if (0 != j%2){
      foundall[j].classList.add("stage-even");
    }
    if (j < foundall.length-1) {
      for (var i = 0; i < coundot; i++) {
        let innerHTML = '<div class="ordering__item"></div>';
        foundall[j].innerHTML += innerHTML;
      }
    }
  }
}

//  MODAL

const btnOpen = document.getElementById('system');
      modal = document.getElementById('wrapper-modal');
      system = document.getElementById('system');
      mobileMenuBtn = document.getElementById('mobileMenu-btn');
      mobileMenu = document.getElementById('mobileMenu');


btnOpen.addEventListener('click',function() {
  modal.classList.add('active');
  system.classList.add('input-system');
});

mobileMenuBtn.addEventListener('click',function() {
  mobileMenu.classList.add('active-mobile');
});

function closeModal(){
  modal.classList.remove('active');
  system.classList.remove('input-system');
  mobileMenu.classList.remove('active-mobile');
}

const overlay = document.querySelectorAll('.overlay');
overlay.forEach(element => {
  element.addEventListener('click',closeModal);
});

let findOption = document.querySelectorAll(".modal__option"); 
findOption.forEach(element => { 
  element.addEventListener('click', () => { 
    closeModal(); 
    btnOpen.value = element.textContent; 
  }); 
});
