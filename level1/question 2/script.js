const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
request.onload = function () {

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(info => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = info.title;

      const h2 = document.createElement('h2');
      h2.textContent = info.id;
      
      const h3 = document.createElement('h3');
      h3.textContent = info.userId;

			const h4 = document.createElement('h4');
			h4.textContent = info.completed;
			
      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(h4);
    });
  } 
}

request.send();