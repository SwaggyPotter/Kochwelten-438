let menu = document.getElementById('menu')
let navCloseBTN = document.getElementById('closeMenu')
let cardBTNBack = document.getElementById('arrowBack')
let cardBTNFor = document.getElementById('arrowFor')
let cardCounter = 0;
let slider = document.getElementById('pfanneCardSlider')




cardBTNBack.addEventListener('click', () => {
    if (cardCounter == 1 && window.innerWidth > 1225) {
        cardCounter = 0;
        slider.style.marginLeft = '0px'
    }
})
cardBTNFor.addEventListener('click', () => {
    if (cardCounter == 0 && window.innerWidth > 1225) {
        cardCounter = 1;
        slider.style.marginLeft = '-800px'
    }
})


cardBTNBack.addEventListener('click', () => {
    if (cardCounter == 1 && window.innerWidth < 1225 && window.innerWidth > 900) {
        cardCounter = 0;
        slider.style.marginLeft = '0px'
    }
})
cardBTNFor.addEventListener('click', () => {
    if (cardCounter == 0 && window.innerWidth < 1225 && window.innerWidth > 900) {
        cardCounter = 1;
        slider.style.marginLeft = '-500px'
    }
})


cardBTNBack.addEventListener('click', () => {
    if (cardCounter == 1 && window.innerWidth < 900 && window.innerWidth > 450) {
        cardCounter = 0;
        slider.style.marginLeft = '0px'
    }
})
cardBTNFor.addEventListener('click', () => {
    if (cardCounter == 0 && window.innerWidth < 900 && window.innerWidth > 450) {
        cardCounter = 1;
        slider.style.marginLeft = '-300px'
    }
})

cardBTNBack.addEventListener('click', () => {
    if (cardCounter == 1 && window.innerWidth < 450) {
        cardCounter = 0;
        slider.style.marginLeft = '0px'
    }
})
cardBTNFor.addEventListener('click', () => {
    if (cardCounter == 0 && window.innerWidth < 450) {
        cardCounter = 1;
        slider.style.marginLeft = '-200px'
    }
})





// >>Load localStorage for Rendering startPage
function render() {
    includeHTML();
    setTimeout(() => {
        getDiviceSize();
        randomRecipe();
        sectionTwo();
    }, 100)
}
function renderBasic() {
    includeHTML();
    setTimeout(() => {
        getDiviceSize();
    }, 100)
}


// Generate Random Recipe
function randomRecipe() {
    const num = Math.floor(Math.random() * recipes.length);
    let recipe = recipes[num];
    // localStorage.setItem('recipeNumber','${num}');

    renderSectionOne(recipe, num);
    document.getElementById('linkDailyRecipe').innerHTML = /*html*/`
    <a href="#" onclick="window.open('recipe.html','_self'); localStorage.setItem('recipeNumber','${num}')">Rezept des Tages</a>
    `;
}


// Render index.html section-one
function renderSectionOne(recipe, num) {
    document.getElementById('section-one').innerHTML = '';
    document.getElementById('section-one').innerHTML = /*html*/`
    <a onclick="window.open('recipe.html','_self'); localStorage.setItem('recipeNumber','${num}')">
        <img class="img-big-croissant" src="${recipe["img"]}" />
    </a>

    <div class="header-headline">
        <div class="header-headline-child">
            <h2>${recipe["name"]}</h2>
            <p class="headline-big-img">
            ${recipe["dailyText"]}
            </p>
        </div>
        <button class="open-recipe btn-boRa-all" onclick="window.open('recipe.html','_self'); localStorage.setItem('recipeNumber','${num}')">Rezept ??ffnen</button>
    </div>
    `;
}


// Render index.html section-two
function sectionTwo() {
    let sectionTwo = document.getElementById('section-two-cards');
    sectionTwo.innerHTML = '';

    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i]; //with localStorage.setItem('recipeNumber',`${i}`) save all JSON??s

        sectionTwo.innerHTML += /*html*/`
        <a href="#">
    <div class="section-two-card" onclick="window.open('recipe.html','_self'); localStorage.setItem('recipeNumber','${i}')">
            <img class="img-lable max-width" src="${recipe["img"]}" alt="" />
            <p>${recipe["name"]}</p>
    </div>
    </a>
    `;
    };
}


function renderRecipe() {//onload recipe.html
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

    document.title = `${recipe["name"]}`;
    renderTable();
}


function renderTable() {
    let i = localStorage.getItem('recipeNumber', '${i}');
    let table = document.getElementById("table-ingredient");
    let recipe = recipes[i];
    let currentlyPortion = document.getElementById('input-portion').value;

    table.innerHTML = '';// delete Table

    for (a = 0; a < recipe["ingredient"].length; a++) {//search Array
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

/*Menu button*/
function openMenu() {
    let nav = document.getElementById('nav')
    nav.style.display = 'flex';
}

function closeMenu() {
    let nav = document.getElementById('nav')
    nav.style.display = 'none';
}


addEventListener('resize', () => {
    let navCloseBTN = document.getElementById('closeMenu')
    let nav = document.getElementById('nav')

    if (nav) {
        if (window.innerWidth > 900) {
            nav.classList.remove('handyNav');
            nav.classList.add('desktopNav');
            navCloseBTN.style.display = 'none';
            nav.style.display = 'flex';
        }
        else if (window.innerWidth < 900) {
            nav.classList.remove('desktopNav');
            nav.classList.add('handyNav');
            navCloseBTN.style.display = 'flex';
            nav.style.display = 'none';
        }
    }
})


function getDiviceSize() {
    let nav = document.getElementById('nav')
    let navCloseBTN = document.getElementById('closeMenu')

    if (window.innerWidth > 900) {
        nav.classList.remove('handyNav');
        nav.classList.add('desktopNav');
        navCloseBTN.style.display = 'none';
        nav.style.display = 'flex';
    }
    else if (window.innerWidth < 900) {
        nav.classList.remove('desktopNav');
        nav.classList.add('handyNav');
        navCloseBTN.style.display = 'flex';
        nav.style.display = 'none';
    }
}


/*<<<<<<<<<<<include header template*/
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}