// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topics = document.querySelector('.topics')

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(data => {
    // 1. (see above)
    // Handles Success: here's where we get the results from server
    console.log('Lambda', data)
    const topicArray = data.data.topics
    topicArray.forEach(topic => {
      topics.appendChild(newTab(topic))
    })
  })

    .catch(error => {
        // Handles failure:
        console.log('API Malfunction', error)
      })
    
function newTab(topic) {
const tab = document.createElement('div')


// set the styles
tab.classList.add('tab')

//set content
tab.textContent = `${topic}`;

// put together
return tab
}