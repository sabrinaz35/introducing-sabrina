console.log("het werkt");



/**
 * Toevoegen van API
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
    `<figure>
    <h1>${userInfo.data.name}</h1>
    <p>${userInfo.data.birthdate}</p>
    <p>${userInfo.data.github_handle}</p>
    </figure>
    `
    const kaft = document.querySelector('div:first-of-type figure:first-of-type')

    kaft.insertAdjacentHTML('beforebegin',userInfoHTML)
}

// https://codepen.io/Nidhanshu/pen/YaLYgw om een opstart mee te maken, maar verder niet veel mee gedaan
// Vasilis heeft mij hier ook bij geholpen

var nextButton = document.querySelector('.nextButton');
var prevButton = document.querySelector('.prevButton');


// een waarde aan meegeven, zodat hij op basis daarvan de animatie kan gaan uitvoeren
// var doublePage = document.querySelectorAll('.page').length;

var doublePage = 1;




nextButton.addEventListener('click', turnPageRight);
prevButton.addEventListener('click', turnPageLeft);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators even opnieuw inlezen over de js syntaxes

function turnPageRight() {
    console.log(doublePage);

        //    doublePage = doublePage - 1;
        // var flippingPage = document.querySelector('.page:nth-of-type(' + doublePage + ')');
        //  flippingPage.classList.add("omgeslagen");
       

        var paginaDieOmgeslagenMoetWorden = document.querySelector( "div:nth-of-type(" + doublePage + ")")

        // console.log(paginaDieOmgeslagenMoetWorden)

        if (paginaDieOmgeslagenMoetWorden) {
            paginaDieOmgeslagenMoetWorden.classList.add("omgeslagen");
            if(paginaDieOmgeslagenMoetWorden.nextElementSibling){
                doublePage = doublePage + 1;
            }
        }
        


    

        //  var flippingPage = document.querySelector('main')
        //  flippingPage.children[doublePage].classList.add("omgeslagen");

    // if (doublePage>=1){
 

    //     // https://www.javascripttutorial.net/dom/css/check-if-an-element-contains-a-class/
    //     // if(Element.classList.contains('.omgeslagen')){
    //     // // https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling 
    //     // //  doublePage = 1
    //     // doublePage = doublePage.nextSibling;
    //     // }
    // } else {
    //     // doublePage = doublePage + 1;
    // }

    
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
            //doublePage = doublePage - 1;
        }
        

            // doublePage = doublePage + 1;
        // var flippingPage = document.querySelector('.page:nth-of-type(' + doublePage + ')');
        // flippingPage.classList.remove("omgeslagen");




//   if (doublePage>=1 || 0){
//         doublePage = doublePage + 1;
//         var flippingPage = document.querySelector('.page:nth-of-type(' + doublePage + ')');
//         flippingPage.classList.remove("omgeslagen");

//         // if(doublePage == 1){
//         //  document.querySelector('.page:nth-of-type(' + doublePage + ')').classList.remove("omgeslagen");
//         //  doublePage = 2
//         // }
//     } else {
//         // doublePage = doublePage
//     }

};


