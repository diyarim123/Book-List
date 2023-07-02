const list = document.querySelector("#book-list");
const add_input = document.querySelector("#addInput");
const add_btn = document.querySelector("#addBtn");
const hidebox = document.querySelector("#hide");
const search = document.querySelector("#search")
const li = document.querySelectorAll(".li");
const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel")



// delete list
list.addEventListener("click", e => {
    if(e.target.className == "deleteBtn") {
        const li = e.target.parentElement;
        list.removeChild(li)
    }
});


//add list
add_btn.addEventListener("click", e => {
    const addInput = add_input.value;

    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = "Delete"

    li.textContent = addInput;
    li.appendChild(span)

    li.classList.add("li")
    span.classList.add("deleteBtn") 

    list.appendChild(li);

});


//add list by enter
document.body.addEventListener("keypress", e => {
   
    if(e.key === "Enter") {
        const addInput = add_input.value;

        const li = document.createElement("li");
        const span = document.createElement("span");
    
        span.textContent = "Delete"
    
        li.textContent = addInput;
        li.appendChild(span)
    
        li.classList.add("li")
        span.classList.add("deleteBtn") 
    
        list.appendChild(li)
    }
});


// hide the list
hidebox.addEventListener("change", e => {
    if(e.target.checked) {
        list.style.visibility = "hidden"
    } else {
        list.style.visibility = "initial"
    }
});


//search section
search.addEventListener("keyup", e => {


    const arr = Array.from(li);
    const temp = e.target.value.toLowerCase();

    arr.forEach(e => {
        const title = e.textContent.toLowerCase();

        if(title.includes(temp)) {
            e.style.display = "block";
        } else {
            e.style.display = "none";
        }
    })
})


// tabbed content
tabs.addEventListener("click", e => {
    if(e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.target);

        panels.forEach(panel => {
            if(panel == targetPanel) {
                panel.classList.add("block")
                panel.classList.remove("hidden")
            } else {
                panel.classList.remove("block")
                panel.classList.add("hidden")
            }
        })
    }
})
