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

    <?xml version="1.0" encoding="UTF-8"?>
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309.11 309.11">
    <g id="Layer_1-2" data-name="Layer 1">
        <g>
        <path d="M304.11,131.68c-4.62,1.79-9.31,3.46-14.16,4.48-4.57.95-9.21,1.16-13.85.63-8.77-1-17.11-4.26-25.5-6.82-8.08-2.47-16.82-4.63-25.32-3.31-6.6,1.02-14.3,5.27-14.73,12.72-.14,2.35.59,4.65,1.47,6.81.96,2.36,1.98,4.69,2.98,7.03,2.02,4.74,4.03,9.48,6.05,14.23,1.58,3.72,3.21,7.47,3.81,11.5.49,3.25.26,6.97-2.3,9.34-2.82,2.61-7.13,2.7-9.9,5.45s-2.84,7.14-1.63,10.79c1.28,3.84,3.51,7.46,5.81,10.77s5.04,6.33,8.76,7.94c4.27,1.84,8.91,1.27,13.42,1.68,4.05.38,7.55,2.2,10.29,5.19,6.28,6.85,6.63,16.56,5.56,25.31-.32,2.58-.76,5.15-1.2,7.72-.32,1.89,2.57,2.7,2.89.8,1.58-9.22,3.3-19.26-.34-28.23-1.45-3.58-3.61-6.94-6.58-9.44-3.13-2.64-6.77-4.02-10.84-4.36-4.43-.37-9.16.3-13.18-2-3.45-1.97-5.81-5.38-7.86-8.69s-4.38-6.94-4.54-10.87c-.08-1.87.48-3.61,1.95-4.84s3.24-1.72,4.9-2.39c3.43-1.4,6.2-3.5,7.37-7.15,1.11-3.46.59-7.32-.32-10.76-1.07-4.07-2.91-7.9-4.55-11.75-2.05-4.82-4.1-9.63-6.15-14.45-1.59-3.75-4.12-8.2-2.19-12.28,1.43-3.01,4.53-4.97,7.57-6.07,7.65-2.76,16.42-1.01,24.01,1.07,8.38,2.3,16.5,5.57,25.04,7.27,4.3.86,8.7,1.32,13.08,1.03,4.84-.32,9.59-1.46,14.19-2.97,2.28-.75,4.54-1.59,6.78-2.46,1.78-.69,1.01-3.59-.8-2.89h0Z"/>
        <path d="M227.1,23.86c.21,5.39-4,9.52-8.28,12.16-4.69,2.9-10.07,4.48-14.63,7.61s-7.39,7.18-8.71,12.29-1.04,10.4-.32,15.54c.37,2.66.89,5.29,1.46,7.92.54,2.48,1.19,5.24,3.21,6.97,3.88,3.34,9.75,1.54,13.6-.85s6.98-5.65,10.87-7.91c2.18-1.27,4.48-2.01,7.02-2.07,3.18-.07,6.34.57,9.52.36,12.43-.82,21.64-10.81,29.25-19.66,1.25-1.46-.86-3.59-2.12-2.12-6.49,7.55-14,16.14-24.18,18.36-5.59,1.22-11.35-.95-16.86.7-4.25,1.27-7.68,4.24-11.09,6.93-3.18,2.51-6.87,5.29-11.15,5.03-3.03-.18-4.17-2.43-4.83-5.08-.61-2.46-1.09-4.97-1.5-7.46-.81-4.9-1.25-10.08-.18-14.98s3.89-9.04,8.19-11.81c4.95-3.19,10.77-4.8,15.58-8.24,4.49-3.2,8.39-7.89,8.17-13.69-.07-1.92-3.07-1.93-3,0h0Z"/>
        <path d="M168.44,6.09c8.09,10.26,11.8,23.9,9.98,36.84-.12.83.37,2.04,1.45,1.9,7.6-.98,12.67-7.06,15.76-13.64,1.52-3.24,2.38-6.73,3.89-9.96,1.31-2.79,3.28-6.02,6.74-5.99,1.93.02,1.93-2.98,0-3-7.74-.07-9.92,9.12-12.11,14.83-2.43,6.32-6.89,13.82-14.28,14.76l1.45,1.9c1.99-14.13-1.91-28.56-10.75-39.76-1.2-1.51-3.31.62-2.12,2.12h0Z"/>
        <path d="M138.05,3.81c5.66,10.59,12.51,23.03,9.51,35.46-1.21,4.99-4,9.12-8.36,11.86-3.93,2.48-8.47,3.78-12.95,4.88s-9.34,1.85-13.69,3.6c-4.66,1.87-8.1,5.37-10.79,9.53s-4.72,8.85-7.45,13.07c-1.67,2.58-3.81,4.98-6.4,6.68-1.56,1.02-3.6,1.39-5.38,1.93-7.28,2.2-15.62,4.37-21.2,9.87-2.62,2.58-4.23,5.97-4.24,9.68,0,.98.11,1.96.29,2.93.2,1.11.43,2.71,1.17,3.58.8.93,2.16,1.67,3.22,2.28,1.29.75,2.68,1.37,4.09,1.84,10.64,3.58,21.79-1,32.37-2.43,5.42-.73,10.62.79,15.15,3.79,2.32,1.54,4.4,3.43,6.31,5.45,1.02,1.08,1.93,2.24,3.11,3.16s2.54,1.67,3.98,2.21c5.7,2.16,11.88.79,17.57-.64,2.95-.74,5.92-1.57,8.95-1.91,1.33-.15,2.67-.21,4.01-.13s3.08.17,4.08,1.11c7.66,7.2,7.36,17.87,4.84,27.31-1.29,4.85-3.12,9.54-5.06,14.15-2.63,6.24-4.72,13.04-5.47,19.79-.39,3.46-.26,6.95.48,10.35.61,2.81,1.28,5.61,1.9,8.43,1.23,5.64,2.35,11.33,2.96,17.08,1.17,11.21.28,22.77-5.62,32.63-.77,1.28-1.6,2.53-2.5,3.72-.39.52-.79,1.17-1.31,1.59s-1.23.74-1.81,1.07c-1.02.58-2.16,1.09-3.36.75-1.38-.38-2.83-1.56-3.92-2.44-4.39-3.54-7.26-8.54-9.81-13.47-1.34-2.59-2.7-5.13-4.14-7.66s-2.85-4.8-4.82-6.77c-.97-.97-2.13-1.99-3.36-2.63-1.36-.7-2.99-1.05-4.48-1.39-3.13-.71-6.35-1.08-9.45-1.95-4.35-1.22-8.42-3.74-11.26-7.27-2.45-3.04-3.83-6.77-4.57-10.57-1.66-8.5-.46-17.4.22-25.95.33-4.21.63-8.44.47-12.66-.09-2.37-.3-4.49-1.75-6.47s-3.68-3.49-5.81-4.86c-2.54-1.62-5.21-3.01-7.78-4.57-2.77-1.68-5.48-3.45-8.12-5.31-5.31-3.76-10.15-7.98-14.86-12.45-2.26-2.15-4.96-4.05-7.53-5.81s-5.31-3.32-8.23-4.45c-4.24-1.63-9.6-1.69-13.85-.03-4.46,1.74-7.51,5.31-8.89,9.86l2.51-.66c-.56-.57-.95-1.18-1.41-1.8-.14-.18-.06-.17-.08-.16,0-.22-.04-.09-.13.4-.33.44-.71.62-1.15.54-.19.15-.25-.39.04.27.25.57.21,1.22.17,1.82l2.56-1.06c-4.56-4.57-9.11-9.14-13.67-13.71-1.36-1.37-3.49.75-2.12,2.12,4.56,4.57,9.11,9.14,13.67,13.71.96.97,2.48.2,2.56-1.06.13-1.89-.77-5.69-3.48-5.01-1,.25-1.5,1.22-1.42,2.19.11,1.52,1.34,2.85,2.35,3.88.8.83,2.19.4,2.51-.66,1.4-4.65,4.9-7.7,9.66-8.57,5.31-.98,10.26.82,14.74,3.58,2.72,1.68,5.25,3.64,7.74,5.63s4.71,4.4,7.13,6.5c4.89,4.23,10.12,8.06,15.58,11.5,2.69,1.7,5.47,3.25,8.23,4.84,2.12,1.22,4.41,2.59,6.08,4.4.77.84,1.45,1.9,1.61,3.04.14.97.14,1.97.16,2.94.06,2.07,0,4.14-.09,6.21-.43,8.84-1.82,17.67-1.27,26.54.52,8.32,3.1,16.48,9.97,21.71,1.82,1.38,3.81,2.49,5.92,3.38,2.94,1.23,6.11,1.73,9.23,2.31s6.3.99,8.69,3.07c2.16,1.88,3.68,4.31,5.08,6.77,2.87,5.03,5.24,10.41,8.53,15.19,1.56,2.27,3.33,4.43,5.42,6.24s4.59,3.86,7.36,3.9c1.31.02,2.55-.42,3.69-1.02,1.05-.55,2.31-1.14,3.1-2.02,2.01-2.25,3.7-4.92,5.11-7.58,2.67-5.04,4.26-10.53,4.97-16.17,1.44-11.42-.68-23.01-3.12-34.14-.64-2.9-1.37-5.79-1.96-8.71-.7-3.47-.61-7.09-.07-10.57,1.01-6.43,3.18-12.7,5.66-18.7,3.8-9.17,7.46-19.35,6.02-29.43-.7-4.89-2.85-9.43-6.29-12.98-1.06-1.1-1.92-1.86-3.43-2.23-1.41-.35-2.89-.52-4.34-.55-3.06-.06-6.12.52-9.09,1.22-5.75,1.35-11.8,3.56-17.76,2.22-1.36-.31-2.67-.79-3.87-1.51-1.39-.83-2.36-1.97-3.44-3.14-1.9-2.07-3.98-3.98-6.25-5.65-4.37-3.21-9.81-5.39-15.3-5.3-2.68.04-5.42.65-8.04,1.16s-5.44,1.15-8.17,1.67c-5.29,1.01-10.88,1.78-16.19.47-1.3-.32-2.58-.75-3.79-1.34s-2.8-1.27-3.63-2.26c.1.12-.18-.36-.23-.5-.09-.29-.17-.58-.24-.88-.12-.47-.22-.94-.29-1.41-.14-.94-.17-1.91-.09-2.85.67-7.48,9.35-11.02,15.43-13.17,3.74-1.33,7.57-2.37,11.34-3.58,2.85-.91,4.97-2.97,7.06-5.04,1.87-1.85,3.25-4.23,4.55-6.5,2.41-4.21,4.39-8.75,7.37-12.61,1.42-1.84,3.11-3.5,5.1-4.72,2.14-1.32,4.51-1.99,6.92-2.63,8.88-2.34,18.91-3.46,26.04-9.82,9.28-8.28,8.29-22.09,4.37-32.76-2.07-5.63-4.87-10.95-7.69-16.24-.91-1.7-3.5-.19-2.59,1.51h0Z"/>
        <circle class="cls-1" cx="154.55" cy="154.55" r="153.05"/>
        </g>
    </g>
    </svg>
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

    let response = await fetch(studenten)
    let userInfo = await response.json()
   
    shuffleArray(userInfo.data);
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
            const medestudent = document.querySelector('div:nth-of-type(4) section:first-of-type ol')

            medestudent.insertAdjacentHTML('beforeend',userInfoHTML)
            i++;
        }

    });
    
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



