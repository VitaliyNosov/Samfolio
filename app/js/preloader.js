// function loadData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 3500);
//   })
// }

// loadData()
//   .then(() => {
//     let preloaderEl = document.getElementById('preloader');
//     preloaderEl.classList.add('hidden');
//     preloaderEl.classList.remove('visible');
//   });


function loadData() {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 3500);
  });
}

loadData().then(function () {
  var preloaderEl = document.getElementById('preloader');
  preloaderEl.classList.add('hidden');
  preloaderEl.classList.remove('visible');
});


// Первый код это современная запись а ниже приведен пример старого синтаксиса что бы 
// код работал везде в том числе и в старых IE используется более старая версия. 
// Для записи второго варианта я использовал "babel" синтаксис es2015.
// Так же для работы "promise" используется полифил.


