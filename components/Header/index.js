// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerContainer = document.getElementsByClassName('.headerContainer').appendChild(headerContainer)

//headerContainer.appendChild(headerCont)
// data.forEach( (date, title, temp) => {
//     let createHeader = buttonCreator(arrayItem);

//     parent.appendChild(newButton);
// }}

function createHeader() {

    //create elements
  const header = document.createElement('div')
  const date = document.createElement('span')
  const title = document.createElement('h1')
  const temp = document.createElement('span')

    //class names
  header.classList.add('header')
  date.classList.add('span')
  title.classList.add('h1')
  temp.classList.add('temp')

    //content
  date.textContent = 'MARCH 28';
  title.textContent = 'Lambda Times';
  temp.textContent = '98';

  header.appendChild(date)
  header.appendChild(title)
  header.appendChild(temp)

  return header
}
