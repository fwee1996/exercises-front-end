// import { businessesArray } from "./database.js";
// const businesses = businessesArray();

// export const purchasingAgent=()=>{
//     const outEl = document.querySelector("#container");
//  outEl.innerHTML += "<h1>Purchasing Agents</h1>";

// /*
//     Using map(), you extract the purchasing agent object
//     from each business and store it in a new array
// */
// const agents = businesses.map(business => {
//     return business.purchasingAgent
// })

// // // Extract company names and phone numbers using map()
// const companies = businesses.map(business => business.companyName);
// const phoneNumbers = businesses.map(business => business.phoneWork);


// agents.forEach((agent,index) => {

//     const company=companies[index];
//     const phone = phoneNumbers[index];

//   outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>
//   <h3>${company}</h3>
//   <h3>${phone}</h3> `;
//   outEl.innerHTML += "<hr/>";
// });

// return outEl.innerHTML}






// export const purchasingAgent = () => {
//     const outEl = document.querySelector("#container");
//     outEl.innerHTML += "<h1>Purchasing Agents</h1>";

// /*
//     Using map(), you extract the purchasing agent object
//     from each business and store it in a new array
// */
//     const agents = businesses.map(business => {
//         return business.purchasingAgent;
//     });

//     const companies = businesses.map(business => business.companyName);
//     const phoneNumbers = businesses.map(business => business.phoneWork);

//     agents.forEach((agent, index) => {
//         const company = companies[index];
//         const phone = phoneNumbers[index];

//         // Check if agent, company, and phone are defined
//         if (agent && company && phone) {
//             outEl.innerHTML += `<h2>${agent.nameFirst} ${agent.nameLast}</h2>
//             <h3>${company}</h3>
//             <h3>${phone}</h3> `;
//             outEl.innerHTML += "<hr/>";
//         }
//     });

//     return outEl.innerHTML;
// };



//Best:
import { businessesArray } from "./database.js";

// // Function to generate HTML content for purchasing agents
// export const purchasingAgent = () => {
//     // Get the array of businesses
    const businesses = businessesArray();

//     // Create a variable to hold the HTML content
//     let html = "<h1>Purchasing Agents</h1>";

//     // Extract purchasing agent information from businesses
//     businesses.forEach(business => {
//         // Extract purchasing agent, company name, and phone number
//         const { purchasingAgent, companyName, phoneWork } = business;

//         // Check if all required data is available
//         if (purchasingAgent && companyName && phoneWork) {
//             // Append purchasing agent information to the HTML content
//             html += `
//                 <h2>${purchasingAgent.nameFirst} ${purchasingAgent.nameLast}</h2>
//                 <h3>${companyName}</h3>
//                 <h3>${phoneWork}</h3>
//                 <hr/>
//             `;
//         }
//     });

//     // Return the HTML content
//     return html;
// };









//Alt find() method
// export const purchasingAgents = (companies, phoneNumbers) => {
//     const outEl = document.querySelector("#output");
//     outEl.innerHTML += "<h1>Purchasing Agents</h1>";

//     // Extract agent names using map()
//     const agentNames = businesses.map(business => {
//         return business.purchasingAgent.nameFirst + " " + business.purchasingAgent.nameLast;
//     });

//     // Extract agent info using map()
//     const purchasingAgentInfo = businesses.map(business => {
//         return {
//             agentNumber: business.phoneWork,
//             agentCompany: business.companyName
//         };
//     });

//     console.table(agentNames);
//     console.table(purchasingAgentInfo);

//     // Loop through each agent using forEach
//     agentNames.forEach(agentName => {
//         const agent = purchasingAgentInfo.find(info => info.agentCompany === companies[agentNames.indexOf(agentName)]);
//         outEl.innerHTML += `
//             <h2>${agentName}</h2>
//             <h3>${agent.agentCompany}</h3>
//             <h3>${agent.agentNumber}</h3>
//         `;
//         outEl.innerHTML += "<hr/>";
//     });
// };

//sarah;s:
export const purchasingAgent = () => {

    
    const outEl = document.querySelector("#container")
    outEl.innerHTML += "<h1>Purchasing Agents</h1>";
    
    /*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
    */



   const agents = businesses.map(business => {
       return business.purchasingAgent
    })
    const agentName = agents.map(singleAgent => {
        const agentFullName = singleAgent.nameFirst + " " + singleAgent.nameLast
        return agentFullName
    })

    const purchasingAgentInfo = businesses.map(singleBusiness => {
        const agentNumber = singleBusiness.phoneWork
        const agentCompany = singleBusiness.companyName

          return { agentNumber, agentCompany}
    })
     console.table(agents)
     console.table(purchasingAgentInfo)
     
     purchasingAgentInfo.forEach(agent => {
        agentName.map(singleName => {

            outEl.innerHTML += `<h2>${singleName}</h2>
                                <h3>${agent.agentCompany}</h3>
                                <h3>${agent.agentNumber}</h3>
                                `;
            outEl.innerHTML += "<hr/>";
        })
     });

return outEl.innerHTML
}