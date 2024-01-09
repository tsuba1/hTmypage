'use strict';
// {
//   const next = document.getElementById('next');
//   const caruse = document.querySelector('caruse');
//   next.addEventListener('click', () => {
//     caruse.style.transform = 'translateX(-200px)';
//   })
// }
{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const caruse = document.querySelector('.caruse');
  const widths = caruse.children;
  let jump=0;

  function buttonUp(){
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if(jump === 0){
      prev.classList.add('hidden');
    }
    if(jump === widths.length -1){
      next.classList.add('hidden');
    }
  }
  buttonUp();
  next.addEventListener('click', () => {
    jump++;
    buttonUp();
    const sWidhs=widths[0].getBoundingClientRect().width;
    caruse.style.transform = `translateX(${-1*sWidhs*jump}px)`
  });

  prev.addEventListener('click', () => {
    jump--;
    buttonUp();
    const sWidhs=widths[0].getBoundingClientRect().width;
    caruse.style.transform = `translateX(${-1*sWidhs*jump}px)`
  });
}

// タブメニ
{
  const menuItems = document.querySelectorAll('.stu li a');
  const contents = document.querySelectorAll('.dy');
// menuItems.forEach(item => {
//   item.addEventListener('click', e => {
  menuItems.forEach(clickedItem => {clickedItem.addEventListener('click', e=>{
    e.preventDefault();
    menuItems.forEach(item =>{item.classList.remove('goodat');});
    clickedItem.classList.add('goodat');
    // item.classList.add('goodat');
    contents.forEach(content =>{content.classList.remove('goodat');});
    document.getElementById(clickedItem.dataset.id).classList.add('goodat');
  });
});
}


// Qui
{
  function render(quiz) {
    const main = document.querySelector('#qui');
    const qqqui = document.createElement('section.qqqui');
    const h4 = document.createElement('h4');
    h4.textContent = quiz[0];

    const ulq = document.createElement('ul');
    const li0 = document.createElement('li');
    li0.textContent=quiz[1];
    li0.addEventListener('click',()=>{
      if(quiz[4] === 0){
        li0.classList.add('fa');
      }else{ 
        li0.classList.add('tr');}
    })
    const li1 = document.createElement('li');
    li1.textContent=quiz[2];
    li1.addEventListener('click',()=>{
      if(quiz[4] === 1){
        li1.classList.add('fa');
      }else{ 
        li1.classList.add('tr');}
    })
    const li2 = document.createElement('li');
    li2.textContent=quiz[3];
    li2.addEventListener('click',()=>{
      if(quiz[4] === 2){
        li2.classList.add('fa');
      }else{ 
        li2.classList.add('tr');}
    })

    ulq.appendChild(li0);
    ulq.appendChild(li1);
    ulq.appendChild(li2);

    qqqui.appendChild(h4);
    qqqui.appendChild(ulq);
    main.appendChild(qqqui);
  }
  // const quiz = ['五大栄養素に含まれないのは？', ' ビタミン', ' タンパク質', ' グルコース', 2];
  const quizs = [
  ['五大栄養素に含まれないのは？', ' ビタミン', ' タンパク質', ' グルコース', 2],
  ['五大栄養素に含まれないのは？', ' ビタミン', ' タンパク質', ' グルコース', 2],
  ['五大栄養素に含まれないのは？', ' ビタミン', ' タンパク質', ' グルコース', 2],
  ]
  render(quizs[0]);
  render(quizs[1]);
  render(quizs[2]);
}
