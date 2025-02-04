import axios from "axios";
import { response } from "msw";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorPhoto = document.createElement('img');
  const authorName = document.createElement('span');

  //text content
  headline.textContent = article.headline;
  authorName.textContent = `By: ${article.authorName}`;
  authorPhoto.src = article.authorPhoto;

  //appending elements
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(authorPhoto);
  author.appendChild(authorName);
// console.log(card);

  //creating classes
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  //listener
  card.addEventListener('click', ()=> {
    console.log(article.headline);
  })
  return card;
}

const cardAppender = (selector) => {
//   // TASK 6
//   // ---------------------
//   // Implement this function that takes a css selector as its only argument.
//   // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
//   // However, the articles do not come organized in a single, neat array. Inspect the response closely!
//   // Create a card from each and every article object in the response, using the Card component.
//   // Append each card to the element in the DOM that matches the selector passed to the function.
//   //
  axios.get('http://localhost:5000/api/articles')
  .then(resp => {    
    // console.log(resp.data.articles);

    const cardItems = document.querySelector(selector);
    //javascript
    resp.data.articles.javascript.forEach(item => {
    cardItems.appendChild(Card(item));
    });
    //bootstrap
    resp.data.articles.bootstrap.forEach(item => {
      cardItems.appendChild(Card(item));
    });
    //technology
    resp.data.articles.technology.forEach(item => {
      cardItems.appendChild(Card(item));
    });
    //jquery
    resp.data.articles.jquery.forEach(item => {
      cardItems.appendChild(Card(item));
    });
    //node.js
    resp.data.articles.node.forEach(item => {
      cardItems.appendChild(Card(item));
    })
  })
  .catch(err => {
    console.error(err)
  })
}

export { Card, cardAppender }
