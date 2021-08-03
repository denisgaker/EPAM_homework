import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import printMe from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  btn.innerHTML = 'click me';
  btn.onclick = printMe;

  element.innerHTML = _.join(['Hello', 'webpack']);
  element.classList.add('hello');
  
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  element.appendChild(btn);

  return element;
}
document.body.appendChild(component());