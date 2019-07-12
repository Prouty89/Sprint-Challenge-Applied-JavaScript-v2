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
    const box = data.data.articles.bootstrap
    box.forEach(item => {
      // 2. (see above)
      const element = newCard(item)
      // 3. (see above)
      cards.appendChild(element)
    })
  })

  .catch(error => {
    // Handles failure:
    console.log('API Malfunction', error)
  })


  function createCard () {
      //element creation
      const card = document.createElements('div')
      const headline = document.createElement('div')
      const author = document.createElement('div')
      const imgContainer = document.createElement('div')
      const img = document.createElement('source')
      const authors = document.createElement('span')

      //styles
      card.classList.add('card')
      headline.classList.add('headline')
      author.classList.add('author-span')
      imgContainer.classList.add('image-container')
      img.classList.add('img')
      authors.classList.add('author')

      //content
      headline.textContent = `${data.data.headline}`

      return card
  }
