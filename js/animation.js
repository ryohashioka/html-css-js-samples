const scrollElement = document.getElementById('scroll_content');
const boxElements = scrollElement.querySelectorAll('.scroll-box');

const scrollIn = () => {
  for (const boxElement of boxElements) {
    if (scrollElement.scrollTop + scrollElement.clientHeight > boxElement.offsetTop) {
      boxElement.classList.add('fade-in');
    }
  }
}

scrollElement.addEventListener('scroll', scrollIn);
scrollIn();
