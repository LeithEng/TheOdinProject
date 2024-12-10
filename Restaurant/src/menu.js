function loadMenuPage() {
    const content = document.createElement('div');
    const title = document.createElement('h1');
    title.textContent = 'Our Menu';
    content.appendChild(title);
  
    const item1 = document.createElement('p');
    item1.textContent = '🍔 Burger - $10';
    content.appendChild(item1);
  
    const item2 = document.createElement('p');
    item2.textContent = '🍕 Pizza - $15';
    content.appendChild(item2);
  
    const item3 = document.createElement('p');
    item3.textContent = '🥗 Salad - $8';
    content.appendChild(item3);
  
    return content;
  }
  
  export default loadMenuPage;
  