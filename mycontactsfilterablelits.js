// Get input element
let filterInput = document.getElementById('filterInput');
// Add event listener
filterInput.addEventListener('keyup', filterNames); //type of events is keyup & we call function filterNames

function filterNames(){ //here we created function filterNames
  // Get value of input

  //here we created another variable and also we want value so we write .value & we convert it to uppercase so using .toUpperCase
  let filterValue = document.getElementById('filterInput').value.toUpperCase();

  // Get names ul
  let ul = document.getElementById('names');
  // Get multiple li or lis from ul & so we use querySelectorAll instead of querySelector
  let li = ul.querySelectorAll('li.collection-item'); //we want items so we use .collection-item

  // Loop through all the collection-items lis
  for(let i = 0;i < li.length;i++){
    let a = li[i].getElementsByTagName('a')[0]; //& you might be wondering what this 0 is actually we want correct link so we use [0]
    
    // If matched
    //innerHTML grabs watever inside in the 'a' tag
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){ //and if filterValue > -1 that means there is a match i mean
      //one of the letter matches 
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none'; //and if doesn't match then it is equal to none
    }
  }

}