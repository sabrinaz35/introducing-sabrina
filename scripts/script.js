console.log("het werkt");


/**
 * Toevoegen van API
 * De twee codeblokken hieronder heb ik geschreven met behulp van de opdrachten voorafgaand aan deze minor, waarin we de api ophalen al hadden geoefend
 */

insertUserInfo();

async function insertUserInfo(){
    const baseURL = 'https://fdnd.directus.app/items'
    const endpoint = '/person/320 '
    const url = baseURL + endpoint

    let response = await fetch(url)

    let userInfo = await response.json()
   
    console.log(userInfo)

    let userInfoHTML =
    `<section>
    <h1>${userInfo.data.name}'s world</h1>
    <p>Birthday: ${userInfo.data.birthdate}</p>
    <p>Githandle: ${userInfo.data.github_handle}</p>
    <img src="images/wereld.svg" alt="wereldbol icon zwart wit" />
    </section>
    `
    const kaft = document.querySelector('div:first-of-type section:first-of-type')

    kaft.insertAdjacentHTML('beforebegin',userInfoHTML)
}

/**
 * De funtie voor een API waarin hij data ophaalt van andere.
 * Waarin er een array van 40 mensen opgehaald worden en er meteen wordt gekeken of ze een emoji hebben ingevuld. 
 * Daarna wordt de api omgezet in een json bestand en wordt er een shuffle aan toegevoegd, zodat er steeds 3 andere in beeld komen.
 * Uiteindelijk moet er nog gecontroleerd worden of de data niet te veel shuffled en dat doe ik in de for each door i==3 te controleren,
 *  dus als de browser 3x gerefreshed is doe dan niks anders voer uit wat eronder staat.
 */


medeWebbersInfo();

async function medeWebbersInfo ( ) {
       const baseURL = 'https://fdnd.directus.app/items'

    /**
     * Bron: Chatgpt
     * Prompt: const endpoint = '/person/?filter[fav_emoji][_nnull]=true?limit=3/' + Math.floor(Math.random()*100) + 1; Klopt dit wat ik hier doe? In mijn code werkt het namelijk niet
     *  https://chatgpt.com/share/698b157b-f1b0-8001-a6ee-c56649d07fa8 
     * Andere bronnen: https://www.w3schools.com/js/js_random.asp voor het kijken war mathrandom doet
     * Vasilus voor de mathrandom en de shuffle
     */

    const studenten = baseURL + '/person/?page=3&filter[fav_emoji][_nnull]=true&limit=40';
    console.log(studenten);
    //const random = Math.floor(Math.random()*17);
    //const endpoint = '/person/?filter[fav_emoji][_nnull]=true&limit=3&offset=${random}';
    // const endpoint = '/person/?filter[fav_emoji][_nnull]=true&page=3&limit=3';
    // const url = baseURL + endpoint


    // '/person/?page=3&limit=2'

    let response = await fetch(studenten)

    let userInfo = await response.json()
   
    shuffleArray(userInfo.data)
    var i = 0;

    userInfo.data.forEach(function(userInfo){
        if(i == 3) {
            //
        }
        else {
            let userInfoHTML =
            `<li>
            <h3>${userInfo.name} </h3>
            <p> ${userInfo.fav_emoji}</p>
            </li>
            `
            const medestudent = document.querySelector('div:last-of-type section:first-of-type ol')

            medestudent.insertAdjacentHTML('beforeend',userInfoHTML)
            i++;
        }

    });
    
};





/**
 * Pagina's omslaan van het boekje
 * Bestaande uit twee functies, waarbij de een de linkerkant op slaat en de andere de andere kant op slaat.
 * Bronnen: https://codepen.io/Nidhanshu/pen/YaLYgw .. om een opstart mee te maken, maar verder niet veel mee gedaan
 * Verdere bronnen Vasilis en Sanne
 */

var nextButton = document.querySelector('.nextButton');
var prevButton = document.querySelector('.prevButton');

// een waarde aan meegeven, zodat hij op basis daarvan de animatie kan gaan uitvoeren
var doublePage = 1;

nextButton.addEventListener('click', turnPageRight);
prevButton.addEventListener('click', turnPageLeft);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators even opnieuw inlezen over de js syntaxes

function turnPageRight() {
    console.log(doublePage);

        var paginaDieOmgeslagenMoetWorden = document.querySelector( "div:nth-of-type(" + doublePage + ")")

        // console.log(paginaDieOmgeslagenMoetWorden)

        if (paginaDieOmgeslagenMoetWorden) {
            paginaDieOmgeslagenMoetWorden.classList.add("omgeslagen");
            if(paginaDieOmgeslagenMoetWorden.nextElementSibling){
                doublePage = doublePage + 1;
            }
        }
        
};

function turnPageLeft() {
    console.log(doublePage);
        // console.log(paginaDieOmgeslagenMoetWorden)

         var paginaDieOmgeslagenMoetWorden = document.querySelector( "div:nth-of-type(" + doublePage + ")")

        if (paginaDieOmgeslagenMoetWorden) {
            paginaDieOmgeslagenMoetWorden.classList.remove("omgeslagen");
            if(paginaDieOmgeslagenMoetWorden.previousElementSibling){
                doublePage = doublePage - 1;
            }

        }

};




/**
 * Shuffle array functie waarbij de data uiteindelijk in mijn code wordt geshuffeld
 * Hij geeft een lengte mee -1, want 0 heeft ook een waarde, Als de functie wordt aangevraagd dan doet hij een random + 1 
 */

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}