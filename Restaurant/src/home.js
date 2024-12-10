
function loadHomePage() {
    const content = document.createElement('div');
    const image = document.createElement('img');
    image.src = 'https://via.placeholder.com/300';
    image.alt = 'Delicious food';
    content.appendChild(image);
  
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to My Restaurant';
    content.appendChild(headline);
  
    const paragraph = document.createElement('p');
    paragraph.textContent =
      'Discover the finest culinary delights in town at My Restaurant. ' +
      'Our expert chefs craft every dish with care and passion, bringing ' +
      'you a dining experience like no other. Come visit us and taste the magic!';
    content.appendChild(paragraph);
    return content
  }
  
  export default loadHomePage;
  