'use strict';

{

  const diamondSize = 40;
  let diamonds = document.querySelectorAll('.diamond');
  let judge = 0;
  let zindex = 1;
  let count;

  window.addEventListener('mousemove', (e) => {
    const stick = document.querySelector('.stick');
    stick.style.top = e.clientY - 2 + 'px';
    stick.style.left = e.clientX - 14 + 'px';
  });

  for (let i = 0; i < 3; i++) {
    const tableWrapper = document.querySelector('.table');
    const tr = document.createElement('tr');
    tableWrapper.appendChild(tr);
    for (let j = 0; j < 3; j++) {
      const td = document.createElement('td');
      tr.appendChild(td);
    }
  }

  createDiamond();

  function createDiamond() {
    const diamondWrapper = document.querySelector('.points-wrapper');
    while (diamondWrapper.firstChild) {
      diamondWrapper.removeChild(diamondWrapper.firstChild);
    }

    for (let i = 0; i < 9; i++) {
      const diamond = document.createElement('div');
      diamondWrapper.appendChild(diamond);
      diamond.classList.add('diamond');
      const r = Math.floor(Math.random() * (255 - 150) + 150);
      const g = Math.floor(Math.random() * (230 - 190) + 190);
      const b = Math.floor(Math.random() * (255 - 230) + 230);
      diamond.style.background = `rgb(${r} ${g} ${b}`;
    }

    judge = 0;
    zindex = 1;
    diamonds = document.querySelectorAll('.diamond');
    console.log(diamonds[0].style.background);
  }

  diamondPick();

  function diamondPick() {
    diamonds.forEach((diamond, index) => {
      diamond.addEventListener('click', () => {
        count = index;
    
        const sound = document.getElementById('sound');
        sound.currentTime = 0;
        sound.play();
        
    
        if (judge) {
          judge = 0;
          window.removeEventListener('mousemove', moveHandler); // 名前付き関数を渡す
        } else {
          judge = 1;
          zindex = zindex + 1;
          window.addEventListener('mousemove', moveHandler); // 名前付き関数を渡す
        }
    
        console.log(judge);
      });
    });
  }


  function moveHandler(e) {
    diamonds[count].style.left = e.pageX - diamondSize / 2 + "px";
    diamonds[count].style.top = e.pageY - diamondSize / 2 + "px";
    diamonds[count].style.position = "absolute";
    diamonds[count].style.zIndex = zindex;
  }

  const diamondContainer = document.querySelector('.points-wrapper');
  const compStyles = window.getComputedStyle(diamondContainer);
  const diamondContainerWidht = compStyles.width;
  const diamondContainerHeight = compStyles.height;
  diamondContainer.style.width = diamondContainerWidht;
  diamondContainer.style.height = diamondContainerHeight;


  const btn = document.querySelector('.btn-reset');
  
  btn.addEventListener('click', () => {
    const sound = document.getElementById('sound2');
    sound.currentTime = 0;
    sound.play();
    createDiamond();
    diamondPick();
  });

}

