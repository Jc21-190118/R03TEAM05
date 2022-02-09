(() => {
  //HTMLのid値を使って以下のDOM要素を取得
  const downbutton = document.getElementById('down11');
  const upbutton = document.getElementById('up11');
  const text = document.getElementById('textbox11');
  const reset = document.getElementById('reset');

  //ボタンが押されたらカウント減
  downbutton.addEventListener('click', (event) => {
  //0以下にはならないようにする
  if(text.value >= 1) {
    text.value--;
  }
  });

  //ボタンが押されたらカウント増
  upbutton.addEventListener('click', (event) => {
    text.value++;
  })

  //ボタンが押されたら0に戻る
  reset.addEventListener('click', (event) => {
    text.value = 0;
  })

})();