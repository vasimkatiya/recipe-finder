// import { contant } from "./contant";


export const dataFetch = async (query) =>{
    
    const classes = ["text-white","bg-red-700","p-3","w-[200px]","rounded-xl","m-4","text-xl","ml-8"];
    const main = document.querySelector(".main");
    const ins = document.querySelector(".ins");
    main.innerHTML = "";
    ins.innerHTML = "";
    const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
  
       for (let recipe of data.recipes) {
        console.log("Recipe:", recipe);
        const cardCon = document.createElement("div");
        cardCon.classList.add("flex-row");
        cardCon.classList.add("text-center");
        cardCon.innerHTML = `
        <div class="bg-[#0f1111] m-3 flex text-white text-xl h-50 items-center rounded-xl justify-center">
        <image src= "${recipe.image}" class="max-h-32 mr-3 max-w-32 rounded-full" >
        <div>
        <h3>${recipe.name}</h3>
        <p>difficulty : ${recipe.difficulty}</p>
        <button class="open h-10 rounded-md m-2 cursor-pointer w-40 text-black bg-yellow-100 capitalize hover:bg-green-500 hover:duration-500">ingredients</button>
        <button class="rec h-10 rounded-md m-2 cursor-pointer w-40 text-black bg-yellow-100 capitalize hover:bg-green-500 hover:duration-500">recipe</button>
        </div>
        </div>
        `;
        main.appendChild(cardCon);
        
        // if(!btn){
            const btn = cardCon.querySelector(".open");
            btn.addEventListener("click",()=>{
                console.log("hello");
                ins.innerHTML = "";
                for(let i = 0; i<recipe.ingredients.length;i++){
                    const p = document.createElement("p");
                    p.innerText = `step-${i} :${recipe.ingredients[i]}`;
                    ins.appendChild(p)
                }


                const closeBtn = document.createElement("button");
                closeBtn.textContent = "close";
                

                for(let j = 0 ; j< classes.length;j++){
                    closeBtn.classList.add(classes[j])
                }

                ins.appendChild(closeBtn);
                closeBtn.addEventListener("click",()=>{
                    ins.innerHTML = "";
                });
            });
            const recipeBtn = cardCon.querySelector(".rec");
            recipeBtn.addEventListener("click",()=>{
                 ins.innerHTML = "";
                for(let i = 0; i<recipe.instructions.length;i++){
                    const p = document.createElement("p");
                    p.innerText = `${recipe.instructions[i]}`;
                    ins.appendChild(p);
                }
                const closeBtn = document.createElement("button");
                closeBtn.textContent = "close";
                for(let j = 0 ; j< classes.length;j++){
                    closeBtn.classList.add(classes[j])
                }
                closeBtn.classList.add("close");
                ins.appendChild(closeBtn);
                closeBtn.addEventListener("click",()=>{
                    ins.innerHTML = "";
                });
            });
        // }
        
        

       }

}