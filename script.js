window.addEventListener('load', function (){
    let preloader = document.querySelector('.preloader');
    window.setTimeout(()=>{
        preloader.style.opacity = 0;
    }, 1000)
    window.setTimeout(()=>{
        preloader.style.display = 'none';
    }, 3000)

});
let products = [
    {
        name: 'iphone6',
        normalname: 'The Album',
        ekran: '2 карточки',
        procesor:' 1 плакат',
        memory:'2 книги',
    },
    {
        name: 'iphonexs',
        normalname: 'Square Up',
        ekran: '1 карточка',
        procesor:' 3 плаката',
        memory:'1 книга',
 
    },
    {
        name: 'iphone11promax',
        normalname: 'Llisa',
        ekran:'1 карточка' ,
        procesor:'4 плаката',
        memory:'немає',
    },
    {
        name: 'iphone12pro',
        normalname: 'Blackpink Arena Tour',
        ekran: 6.1,
        security: 'Face ID (Розпізнавання обличчя за допомогою камери TrueDepth)',
        buttery: 'Відтворення відео: до 17 годин; відтворення аудіо: до 65 годин',
        procesor:'  A14 Bionic',
        memory:'128Gb, 256Gb, 512Gb',
        display: 'Super Retina XDR (Дисплей OLED із повно­екранним дизайном)'
    },
]
let selecLeft = document.querySelector('.select-left');
let selecRight = document.querySelector('.select-right');

function selectTel(a, b, c, d, select){
    let nameTel = select.value;
    for (let item of products) {
        if(item.name == nameTel){
            document.querySelector(a).innerHTML = item.normalname;
            document.querySelector(b).innerHTML = item.ekran;
            document.querySelector(c).innerHTML = item.procesor;
            document.querySelector(d).innerHTML = item.memory;
        }
    }
}

selectTel('.n-1', '.s-1', '.p-1', '.m-1', selecLeft);
selectTel('.n-2', '.s-2', '.p-2', '.m-2', selecRight);


selecLeft.addEventListener('change', ()=>{
    selectTel('.n-1', '.s-1', '.p-1', '.m-1', selecLeft);
})
selecRight.addEventListener('change', ()=>{
    selectTel('.n-2', '.s-2', '.p-2', '.m-2', selecRight);
})


setInterval(() => {
    if (window.pageYOffset < window.innerHeight) {
      document.querySelector('.btn-top').style.display = 'none';
  }
  else{
      document.querySelector('.btn-top').style.display = 'flex';
  }
  }, 500);
  
  let paralaxImgArr = document.querySelectorAll('.img-paralax');
  new simpleParalax(paralaxImgArr, {
      orientation:'down',
      scale: 1.5,
  } );
  
  let scene = document.getElementById('scene');
  let parallaxInstance = new Parallax(scene);





