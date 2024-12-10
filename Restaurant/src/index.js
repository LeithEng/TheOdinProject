import loadHomePage from './home';
import loadMenuPage from './menu';
import loadContactPage from './contact';
import './style.css'; 

function clearContent() {
  const contentDiv = document.getElementById('content');
  contentDiv.textContent = '';
}

function initializeWebsite() {
  const homeButton = document.querySelector('button:nth-child(1)');
  const menuButton = document.querySelector('button:nth-child(2)');
  const contactButton = document.querySelector('button:nth-child(3)');

  homeButton.addEventListener('click', () => {
    clearContent();
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(loadHomePage());
  });

  menuButton.addEventListener('click', () => {
    clearContent();
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(loadMenuPage());
  });

  contactButton.addEventListener('click', () => {
    clearContent();
    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(loadContactPage());
  });

  const contentDiv = document.getElementById('content');
  contentDiv.appendChild(loadHomePage());
}

initializeWebsite();
