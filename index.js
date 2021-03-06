//put event listener on the submit button(form) -a form shows all complex key value pairs

const form = document.querySelector("#comment-form")
const newComment = document.querySelector("#new-comment")
const container = document.querySelector("#comments-container")
const dogBtn = document.querySelector("#dog-btn") 
const catBtn = document.querySelector("#cat-btn")
// chooses first one div = div, # = id
// get elementById = singular , getElementsByClassName = expects an argument, return plural

form.addEventListener('submit', captureSubmit)//()
//submit is only on a form

// captureSubmit)() is a callback function

function captureSubmit(event){
    event.preventDefault()
    const p = document.createElement('p')
    //innerText vs (not)innerHTML
    container.append(p)
    p.innerText = newComment.value
    newComment.value = ""
    //form.reset()
}


dogBtn.addEventListener('click', fetchSubmit)

function fetchSubmit(){

    console.log("HI")
    //make fetch request with link 
    fetch('https://random.dog/woof.json')
    .then(x => x.json()) //returning something bc it's an arrow function without {}
    //it'll run if it isn't in .then
    .then(y =>{
        let imgSrc = document.createElement('img')
        imgSrc.src = y.url
        container.append(imgSrc)

    })
    //should return the image
}

//captureSubmit()  when invoking function


catBtn.addEventListener('click', catFetchSubmit)

function catFetchSubmit(){
   
    fetch('https://cat-fact.herokuapp.com/facts')
    .then(x => x.json())
    .then(y =>{
        y.forEach(element => {
            element.text  //new scope, so y doesn't have value here
        container.append(element.text)
        });
        //map(makes new array) vs forEach(tough each element and do something with it and do not care the return value)
    })
}   


