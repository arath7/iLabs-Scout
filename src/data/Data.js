// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

const Preparation = [
    {name: ' ', section: ['Wants & Needs'], 'Position': 1 },
    {name: 'Homebuying Class', section: ['Homebuying Education'], 'Position': 1 },
    {name: 'Personal Bank', section: ['Create Your Budget', 'Build Your Credit'], 'Position': 1},
    {name: 'Credit Report', section: ['Build Your Credit'], 'Position': 1},
    {name: 'Bank Statements', section: ['Gather Documents'], 'Position': 1},
    {name: 'Tax Returns', section: ['Gather Documents'], 'Position': 1},
    {name: 'Pay Stubs', section: ['Gather Documents'], 'Position': 1},
]

const Exploration = [
    {name: 'Lender', section: ['Build Your Team', 'Pre-Approval'], 'Position': 1},
    {name: 'Real Estate Agent', section: ['Build Your Team', 'Begin Your Search', 'Choose Your Home'], 'Position': 1},
    {name: 'Downpayment Assistance', section: ['Choose Your Home'], 'Position': 3},
    {name: 'Home Databases', section: ['Begin Your Search'], 'Position': 3},
    {name: 'Loan Officer', section: ['Pre-Approval'], 'Position': 2},
    {name: 'Attorney', section: ['Build Your Team'], 'Position': 2},
    {name: 'Inspector', section: ['Build Your Team'], 'Position': 2},
    {name: 'Seller', section: ['Choose Your Home'], 'Position': 2}
]

const Initiation = [
    {name: 'Real Estate Agent', section: ['Make An Offer', 'Purchase & Sale Agreement'], 'Position': 1},
    {name: 'Pre-Approval Letter', section: ['Make An Offer'], 'Position': 1},
    {name: 'Deed', section: ['Make An Offer'], 'Position': 1},
    {name: 'Inspector', section: ['Home Inspection'], 'Position': 2},
    {name: 'Attorney', section: ['Purchase & Sale Agreement'], 'Position': 2},
    {name: 'Mortgage Application', section: ['Apply for a Mortgage'], 'Position': 3},
    {name: 'Purchase & Sale Agreement', section: ['Purchase & Sale Agreement'], 'Position': 3},
    {name: 'Seller', section: ['Make An Offer', 'Purchase & Sale Agreement'], 'Position': 2},
    {name: 'Lender', section: ['Apply for a Mortgage'], 'Position': 1},
    {name: 'Appraisal', section: ['Apply for a Mortgage'], 'Position': 3},
    {name: 'Mortgage Commitment Letter', section: ['Apply for a Mortgage'], 'Position': 3}
]

const Finalization = [
    { name: 'Home Insurance', section: ['Shop for Home Insurance'], 'Position': 3 },
    { name: 'Realtor', section: ['Final Walkthrough'], 'Position': 1 },
    { name: 'Seller', section: ['Final Walkthrough'], 'Position': 2 },
    { name: 'Closing Costs', section: ['Closing'], 'Position': 3 },
    { name: 'Attorney', section: ['Closing'], 'Position': 2 },
    { name: 'Lender', section: ['Closing'], 'Position': 1 }
]



// shuffleArray(Preparation);
// shuffleArray(Exploration);
// shuffleArray(Initiation);
// shuffleArray(Finalization);

export { Preparation, Exploration, Initiation, Finalization };

