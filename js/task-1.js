// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
// елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).

// 1
const categories = document.querySelector('#categories');
const list = categories.querySelectorAll(`.item`);
console.log(`Кількість категорій: ${list.length}`);

// 2
list.forEach(item => {
  const title = item.querySelector(`h2`).textContent;
  const elements = item.querySelectorAll(`li`).length;
  console.log(`Текст заголовку: ${title}`);
  console.log(`Кількість елементів: ${elements}`);
});
