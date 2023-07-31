'use strict';

{

  // 要素をクリックしたら、その要素を動かす準備をする
  // absoluteのtop、leftの位置を取得してマウスに追従させる
  // クリックしたら解放する
  // クリックしたらイベント開始、1をセット
  // クリックしたらイベント停止、0

  const diamondSize = 40;



  window.addEventListener('mousemove', (e) => {
    const stick = document.querySelector('.stick');
    console.log(e.clientX);
    console.log(e.clientY);
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

  for (let i = 0; i < 9; i++) {
    const diamond = document.createElement('div');
    const diamondWrapper = document.querySelector('.points-wrapper');
    const audio = document.createElement('audio');
    diamondWrapper.appendChild(diamond);
    diamond.appendChild(audio);
    diamond.classList.add('diamond');
    const r = Math.floor(Math.random() * (255 - 150) + 150);
    const g = Math.floor(Math.random() * (230 - 190) + 190);
    const b = Math.floor(Math.random() * (255 - 230) + 230);
    diamond.style.background = `rgb(${r} ${g} ${b}`;
    // diamond.style.background = `rgb(100 ${g} ${b}`;
    audio.src = 'sound/sound_01.mp3';
    audio.classList.add('item-sound');
    // console.log(Math.random() * (255 - 100) + 100); 
  }

  

  const diamonds = document.querySelectorAll('.diamond');

  let judge = 0;
  let zindex = 1;

  let count;

  diamonds.forEach((diamond, index) => {
    diamond.addEventListener('click', () => {
      count = index;
      // document.querySelectorAll('.item-sound').currentTime = 0;
      // document.querySelectorAll('.item-sound').play();

      const sounds = document.querySelectorAll('.item-sound');
      sounds[count].currentTime = 0;
      sounds[count].play();
  
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

  function moveHandler(e) {
    diamonds[count].style.left = e.clientX - diamondSize / 2 + "px";
    diamonds[count].style.top = e.clientY - diamondSize / 2 + "px";
    diamonds[count].style.position = "absolute";
    diamonds[count].style.zIndex = zindex;
  }


  const diamondContainer = document.querySelector('.points-wrapper');
  const compStyles = window.getComputedStyle(diamondContainer);
  const diamondContainerWidht = compStyles.width;
  const diamondContainerHeight = compStyles.height;
  console.log(diamondContainerWidht);
  console.log(diamondContainerHeight);
  diamondContainer.style.width = diamondContainerWidht;
  diamondContainer.style.height = diamondContainerHeight;


  // const item = document.getElementById('item-point');

  // let judge = 0;

  // item.addEventListener('click', () => {
  //   if (judge) {
  //     judge = 0;
  //     window.removeEventListener('mousemove', (e) => { getMove(e) });
  //   } else {
  //     judge = 1;
  //     window.addEventListener('mousemove', (e) => { getMove(e) });
  //   }

  //   console.log(judge);
  // });

  // function getMove(e) {
  //   item.style.left = e.clientX - 20 + "px";
  //   item.style.top = e.clientY - 20 + "px";
  //   console.log(e.clientX);
  //   console.log(e.clientY);
  // };

  // window.addEventListener('mousemove', (e) => {
  //   item.style.left = e.clientX - 20 + "px";
  //   item.style.top = e.clientY - 20 + "px";
  //   console.log(e.clientX);
  //   console.log(e.clientY);
  // });

  // item.addEventListener('click', () => {
  //   document.addEventListener('mousemove', (e) => {
  //     item.style.left = e.screenX;
  //     console.log(e.screenY);
  //   });
  // });


}