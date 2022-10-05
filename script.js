let adtodo = document.querySelector(".add");
let list = document.querySelector(".todos");
let search = document.querySelector('.search  input');

adtodo.addEventListener("submit", e =>{
    e.preventDefault()
    let todo = adtodo.addNew.value
    console.log(todo)
    if(todo.length){
    let template = `
    
    <li>
       <span>${todo}</span>
       <i class="fa fa-trash delete" aria-hidden="true"></i>
    </li>
    
    `
    
    list.innerHTML = list.innerHTML + template
    adtodo.reset()
}
} )

list.addEventListener("click", e =>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove()
    }
})

search.addEventListener("keyup", e =>{
    e.preventDefault();

    let term = search.value.trim();
    
    Array.from(list.children).filter((list)=>{
        return !list.textContent.includes(term)

    }).forEach((list)=>{
        list.classList.add("hide")

    })
    Array.from(list.children).filter((list)=>{
        return list.textContent.includes(term)

    }).forEach((list)=>{
        list.classList.remove("hide")

    })
    

})