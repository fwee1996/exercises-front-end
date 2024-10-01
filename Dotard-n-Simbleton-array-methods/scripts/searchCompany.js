// import { businessesArray } from "./database.js";
// const businesses = businessesArray();
// //add these two lines:
// export const companySearch = () => {
//     const outEl = document.querySelector("#container")

// //copy paste all below:
// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business =>
//                     business.companyName.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.companyName}
//                 </h2>
//                 <section>
//                 ${foundBusiness.addressFullStreet}

//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//             `;
//         }
//     });

// }



















// import { businessesArray } from "./database.js";
// const businesses = businessesArray();
// //add these two lines:
// export const companySearch = () => {
//     const outEl = document.querySelector("#container")

// //copy paste all below:
// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             const searchValue = keyPressEvent.target.value.trim();
//             console.log("Search value:", searchValue);

//             //if want to remove case senstivity:
//             // const foundBusiness = businesses.find(business =>
//             //     business.companyName.toLowerCase().includes(keyPressEvent.target.value.toLowerCase())
//             // );
            

//             // Find matching business---rmbr search is case sensitive with includes() method
//             const foundBusiness = businesses.find(business =>
//                 business.companyName.includes(searchValue)
//             );
//             console.log("Found business:", foundBusiness);

//             // Check if a business was found
//             if (foundBusiness) {
//                 outEl.innerHTML = `
//                     <h2>${foundBusiness.companyName}</h2>
//                     <section>${foundBusiness.addressFullStreet}</section>
//                     <section>${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}</section>
//                 `;
//             } else {
//                 // Display message if no matching business was found
//                 outEl.innerHTML = "<p>No matching business found.</p>";
//             }
//         }
//     });
// }


















//undefine issue--- 1 fixed.
import { businessesArray } from "./database.js";
const businesses = businessesArray();

export const companySearch = () => {
    const outEl = document.querySelector("#container");

    document.querySelector("#companySearch").addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            const searchValue = keyPressEvent.target.value.trim();
            console.log("Search value:", searchValue);

            // Find matching business (case insensitive)
            const foundBusiness = businesses.find(business =>
                business.companyName.toLowerCase().includes(searchValue.toLowerCase())
            );
            console.log("Found business:", foundBusiness);

            // Check if a business was found
            if (foundBusiness) {
                outEl.innerHTML = `
                    <h2>${foundBusiness.companyName}</h2>
                    <section>${foundBusiness.addressFullStreet}</section>
                    <section>${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}</section>
                `;
            } else {
                // Display message if no matching business was found
                outEl.innerHTML = "<p>No matching business found.</p>";
            }
        }
    });

    // Return an empty string to prevent "undefined" message
    return "";
};
