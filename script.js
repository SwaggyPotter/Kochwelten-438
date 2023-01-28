// <<<<<<<<<< Rezept JSON{}, Array [] >>>>>>>>>>>>>
let recipes = [
{
    // Head
    "name" : "Soljanka nach Mama Art",
    "img" : `img/soljanka.jpg`,
    // cards
    "time" : "1 Stunde 15 Minuten",
    "difficulty" : "normal",
    "calender" : "28.01.2023",
    // "calories" : "674 kcal",
// 
// <<<<<<<<<<<< other card
//     
    // table
    "quantity" : ['200', '200', '200', '200', '5','4','150','5','','1','1','','1','3',''],
    "unit" : ['g','g','g','g','Anzahl','Anzahl','g','Anzahl','','EL','Anzahl','','TL','Zehen',''],
    "ingredient" : ['Salami','Jagdwurst','Geflügelwurst','Schinkenspeck, gewürfelt','Zwiebel(n)',`Paprikaschote(n)`,'Tomatenmark','Gewürzgurke(n)','Gurkensud','Sambal Olek','Lorbeerblatt','Brühe, fette','Senf','Knoblauch','saure Sahne'],
    "preparation" : `Den Speck anbraten, die gewürfelte Wurst dazugeben (noch nicht die Salami!) und alles schön anbraten. Dann die Salami dazugeben. Kurz weiterbraten, die Zwiebel mit in den Topf geben und weiterbraten, bis die Zwiebeln glasig sind. Falls es ansetzen sollte, ein wenig Wasser dazugeben.<br>
                    Nun die gewürfelten Paprika, das Tomatenmark und den zerdrückten Knoblauch dazugeben, etwas anbraten. Dann die klein geschnittenen Gurken, etwas Gurkenwasser und sämtliche Gewürze dazugeben. Mit 1 bis 1 1/2 Liter Wasser aufgießen, die fette Brühe dazugeben und 20 Minuten leicht köcheln lassen.<br>
                    <br>
                    Idealerweise bereitet man die Soljanka am Vorabend zu. Am nächsten Tag nur noch aufwärmen.<br>
                    Wichtig! Die Soljanka muss ein paar Stunden stehen, bevor man sie isst.<br>
                    <br>
                    Dazu reiche ich immer geröstetes Ciabattabrot und saure Sahne zum Einrühren.`,
    // creator
    "profilPic" : `img/profileMathiasKohler.jpg`,
    "creator" : "Mathias Kohler",
},
{
    "name" : "Soljanka nach Papa Art",
    "img" : "../img/soljanka.jpg",
    "time" : " 1 Stunde 15 Minuten",
    "difficulty" : "normal",
    "calender" : "28.01.2023",
    "menge" : ['200', '200', '200', '200', '5','4','150','5','','1','1','','1','3',''],
    "einheit" : ['g','g','g','g','Anzahl','Anzahl','g','Anzahl','g','','EL','Anzahl','','TL','Zehen',''],
    "zutat" : ['Salami','Jagdwurst','Geflügelwurst','Schinkenspeck, gewürfelt','Zwiebel(n)',`Paprikaschote(n)`,'Tomatenmark','Gewürzgurke(n)','Gurkensud','Sambal Olek','Lorbeerblatt','Brühe, fette','Senf','Knoblauch','saure Sahne'],
    "zubereitung" : `Den Speck anbraten, die gewürfelte Wurst dazugeben (noch nicht die Salami!) und alles schön anbraten. Dann die Salami dazugeben. Kurz weiterbraten, die Zwiebel mit in den Topf geben und weiterbraten, bis die Zwiebeln glasig sind. Falls es ansetzen sollte, ein wenig Wasser dazugeben.<br>
                    Nun die gewürfelten Paprika, das Tomatenmark und den zerdrückten Knoblauch dazugeben, etwas anbraten. Dann die klein geschnittenen Gurken, etwas Gurkenwasser und sämtliche Gewürze dazugeben. Mit 1 bis 1 1/2 Liter Wasser aufgießen, die fette Brühe dazugeben und 20 Minuten leicht köcheln lassen.<br>
                    <br>
                    Idealerweise bereitet man die Soljanka am Vorabend zu. Am nächsten Tag nur noch aufwärmen.<br>
                    Wichtig! Die Soljanka muss ein paar Stunden stehen, bevor man sie isst.<br>
                    <br>
                    Dazu reiche ich immer geröstetes Ciabattabrot und saure Sahne zum Einrühren.`,
    "creator" : "Mathias Kohler",
    "profilPic" : "../img/profileMathiasKohler.jpg"
},
]

// >>Load localStorage
function render(){
    /*for( let i = 0 ; i < recipes.length, i++;){
        const recipe = recipes[i]; //with localStorage.setItem('recipeNumber',`${i}`) save all JSON´s
    }*/
    localStorage.setItem('recipeNumber',`${i}`);
}
// >>open RecipeSite
function addrecipe(i){//load with param
    window.open(`recipe.html`,'_blank');
    localStorage.setItem('recipeNumber',`${i}`);//save 'key' , 'param local'
}
function renderTable(){
    let i = localStorage.getItem('recipeNumber', '${i}');
    let recipe = recipes[i];

    for(a = 0 ; a < recipe["ingredient"].length ; a++){
        const ingredient = recipe["ingredient"][a];
        const unit = recipe["unit"][a];
        const quantity = recipe["quantity"][a];

    // table
    // document.getElementById(`#`).innerHTML = `${recipe["quantity"]}`;
    // document.getElementById(`#`).innerHTML = `${recipe["unit"]}`;
    document.getElementById("table-ingredient").innerHTML += /*html*/`
    <tr>
        <td class="td-number">${quantity}</td>
        <td class="td-unit">${unit}</td>
        <td class="td-ingredient">${ingredient}</td>
    </tr>
    `;
}
}
// push section-recipe-head
function renderRecipe(){
    let i = localStorage.getItem('recipeNumber', '${i}');//load local(addrecipe(param))
    let recipe = recipes[i];//load JSON
    // document.getElementById(`recipe-headline`).innerHTML = '';//delete content
    //head
    document.getElementById(`recipe-headline`).innerHTML = `${recipe["name"]}`;//load JSON[Array]
    document.getElementById(`recipe-img`).src = `${recipe["img"]}`;
    // cards
    document.getElementById(`recipe-card-clock`).innerHTML = `ca. ${recipe["time"]}`;
    document.getElementById(`recipe-card-brain`).innerHTML = `${recipe["difficulty"]}`;
    document.getElementById(`recipe-card-calender`).innerHTML = ` ${recipe["calender"]}`;
    // recipe
    document.getElementById(`preperation-recipe`).innerHTML = `${recipe["preparation"]}`;
    // creator
    document.getElementById(`img-creator`).src = `${recipe["profilPic"]}`;
    document.getElementById(`name-creator`).innerHTML = `${recipe["creator"]}`;
    //table
    renderTable();
}
