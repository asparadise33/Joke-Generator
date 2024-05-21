// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
//import getRequest from '../api/promises';
const jokesEndpoint = 'https://v2.jokeapi.dev/joke/Any';

const getRequest = () => new Promise((resolve, reject) => {
  fetch(jokesEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'applSication/json',
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Shall we laugh?</h1>
    <small>Open your dev tools</small><br />
    <button class="btn btn-danger" id="click-me">Get Joke!</button><br />
    <hr />
    <h2>These are font awesome icons:</h2>
    <i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i>
  `;
  console.warn('YOU ARE UP AND RUNNING!');
};

document.querySelector('#click-me')
  .addEventListener('click', () => { getRequest().then(console.warn)('You clicked that button!'); });
// USE WITH FIREBASE AUTH
// ViewDirectorBasedOnUserAuthStatus();

init();
