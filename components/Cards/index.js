// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container')

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(data => {
    // Handles Success: here's where we get the results from server
    console.log('ARTICLES', data)
    const articlesEl = data.data.articles
    for (let topic in articlesEl) {
        articlesEl[topic].forEach(article => {
            cardsContainer.appendChild(createCard(article, topic))
        })
    }
    })
  

  .catch(error => {
    // Handles failure:
    console.log('API Malfunction', error)
  })


  function createCard (article, topic) {
      //element creation
      const card = document.createElement('div')
      const headline = document.createElement('div')
      const author = document.createElement('div')
      const imgContainer = document.createElement('div')
      const img = document.createElement('img')
      const authorName = document.createElement('span')

      //styles
      card.classList.add('card')
      headline.classList.add('headline')
      author.classList.add('author')
      imgContainer.classList.add('img-container')
      author.classList.add('author')

      //content
      headline.textContent = `${article.headline}`
      img.src = `${article.authorPhoto}`
      authorName.textContent = `Written by: ${article.authorName}`

      //append
      card.appendChild(headline)
      card.appendChild(author)
      author.appendChild(imgContainer)
      author.appendChild(authorName)
      imgContainer.appendChild(img)


      return card
  }
