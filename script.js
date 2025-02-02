// an aaray holding objects and data. images name ;

var arr = [
    {name:"one Peice", src: "https://i.pinimg.com/736x/2f/de/98/2fde98c959b414caa067d09154c8f86b.jpg"   },
    {name:"blue lock", src: "https://i.pinimg.com/474x/e8/1e/f8/e81ef85e5602177a8bbaec53812d372d.jpg"   },
    {name:"death note", src: "https://i.pinimg.com/236x/eb/c4/08/ebc4084e44f2ca7e445c34689a92a582.jpg"   },
    {name:"solo leveling", src: "https://i.pinimg.com/474x/c3/7f/2a/c37f2aa4a23a8096dddb8609b4a92a6f.jpg"   },
    {name:"naruto", src: "https://i.pinimg.com/236x/b1/45/08/b14508bd52f8ab1ec8dc0a111b9c1b22.jpg"   },
    {name:"hunter x hunter", src: "https://i.pinimg.com/736x/c9/27/d8/c927d85578700559a4b091be74ba1935.jpg"   },
    {name:"demon slayer", src: "https://i.pinimg.com/236x/81/c7/9c/81c79cb8cfcb320fb7890403fc9bc81d.jpg"   },
    {name:"JJK", src: "https://i.pinimg.com/474x/8b/08/78/8b0878c4f85a111888a59f4cf92313c9.jpg"   },
    {name:"Atack on titan", src: "https://i.pinimg.com/474x/0b/e0/5c/0be05c856253ead714d6d9c4ba57e392.jpg"   },
    {name:"black clover", src: "https://i.pinimg.com/474x/e3/a1/15/e3a115754caa21b2ee4cc80a0c2de3d6.jpg"   },
    {name:"dragon ball", src: "https://i.pinimg.com/236x/88/89/66/888966399d5528b5fee5989e0a4806dc.jpg"   },
    {name:"Your name", src: "https://i.pinimg.com/236x/42/4d/1f/424d1f2cf502b95b9d9f8215b4d45bcd.jpg"   },
    {name:"I want to eat", src: "https://i.pinimg.com/236x/07/d4/39/07d439babf592d86945b2b763afc9f23.jpg"   },
    {name:"Your lie in april", src: "https://i.pinimg.com/236x/f9/9f/03/f99f03199cc3e795b8011b52e8a0adf3.jpg"   },
    {name:"Silent Voice", src: "https://i.pinimg.com/236x/01/9a/c0/019ac0ec03c46bc9d6ee88d36dd6e9fb.jpg"   },
    

]

const showCards = ()=>{
    var clutter = "";
    arr.forEach((obj)=>{
    clutter += `   <div class="box">
                        <img class="cursor-pointer" src = "${obj.src}"></img>
                        <div class="caption text-black text-center capitalize font-mono ">${obj.name}</div> 
                    </div>`
                    
    })

    document.querySelector(".container").innerHTML = clutter;
}

function handleSearch(){
    const nav = document.querySelector("#searchinput")
    const blackBg = document.querySelector(".overlay");

    nav.addEventListener("focus",()=>{
        blackBg.style.display = "block";
    })
    nav.addEventListener("blur",()=>{
        blackBg.style.display = "none";
    })

}
const suggestDiv = document.querySelector(".searchdata");
function showSuggestions (){
    const nav = document.querySelector("#searchinput")
   

    nav.addEventListener("input",(e)=>{
        // console.log(nav.value);
        // arr.filter((texts)=>{
        // if( texts.name === nav.value){
        //     console.log("matched")
        // }
        // else{
        //     console.log("not matched")
        // }

        // })

     const filteredArray = arr.filter(obj => obj.name.toLocaleLowerCase().startsWith(nav.value));
        console.log(filteredArray)
        var clutter = ""

        filteredArray.forEach((obj)=>{
            clutter += ` 
                       <div class="res flex px-8 py-4">
                        <i class="ri-search-line font-semibold mr-5 "  ></i>
                        <h3 class="font-semibold" >${obj.name}</h3>
                    </div>
                    `
        })
      
        
        suggestDiv.style.display = "block";
        suggestDiv.innerHTML = clutter;
    
    })
    
}

showCards();
handleSearch();

showSuggestions();

const removeEle = ()=>{
    suggestDiv.addEventListener("mouseenter",()=>{
       
        // suggestDiv.style.display = "block";
        suggestDiv.style.opacity = 0;
    })
    suggestDiv.addEventListener("mouseleave",()=>{
        // console.log("mouseleave")
        suggestDiv.style.opacity = 0;
        // suggestDiv.classList.add("#active")

        // suggestDiv.innerHTML. = 0;
    })
}

removeEle();

// in this function we are running a forEach loop and making a clutter var in which on run the function we are adding something that thing will keep adding till the loop.


// array.filter