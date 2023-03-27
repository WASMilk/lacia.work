let count = 5;
let countdown = document.getElementById("countdown");
setInterval(() => {
    countdown.textContent = `リダイレクトまで ${count}...`;
    if (count == 0)
        location.href = "https://page.m-masatodayo.tk/"
    count--;
}, 1000);

function showCursor(e) {
  const cursor = document.querySelector('.cursor');
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';

  const rainbowText = document.querySelector('.rainbow-text');
  const letters = rainbowText.querySelectorAll('span');
  letters.forEach(letter => {
    const randomHue = Math.floor(Math.random() * 360);
    letter.style.color = `hsl(${randomHue}, 100%, 50%)`;
  });
}

function hideCursor(e) {
  const rainbowText = document.querySelector('.rainbow-text');
  const letters = rainbowText.querySelectorAll('span');
  letters.forEach(letter => {
    letter.style.color = 'black';
  });
}
