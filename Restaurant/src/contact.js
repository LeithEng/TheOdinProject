function loadContactPage() {
    const content = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    content.appendChild(title);
  
    const phone = document.createElement('p');
    phone.textContent = '📞 Phone: (123) 456-7890';
    content.appendChild(phone);
  
    const email = document.createElement('p');
    email.textContent = '📧 Email: info@myrestaurant.com';
    content.appendChild(email);
  
    const address = document.createElement('p');
    address.textContent = '📍 Address: 123 Food Street, Flavor Town';
    content.appendChild(address);
  
    return content;
  }
  
  export default loadContactPage;
  