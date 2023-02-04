// >>Load localStorage for Rendering startPage
function render(){
    randomRecipe();
    sectionTwo();
}


function randomRecipe(){
    const num = Math.floor(Math.random()*recipes.length)
    let recipe = recipes[num]

    document.getElementById('section-one').innerHTML = /*html*/`
    <a onclick="window.open('recipe.html','_blank'); localStorage.setItem('recipeNumber','${num}')">
        <img class="img-big-croissant" src="${recipe["img"]}" />
    </a>

    <div class="header-headline">
        <div class="header-headline-child">
            <h2>${recipe["name"]}</h2>
            <p class="headline-big-img">
            ${recipe["dailyText"]}
            </p>
        </div>
        <button class="open-recipe" onclick="window.open('recipe.html','_blank'); localStorage.setItem('recipeNumber','${num}')">Rezept Öffnen</button>
    </div>
    `;
}


function sectionTwo(){
    let sectionTwo = document.getElementById('section-two-cards');
    sectionTwo.innerHTML = '';

    for( let i = 0 ; i < recipes.length; i++){
        const recipe = recipes[i]; //with localStorage.setItem('recipeNumber',`${i}`) save all JSON´s

        sectionTwo.innerHTML += /*html*/`
        <a href="#">
    <div class="section-two-card" onclick="window.open('recipe.html','_blank'); localStorage.setItem('recipeNumber','${i}')">
            <img class="img-lable" src="${recipe["img"]}" alt="" />
            <p>${recipe["name"]}</p>
    </div>
    </a>
    `;
    };
}


function renderRecipe(){//onload recipe.html
    let i = localStorage.getItem('recipeNumber', '${i}');//load localStorage(addrecipe(param))
    let recipe = recipes[i];//load JSON
    
    document.getElementById(`recipe-headline`).innerHTML = `${recipe["name"]}`;//load JSON[Array]
    document.getElementById(`recipe-img`).src = `${recipe["img"]}`;
    document.getElementById(`recipe-card-clock`).innerHTML = `ca. ${recipe["time"]}`;
    document.getElementById(`recipe-card-brain`).innerHTML = `${recipe["difficulty"]}`;
    document.getElementById(`recipe-card-calender`).innerHTML = ` ${recipe["calender"]}`;
    document.getElementById(`preperation-recipe`).innerHTML = ` ${recipe["preparation"]}`;
    document.getElementById(`lablePreperationClock`).innerHTML = `Arbeitszeit ca. ${recipe["lablePreperationClock"]}`;
    document.getElementById(`lableLengthOfTime`).innerHTML = `Gesamtzeit ca. ${recipe["lableLengthOfTime"]}`;
    document.getElementById(`input-portion`).innerHTML = `${recipe["portion"]}`;
    document.getElementById(`img-creator`).src = `${recipe["profilPic"]}`;
    document.getElementById(`name-creator`).innerHTML = `${recipe["creator"]}`;

    renderTable();
}


function renderTable(){
    let i = localStorage.getItem('recipeNumber', '${i}');
    let table = document.getElementById("table-ingredient");
    let currentlyPortion = document.getElementById('input-portion').value;//portion quantity    
    let recipe = recipes[i];

    table.innerHTML = '';// delete Table

    for(a = 0 ; a < recipe["ingredient"].length ; a++){//search Array
        let ingredient = recipe["ingredient"][a];
        let unit = recipe["unit"][a];
        let quantity = recipe["quantity"][a];
        
        // create Table
        table.innerHTML += /*html*/`
    <tr>
        <td class="td-number">${quantity * currentlyPortion}</td>
        <td class="td-unit">${unit}</td>
        <td class="td-ingredient">${ingredient}</td>
    </tr>
    `;
}
}