

// Kommerntera all kod innan commit

const addText = document.querySelector("#addText")
const listedItems = [];
const label = document.querySelector("p")
let completedCount = 0;
label.innerText = `${completedCount} completed`;

addText.addEventListener("click",
    function () {

const input = document.querySelector("#input1");
const text = input.value; 
const list = document.querySelector("ul");

if (text !== "" && text !== "This field cannot be empty") {
    listedItems.push(text);
    const item = document.createElement("li");
    list.appendChild(item);

    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;
    item.appendChild(itemLabel);

    itemLabel.addEventListener ("click",
        function () {
            if (item.getAttribute("class") == "completed") {
                item.setAttribute("class", "");
                completedCount--;
            }
            else {
                item.setAttribute("class", "completed");
                completedCount++;
            }

            label.innerText = `${completedCount} completed`;
        });

    input.value = "";

    } else {
            input.value = "This field cannot be empty";
            setTimeout(() => {
                input.value = ""
              }, 2500);            
        };});





        