/**
 * Pagina's omslaan van het boekje
 * Bestaande uit twee functies, waarbij de een de linkerkant op slaat en de andere de andere kant op slaat.
 * Bronnen: https://codepen.io/Nidhanshu/pen/YaLYgw .. om een opstart mee te maken, maar verder niet veel mee gedaan
 * Verdere bronnen Vasilis en Sanne
 */

var nextButton = document.querySelector('.nextButton');
var prevButton = document.querySelector('.prevButton');
var doublePage = 1;

nextButton.addEventListener('click', turnPageRight);
prevButton.addEventListener('click', turnPageLeft);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators even opnieuw inlezen over de js syntaxes

function turnPageRight() {
    console.log(doublePage);

        var paginaDieOmgeslagenMoetWorden = document.querySelector( "div:nth-of-type(" + doublePage + ")")

        if (paginaDieOmgeslagenMoetWorden) {
            paginaDieOmgeslagenMoetWorden.classList.add("omgeslagen");
            if(paginaDieOmgeslagenMoetWorden.nextElementSibling){
                doublePage = doublePage + 1;
            }
        }
        
};

function turnPageLeft() {
    console.log(doublePage);

         var paginaDieOmgeslagenMoetWorden = document.querySelector( "div:nth-of-type(" + doublePage + ")")

        if (paginaDieOmgeslagenMoetWorden) {
            paginaDieOmgeslagenMoetWorden.classList.remove("omgeslagen");
            if(paginaDieOmgeslagenMoetWorden.previousElementSibling){
                doublePage = doublePage - 1;
            }

        }

};


