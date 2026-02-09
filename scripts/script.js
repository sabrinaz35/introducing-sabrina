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


medeWebbersInfo();

async function medeWebbersInfo ( ) {
       const baseURL = 'https://fdnd.directus.app/items'
    const endpoint = '/person/?page=3&limit=2'
    const url = baseURL + endpoint

    let response = await fetch(url)

    let userInfo = await response.json()
   
    console.log(userInfo)

    userInfo.forEach( function(userInfo){

    let userInfoHTML =
    `<article>
    <h3>${userInfo.data.name} </h3>
    <p>Birthday: ${userInfo.data.birthdate}</p>
    <p>Githandle: ${userInfo.data.github_handle}</p>
    </article>
    `
    const kaft = document.querySelector('div:last-of-type section:first-of-type')

    kaft.insertAdjacentHTML('beforeend',userInfoHTML)

    });
    
};





/**
 * Pagina's omslaan van het boekje
 */

// https://codepen.io/Nidhanshu/pen/YaLYgw om een opstart mee te maken, maar verder niet veel mee gedaan
// Vasilis en Sanne hebben mij hier beide bij geholpen

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





