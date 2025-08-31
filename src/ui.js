// import { contant } from "./contant";
import { dataFetch } from "./data"

export const uiRender = () =>{
    const body = document.querySelector("body");
    const searchDiv = document.querySelector(".search");
    searchDiv.innerHTML = `
    <input class="inp rounded-sm mr-5  border-white p-1.6 bg-amber-50 text-black" type="text" placeholder="search recipe">
    <button class="search-btn bg-green-800 p20 h-8 w-20 text-center rounded-2xl cursor-pointer">search<button>
    `;
    let btn = searchDiv.querySelector("button");
    btn.addEventListener("click",(e)=>{
        const searchInp = searchDiv.querySelector("input").value;
        if(!searchInp){
            alert("enter recipe name.");
            return;
        }
        
        dataFetch(searchInp);
        
    });

    // const oprnBtn = document.querySelectorAll(".open");
    // if(openBtn){
    //     oprnBtn.forEach((ele,i)=>{
    //         ele.addEventListener("click",()=>{
    //             console.log(i, "and name :",ele);
    //         })
            
    //     })
    // }
}