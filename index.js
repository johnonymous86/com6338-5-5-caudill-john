//NOTE: ANY BUTTON INSIDE A FORM AUTO BECOMES A SUBMIT--TYPE
//IS REDUNDANT


//access form data by targeting input
//and prevents form submission &
//page reload.
//onsubmit event looks for data variable which is input value
//prevent default avoids reload onsubmit
//'if/else if' allows for form validation
//if data input, newItem variable allows for creation of list item
//listButton var grabs that list item and creates button element
//unable to finalize clickablity of list item or text-decoration: line on second click




var form = document.querySelector('form');
var ul = document.querySelector('todo-list');
var data = document.querySelector('input').value;
var nodata = document.querySelector(!'input')
var listButton = document.getElementById('li')


form.onsubmit = function(e) {
    e.preventDefault();

    if (data) {
   
    var text = document.createTextNode(data);
    var newItem = document.createElement('li');
  
   
    newItem.appendChild(text);
    document.getElementById('todo-list').appendChild(newItem);
    listButton.appendChild(newItem);
    document.getElementById('li').appendChild(listButton);
    listButton.style = 'text-decoration: line';
    }
   
    else if (nodata)
        {return}
    
} 



/*prior attempts below this line

  listButton.onsubmit = function(e) {
        e.preventDefault();
        listButton.style = 'text-decoration: line';
    }

form.onsubmit = function(e) 
    {e.preventDefault()}

    if (data = !'input') {
        console.log('null');
    
    } 
    
    else if (form.onsubmit = function(e) {
        e.preventDefault();

        var data = document.querySelector('input').value
        var text = document.createTextNode(data)
        var newItem = document.createElement('li')
        newItem.appendChild(text)
        document.getElementById('todo-list').appendChild(newItem);
    }
)





form.onsubmit = function(e) {
    
    e.preventDefault();

if (data = 'input'){

    var data = document.querySelector('input').value
    var text = document.createTextNode(data) 
    var newItem = document.createElement('li')
    newItem.appendChild(text)
    document.getElementById('todo-list').appendChild(newItem)
}
else if (data = '' || '  '){
    var data = document.querySelector('input').value
    console.log('nothing')
}

}



















/*var form = document.querySelector('form')
var ul = document.querySelector('todo-list')
var data = document.querySelector('input').value



form.onsubmit = function(e) {
    
    e.preventDefault();

    var text = document.createTextNode(data) 
    var newItem = document.createElement('li')
    newItem.appendChild(text)
    document.getElementById('todo-list').appendChild(newItem)


}




document.addEventListener('keydown', function(e) 
    if (e.key === data ){


form.onsubmit =  function(e) {
    e.preventDefault();
    console.log('h')
}
}













/* OLD CODE
document.addEventListener('keydown', function(event) {
    const displayDiv = document.getElementById('todo-list');
    displayDiv.textContent += event.key;
  });


function logSubmit(e) {
    console.log = '!';
    e.preventDefault();
    
}

const button = document.getElementsByTagName('button');

addEventListener(button, (event) => { })

onsubmit = (event) => { }


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("todo-list").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

/*selects button without tag
var allButtons = document.getElementsByTagName("button");
var buttonsWithoutAttributes = [];

for (var i = 0; i < allButtons.length; i++) {
  if (allButtons[i].attributes.length === 0) {
    buttonsWithoutAttributes.push(allButtons[i]);
  }
}
*/



