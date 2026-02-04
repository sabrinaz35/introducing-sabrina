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
    `<article>
    <h1>${userInfo.data.name}</h1>
    <p>${userInfo.data.birthdate}</p>
    <p>${userInfo.data.github_handle}</p>
    </article>
    `

    document.body.insertAdjacentHTML('beforebegin',userInfoHTML)
}


/**
 * Een functie dat zodra er op een sectie geklikt wordt dat er dan een pagina omgeslagen wordt
 */


// let pagina = document.querySelector("div:first-of-type");

// pagina.addEventListener('click', flippingAnimation);

// function flippingAnimation(){
//     let onePage = document.querySelector("section");
    
//     onePage.classlist.add('animate');
// };

