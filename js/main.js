const imageRef = document.createElement('img');
let randomImage = Math.floor((Math.random()  * 9) + 1);

imageRef.src = './assets/images/' + randomImage + '.jpg';
imageRef.setAttribute('width', '500px');
imageRef.setAttribute('height', '350px');

const mainContainer = document.querySelector('.root');
mainContainer.append(imageRef);
