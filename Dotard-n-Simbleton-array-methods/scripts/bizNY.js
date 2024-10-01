// import { businessArray } from "./database.js"

// const businesses=businessArray()

// // Array to contain all the New York businesses
// export const NYBusinessArray = ()=> {//this line is added ---export to main----


// //below is copy paste:
// const newYorkBusinesses = businesses.filter(business => {
//     let inNewYork = false
  
//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
  
//     return inNewYork
//   })



  //copy paste from database.js: --this is html sent to main 
//   const outEl= document.querySelector("#container") 
    
//     outEl.innerHTML+= "<h1>New York Businesses</h1>"

//     //check const name above:
//     newYorkBusinesses.forEach(business => {
//         outEl.innerHTML += `
//      <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//     `
//     outEl.innerHTML+="<hr/>"
//     })
    
//     //don't forget to return the html!!
//     return outEl
//     }














// import { businessesArray } from "./database.js";

// // Array to contain all the New York businesses
// export const NYBusinessArray = () => {
//     const businesses = businessesArray(); // Get the array of businesses

//     // Filter businesses located in New York
//     const newYorkBusinesses = businesses.filter(business => {
//         return business.addressStateCode === "NY";
//     });

//     // Create HTML string for New York businesses
//     let html = "<h1>New York Businesses</h1>";

//     newYorkBusinesses.forEach(business => {
//         html += `
//             <h2>${business.companyName}</h2>
//             <section>
//                 ${business.addressFullStreet}
//             </section>
//             <hr/>
//         `;
//     });

//     // Create a container element
//     const outEl = document.createElement("div");

//     // Set the HTML content to the container's innerHTML
//     outEl.innerHTML = html;

//     // Return the container element
//     return outEl;
// };










//undefined issue:
import { businessesArray } from "./database.js";

export const NYBusinessArray = () => {
    const businesses = businessesArray(); // Get the array of businesses

    // Filter businesses located in New York
    const newYorkBusinesses = businesses.filter(business => {
        return business.addressStateCode === "NY";
    });

    // Check if there are any New York businesses
    if (newYorkBusinesses.length === 0) {
        return "<p>No New York businesses found.</p>";
    }

    // Create HTML string for New York businesses
    let html = "<h1>New York Businesses</h1>";
    
    newYorkBusinesses.forEach(business => {
        html += `
            <h2>${business.companyName}</h2>
            <section>
                ${business.addressFullStreet}
            </section>
            <hr/>
        `;
    });

    // Create a container element
    const outEl = document.createElement("div");

    // Set the HTML content to the container's innerHTML
    outEl.innerHTML = html;

    // Return the container element
    return outEl;
};




