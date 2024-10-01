// import { businessArray } from "./database.js"
// import { NYBusinessArray } from "./bizNY.js"
// import { purchasingAgent } from "./purchasingAgents.js"
// import { companySearch } from "./searchCompany.js"

// const container = document.querySelector("#container")

// export const render = () => { //add export

//     const activeBizHTML=businessArray() //forEach
//     const nyBiz=NYBusinessArray()
//     const purchasingAgentHTML=purchasingAgent()
//     const searchComp=companySearch()
//     // ${activeBizHTML.innerHTML} rmbr .innerHTML otherwise wont display
//     const composedHTML = `
//         <h1>Businesses</h1>

//             <section class="activeBiz">
//             ${activeBizHTML}
//             </section>

//             <section class="NYBiz">
//             ${nyBiz.innerHTML}
//             </section>


//             <section class="purchaseA">
//             ${purchasingAgentHTML}
//             </section>

//             <section class="searchComp">
//             ${searchComp}
//             </section>
 
 
//     `

//     container.innerHTML = composedHTML
    
// }

//  render()


import { businessArray } from "./database.js";
import { NYBusinessArray } from "./bizNY.js";
import { purchasingAgent } from "./purchasingAgents.js";
import { companySearch } from "./searchCompany.js";

const container = document.querySelector("#container");

export const render = () => {
    const activeBizHTML = businessArray(); // Call the function to get the HTML
    const nyBiz = NYBusinessArray();
    const purchasingAgentHTML = purchasingAgent();
    const searchComp = companySearch();

    const composedHTML = `
        <h1>Businesses</h1>

        <section class="activeBiz">
            ${activeBizHTML}
        </section>

        <section class="NYBiz">
            ${nyBiz.innerHTML}
        </section>
        
        <section class="purchaseA">
            ${purchasingAgentHTML}
        </section>

        <section class="searchComp">
            ${searchComp}
        </section>
    `;

    container.innerHTML = composedHTML;
};

render();
