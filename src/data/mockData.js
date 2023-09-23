import { tokens } from "../theme";

// export const mockDataTeam = [
//   {
//     id: 1,
//     name: "Jon Snow",
//     email: "jonsnow@gmail.com",
//     age: 35,
//     phone: "(665)121-5454",
//     access: "admin",
//   },
//   {
//     id: 2,
//     name: "Cersei Lannister",
//     email: "cerseilannister@gmail.com",
//     age: 42,
//     phone: "(421)314-2288",
//     access: "manager",
//   },
//   {
//     id: 3,
//     name: "Jaime Lannister",
//     email: "jaimelannister@gmail.com",
//     age: 45,
//     phone: "(422)982-6739",
//     access: "user",
//   },
//   {
//     id: 4,
//     name: "Anya Stark",
//     email: "anyastark@gmail.com",
//     age: 16,
//     phone: "(921)425-6742",
//     access: "admin",
//   },
//   {
//     id: 5,
//     name: "Daenerys Targaryen",
//     email: "daenerystargaryen@gmail.com",
//     age: 31,
//     phone: "(421)445-1189",
//     access: "user",
//   },
//   {
//     id: 6,
//     name: "Ever Melisandre",
//     email: "evermelisandre@gmail.com",
//     age: 150,
//     phone: "(232)545-6483",
//     access: "manager",
//   },
//   {
//     id: 7,
//     name: "Ferrara Clifford",
//     email: "ferraraclifford@gmail.com",
//     age: 44,
//     phone: "(543)124-0123",
//     access: "user",
//   },
//   {
//     id: 8,
//     name: "Rossini Frances",
//     email: "rossinifrances@gmail.com",
//     age: 36,
//     phone: "(222)444-5555",
//     access: "user",
//   },
//   {
//     id: 9,
//     name: "Harvey Roxie",
//     email: "harveyroxie@gmail.com",
//     age: 65,
//     phone: "(444)555-6239",
//     access: "admin",
//   },
// ];

// export const mockDataContacts = [
//   {
//     id: 1,
//     name: "Jon Snow",
//     email: "jonsnow@gmail.com",
//     age: 35,
//     phone: "(665)121-5454",
//     address: "0912 Won Street, Alabama, SY 10001",
//     city: "New York",
//     zipCode: "10001",
//     registrarId: 123512,
//   },
//   {
//     id: 2,
//     name: "Cersei Lannister",
//     email: "cerseilannister@gmail.com",
//     age: 42,
//     phone: "(421)314-2288",
//     address: "1234 Main Street, New York, NY 10001",
//     city: "New York",
//     zipCode: "13151",
//     registrarId: 123512,
//   },
//   {
//     id: 3,
//     name: "Jaime Lannister",
//     email: "jaimelannister@gmail.com",
//     age: 45,
//     phone: "(422)982-6739",
//     address: "3333 Want Blvd, Estanza, NAY 42125",
//     city: "New York",
//     zipCode: "87281",
//     registrarId: 4132513,
//   },
//   {
//     id: 4,
//     name: "Anya Stark",
//     email: "anyastark@gmail.com",
//     age: 16,
//     phone: "(921)425-6742",
//     address: "1514 Main Street, New York, NY 22298",
//     city: "New York",
//     zipCode: "15551",
//     registrarId: 123512,
//   },
//   {
//     id: 5,
//     name: "Daenerys Targaryen",
//     email: "daenerystargaryen@gmail.com",
//     age: 31,
//     phone: "(421)445-1189",
//     address: "11122 Welping Ave, Tenting, CD 21321",
//     city: "Tenting",
//     zipCode: "14215",
//     registrarId: 123512,
//   },
//   {
//     id: 6,
//     name: "Ever Melisandre",
//     email: "evermelisandre@gmail.com",
//     age: 150,
//     phone: "(232)545-6483",
//     address: "1234 Canvile Street, Esvazark, NY 10001",
//     city: "Esvazark",
//     zipCode: "10001",
//     registrarId: 123512,
//   },
//   {
//     id: 7,
//     name: "Ferrara Clifford",
//     email: "ferraraclifford@gmail.com",
//     age: 44,
//     phone: "(543)124-0123",
//     address: "22215 Super Street, Everting, ZO 515234",
//     city: "Evertin",
//     zipCode: "51523",
//     registrarId: 123512,
//   },
//   {
//     id: 8,
//     name: "Rossini Frances",
//     email: "rossinifrances@gmail.com",
//     age: 36,
//     phone: "(222)444-5555",
//     address: "4123 Ever Blvd, Wentington, AD 142213",
//     city: "Esteras",
//     zipCode: "44215",
//     registrarId: 512315,
//   },
//   {
//     id: 9,
//     name: "Harvey Roxie",
//     email: "harveyroxie@gmail.com",
//     age: 65,
//     phone: "(444)555-6239",
//     address: "51234 Avery Street, Cantory, ND 212412",
//     city: "Colunza",
//     zipCode: "111234",
//     registrarId: 928397,
//   },
//   {
//     id: 10,
//     name: "Enteri Redack",
//     email: "enteriredack@gmail.com",
//     age: 42,
//     phone: "(222)444-5555",
//     address: "4123 Easer Blvd, Wentington, AD 142213",
//     city: "Esteras",
//     zipCode: "44215",
//     registrarId: 533215,
//   },
//   {
//     id: 11,
//     name: "Steve Goodman",
//     email: "stevegoodmane@gmail.com",
//     age: 11,
//     phone: "(444)555-6239",
//     address: "51234 Fiveton Street, CunFory, ND 212412",
//     city: "Colunza",
//     zipCode: "1234",
//     registrarId: 92197,
//   },
// ];

export const feedbackData = [
  {
    id: 1,
    Date: "2023-09-01",
    feedback_type: "Academic Performance",
    feedback_content: "Excellent performance in the recent math exam. Keep it up!",
    Rating: 5,
    Strengths: "Strong problem-solving skills",
    "Action Items": "Consider tackling more challenging math problems for further growth.",
  },
  {
    id: 2,
    Date: "2023-09-03",
    feedback_type: "Behavior",
    feedback_content: "Impressive teamwork during the science project presentation.",
    Rating: 4,
    Strengths: "Excellent communication and collaboration",
    "Action Items": "Continue fostering a positive team spirit in group projects.",
  },
  {
    id: 3,
    Date: "2023-09-05",
    feedback_type: "Communication",
    feedback_content: "Great improvement in verbal communication skills during class discussions.",
    Rating: 4,
    Strengths: "Active participation and clarity in expressing ideas",
    "Action Items": "Keep engaging in class discussions to further enhance communication.",
  },
  {
    id: 4,
    Date: "2023-09-08",
    feedback_type: "Academic Performance",
    feedback_content: "Struggled with the recent history quiz. Let's work on study strategies.",
    Rating: 3,
    Strengths: "Strong critical thinking skills",
    "Action Items": "Explore new study techniques to improve quiz performance.",
  },
  {
    id: 5,
    Date: "2023-09-10",
    feedback_type: "Behavior",
    feedback_content: "Respectful behavior towards peers and teachers observed in the classroom.",
    Rating: 5,
    Strengths: "Positive attitude and respect for others",
    "Action Items": "Maintain respectful behavior and serve as a role model.",
  },
  {
    id: 6,
    Date: "2023-09-12",
    feedback_type: "Communication",
    feedback_content: "Written assignments demonstrate improved writing skills.",
    Rating: 4,
    Strengths: "Effective written communication and clarity",
    "Action Items": "Continue practicing and refining writing skills.",
  },
  {
    id: 7,
    Date: "2023-09-15",
    feedback_type: "Academic Performance",
    feedback_content: "Solid understanding of chemistry concepts. Keep up the good work!",
    Rating: 5,
    Strengths: "Quick grasp of complex concepts",
    "Action Items": "Explore advanced topics in chemistry to challenge yourself.",
  },
  {
    id: 8,
    Date: "2023-09-18",
    feedback_type: "Behavior",
    feedback_content: "Participated actively in extracurricular activities. Impressive commitment.",
    Rating: 4,
    Strengths: "Dedication and enthusiasm for extracurriculars",
    "Action Items": "Continue contributing positively to school activities.",
  },
  {
    id: 9,
    Date: "2023-09-20",
    feedback_type: "Communication",
    feedback_content: "Effective use of visual aids during the history presentation.",
    Rating: 4,
    Strengths: "Strong presentation and visual communication skills",
    "Action Items": "Explore advanced presentation techniques to enhance impact.",
  },
  {
    id: 10,
    Date: "2023-09-22",
    feedback_type: "Academic Performance",
    feedback_content: "Good progress in the coding course. Keep practicing!",
    Rating: 4,
    Strengths: "Coding logic and problem-solving abilities",
    "Action Items": "Continue coding projects to further develop programming skills.",
  },
];

console.log(feedbackData);
export const grantsArray = [
  {
    id: 1,
    grantTitle: "Educational Grant 2023",
    eligibilityCriteria: "Students pursuing higher education",
    applicationDeadline: "October 15, 2023",
    fundingAmount: "₹50,000",
    grantDuration: "1 academic year",
    applicationLink: "https://example.com/educational-grant-application",
  },
  {
    id: 2,
    grantTitle: "Community Development Grant",
    eligibilityCriteria: "Non-profit organizations serving local communities",
    applicationDeadline: "November 30, 2023",
    fundingAmount: "₹100,000",
    grantDuration: "2 years",
    applicationLink: "https://example.com/community-development-grant-application",
  },
  {
    id: 3,
    grantTitle: "Research Grant for Science Projects",
    eligibilityCriteria: "Scientists and researchers in the field of science",
    applicationDeadline: "December 10, 2023",
    fundingAmount: "₹75,000",
    grantDuration: "Research project duration",
    applicationLink: "https://example.com/research-grant-application",
  },
  {
    id: 4,
    grantTitle: "Arts and Culture Grant",
    eligibilityCriteria: "Artists and cultural organizations",
    applicationDeadline: "January 20, 2024",
    fundingAmount: "₹60,000",
    grantDuration: "1 year",
    applicationLink: "https://example.com/arts-and-culture-grant-application",
  },
  {
    id: 5,
    grantTitle: "Environmental Conservation Grant",
    eligibilityCriteria: "Environmental NGOs and activists",
    applicationDeadline: "February 15, 2024",
    fundingAmount: "₹90,000",
    grantDuration: "3 years",
    applicationLink: "https://example.com/environmental-conservation-grant-application",
  },
  {
    id: 6,
    grantTitle: "Small Business Startup Grant",
    eligibilityCriteria: "Entrepreneurs and startups",
    applicationDeadline: "March 10, 2024",
    fundingAmount: "₹30,000",
    grantDuration: "1 year",
    applicationLink: "https://example.com/small-business-grant-application",
  },
  {
    id: 7,
    grantTitle: "Healthcare Research Grant",
    eligibilityCriteria: "Medical researchers and healthcare institutions",
    applicationDeadline: "April 5, 2024",
    fundingAmount: "₹85,000",
    grantDuration: "Research project duration",
    applicationLink: "https://example.com/healthcare-research-grant-application",
  },
  {
    id: 8,
    grantTitle: "STEM Education Grant",
    eligibilityCriteria: "Educators and schools promoting STEM education",
    applicationDeadline: "May 15, 2024",
    fundingAmount: "₹40,000",
    grantDuration: "1 school year",
    applicationLink: "https://example.com/stem-education-grant-application",
  },
  {
    id: 9,
    grantTitle: "Community Health Initiative Grant",
    eligibilityCriteria: "Community health organizations",
    applicationDeadline: "June 30, 2024",
    fundingAmount: "₹70,000",
    grantDuration: "2 years",
    applicationLink: "https://example.com/community-health-grant-application",
  },
  {
    id: 10,
    grantTitle: "Innovation in Technology Grant",
    eligibilityCriteria: "Tech startups and innovators",
    applicationDeadline: "July 20, 2024",
    fundingAmount: "₹120,000",
    grantDuration: "18 months",
    applicationLink: "https://example.com/technology-grant-application",
  },
  {
    id: 11,
    grantTitle: "Literacy Enhancement Grant",
    eligibilityCriteria: "Educational institutions and literacy programs",
    applicationDeadline: "August 10, 2024",
    fundingAmount: "₹55,000",
    grantDuration: "1 school year",
    applicationLink: "https://example.com/literacy-enhancement-grant-application",
  },
  {
    id: 12,
    grantTitle: "Sports Development Grant",
    eligibilityCriteria: "Sports organizations and athletes",
    applicationDeadline: "September 25, 2024",
    fundingAmount: "₹80,000",
    grantDuration: "2 years",
    applicationLink: "https://example.com/sports-development-grant-application",
  },
];
export const loansArray = [
  {
    id: 1,
    loanType: "Personal Loan",
    interestRate: "8.5%",
    loanAmount: "$10,000",
    loanTerm: "3 years",
    eligibilityCriteria: "Good credit score required",
    applicationLink: "https://example.com/personal-loan-application",
  },
  {
    id: 2,
    loanType: "Home Mortgage",
    interestRate: "3.9%",
    loanAmount: "$200,000",
    loanTerm: "30 years",
    eligibilityCriteria: "Property appraisal and income verification",
    applicationLink: "https://example.com/mortgage-loan-application",
  },
  {
    id: 3,
    loanType: "Auto Loan",
    interestRate: "4.2%",
    loanAmount: "$25,000",
    loanTerm: "5 years",
    eligibilityCriteria: "Minimum down payment required",
    applicationLink: "https://example.com/auto-loan-application",
  },
  {
    id: 4,
    loanType: "Small Business Loan",
    interestRate: "6.0%",
    loanAmount: "$50,000",
    loanTerm: "10 years",
    eligibilityCriteria: "Business plan and financial statements",
    applicationLink: "https://example.com/business-loan-application",
  },
  {
    id: 5,
    loanType: "Student Loan",
    interestRate: "3.0%",
    loanAmount: "$20,000",
    loanTerm: "15 years",
    eligibilityCriteria: "Enrolled in an accredited institution",
    applicationLink: "https://example.com/student-loan-application",
  },
  {
    id: 6,
    loanType: "Debt Consolidation Loan",
    interestRate: "7.5%",
    loanAmount: "$15,000",
    loanTerm: "5 years",
    eligibilityCriteria: "Existing debt details required",
    applicationLink: "https://example.com/debt-consolidation-loan-application",
  },
  {
    id: 7,
    loanType: "Business Expansion Loan",
    interestRate: "5.8%",
    loanAmount: "$100,000",
    loanTerm: "7 years",
    eligibilityCriteria: "Business growth plan and financial history",
    applicationLink: "https://example.com/business-expansion-loan-application",
  },
  {
    id: 8,
    loanType: "Medical Expenses Loan",
    interestRate: "6.2%",
    loanAmount: "$30,000",
    loanTerm: "3 years",
    eligibilityCriteria: "Medical bills and treatment plan",
    applicationLink: "https://example.com/medical-expenses-loan-application",
  },
  {
    id: 9,
    loanType: "Vacation Loan",
    interestRate: "9.0%",
    loanAmount: "$5,000",
    loanTerm: "2 years",
    eligibilityCriteria: "Purpose of vacation and travel itinerary",
    applicationLink: "https://example.com/vacation-loan-application",
  },
  {
    id: 10,
    loanType: "Home Improvement Loan",
    interestRate: "4.5%",
    loanAmount: "$15,000",
    loanTerm: "7 years",
    eligibilityCriteria: "Home renovation plans and estimates",
    applicationLink: "https://example.com/home-improvement-loan-application",
  },
  {
    id: 11,
    loanType: "Emergency Cash Loan",
    interestRate: "11.5%",
    loanAmount: "$2,000",
    loanTerm: "1 year",
    eligibilityCriteria: "Urgent financial need and income verification",
    applicationLink: "https://example.com/emergency-cash-loan-application",
  },
  {
    id: 12,
    loanType: "Green Energy Loan",
    interestRate: "5.5%",
    loanAmount: "$12,000",
    loanTerm: "5 years",
    eligibilityCriteria: "Energy-efficient home improvement plan",
    applicationLink: "https://example.com/green-energy-loan-application",
  },
];
export const incentivesArray = [
  {
    id: 1,
    incentiveTitle: "Energy Efficiency Rebate",
    description: "Get cash back for energy-efficient upgrades",
    eligibilityCriteria: "Homeowners and businesses",
    applicationDeadline: "December 31, 2023",
    amount: "₹35,000",
    applicationLink: "https://example.com/energy-efficiency-rebate-application",
  },
  {
    id: 2,
    incentiveTitle: "Green Transportation Voucher",
    description: "Receive a voucher for eco-friendly commuting",
    eligibilityCriteria: "Residents in designated areas",
    applicationDeadline: "March 15, 2024",
    amount: "₹7,000",
    applicationLink: "https://example.com/green-transportation-voucher-application",
  },
  {
    id: 3,
    incentiveTitle: "Solar Panel Installation Grant",
    description: "Fund your solar energy project",
    eligibilityCriteria: "Homeowners and nonprofits",
    applicationDeadline: "June 30, 2024",
    amount: "₹1,40,000",
    applicationLink: "https://example.com/solar-panel-grant-application",
  },
  {
    id: 4,
    incentiveTitle: "Youth Education Scholarship",
    description: "Supporting education for young minds",
    eligibilityCriteria: "High school seniors",
    applicationDeadline: "April 10, 2024",
    amount: "₹70,000",
    applicationLink: "https://example.com/youth-education-scholarship-application",
  },
  {
    id: 5,
    incentiveTitle: "Small Business Innovation Award",
    description: "Funding innovative small business ideas",
    eligibilityCriteria: "Entrepreneurs and startups",
    applicationDeadline: "July 25, 2024",
    amount: "₹3,50,000",
    applicationLink: "https://example.com/small-business-innovation-award-application",
  },
  {
    id: 6,
    incentiveTitle: "Community Beautification Grant",
    description: "Enhance your community's appearance",
    eligibilityCriteria: "Community groups and organizations",
    applicationDeadline: "September 15, 2024",
    amount: "₹1,05,000",
    applicationLink: "https://example.com/community-beautification-grant-application",
  },
  {
    id: 7,
    incentiveTitle: "Healthy Lifestyle Subsidy",
    description: "Subsidy for gym memberships and wellness programs",
    eligibilityCriteria: "Residents with health goals",
    applicationDeadline: "February 28, 2024",
    amount: "₹14,000",
    applicationLink: "https://example.com/healthy-lifestyle-subsidy-application",
  },
  {
    id: 8,
    incentiveTitle: "Arts and Culture Sponsorship",
    description: "Supporting local arts and cultural events",
    eligibilityCriteria: "Artists and event organizers",
    applicationDeadline: "November 20, 2023",
    amount: "₹52,500",
    applicationLink: "https://example.com/arts-culture-sponsorship-application",
  },
  {
    id: 9,
    incentiveTitle: "Tech Education Grant",
    description: "Funding technology education initiatives",
    eligibilityCriteria: "Educational institutions",
    applicationDeadline: "May 10, 2024",
    amount: "₹2,10,000",
    applicationLink: "https://example.com/tech-education-grant-application",
  },
  {
    id: 10,
    incentiveTitle: "Community Service Award",
    description: "Recognizing outstanding community service",
    eligibilityCriteria: "Volunteers and organizations",
    applicationDeadline: "August 5, 2024",
    amount: "₹35,000",
    applicationLink: "https://example.com/community-service-award-application",
  },
  {
    id: 11,
    incentiveTitle: "Environmental Conservation Grant",
    description: "Supporting eco-friendly initiatives",
    eligibilityCriteria: "Environmental organizations",
    applicationDeadline: "January 5, 2024",
    amount: "₹84,000",
    applicationLink: "https://example.com/environmental-conservation-grant-application",
  },
  {
    id: 12,
    incentiveTitle: "Agricultural Innovation Fund",
    description: "Funding innovative farming practices",
    eligibilityCriteria: "Farmers and agricultural researchers",
    applicationDeadline: "October 10, 2024",
    amount: "₹1,75,000",
    applicationLink: "https://example.com/agricultural-innovation-fund-application",
  },
];




export const mockDataContacts=[
  {
    id:1,
    Name: "John Smith",
    Qualifications: "Ph.D. in Physics",
    Specializations: "Quantum Mechanics, Thermodynamics",
    Experience: "15 years",
    TeachingMethods: "Interactive lectures, hands-on experiments",
    AwardsAndRecognition: "Best Physics Teacher 2020",
    RatingsAndReviews: "4.8 stars (32 reviews)",
    ContactInformation: {
      Email: "john.smith@example.com",
      Phone: "+1 (123) 456-7890",
      OfficeHours: "Monday and Wednesday, 2:00 PM - 4:00 PM",
    },

      LinkedIn: "linkedin.com/in/johnsmith",

  },
  {
    id:2,
    Name: "Mary Johnson",
    Qualifications: "M.A. in Literature",
    Specializations: "American Literature, Poetry",
    Experience: "12 years",
    TeachingMethods: "Socratic seminars, close reading",
    AwardsAndRecognition: "Outstanding Literature Educator 2019",
    RatingsAndReviews: "4.9 stars (28 reviews)",
    ContactInformation: {
      Email: "mary.johnson@example.com",
      Phone: "+1 (987) 654-3210",
      OfficeHours: "Tuesday and Thursday, 10:00 AM - 12:00 PM",
    },

      LinkedIn: "linkedin.com/in/maryjohnson",
    
  },

  {
    id:3,
    Name: "David Lee",
    Qualifications: "M.Sc. in Chemistry",
    Specializations: "Organic Chemistry, Chemical Kinetics",
    Experience: "10 years",
    TeachingMethods: "Demonstrations, problem-solving sessions",
    AwardsAndRecognition: "Excellence in Chemistry Teaching Award 2018",
    RatingsAndReviews: "4.7 stars (40 reviews)",
    ContactInformation: {
      Email: "david.lee@example.com",
      Phone: "+1 (555) 123-4567",
      OfficeHours: "Wednesday and Friday, 3:00 PM - 5:00 PM",
    },
      LinkedIn: "linkedin.com/in/davidlee",
     
  },
  {
    id:4,
    Name: "Sarah Anderson",
    Qualifications: "B.A. in History",
    Specializations: "Ancient History, World History",
    Experience: "8 years",
    TeachingMethods: "Interactive lectures, historical simulations",
    AwardsAndRecognition: "History Educator of the Year 2021",
    RatingsAndReviews: "4.6 stars (35 reviews)",
    ContactInformation: {
      Email: "sarah.anderson@example.com",
      Phone: "+1 (999) 888-7777",
      OfficeHours: "Monday and Wednesday, 10:00 AM - 12:00 PM",
    },

      LinkedIn: "linkedin.com/in/sarahanderson",
      
  },
  {
    id:5,
    Name: "Robert Patel",
    Qualifications: "Ph.D. in Mathematics",
    Specializations: "Algebra, Calculus",
    Experience: "14 years",
    TeachingMethods: "Problem-solving workshops, mathematical modeling",
    AwardsAndRecognition: "Mathematics Teacher of the Year 2019",
    RatingsAndReviews: "4.9 stars (45 reviews)",
    ContactInformation: {
      Email: "robert.patel@example.com",
      Phone: "+1 (777) 666-5555",
      OfficeHours: "Tuesday and Thursday, 2:00 PM - 4:00 PM",
    },

      LinkedIn: "linkedin.com/in/robertpatel",

  },
  {
    id:6,
    Name: "Emily Lewis",
    Qualifications: "M.Ed. in Psychology",
    Specializations: "Educational Psychology, Child Development",
    Experience: "9 years",
    TeachingMethods: "Interactive discussions, case studies",
    AwardsAndRecognition: "Outstanding Educator in Psychology 2020",
    RatingsAndReviews: "4.7 stars (30 reviews)",
    ContactInformation: {
      Email: "emily.lewis@example.com",
      Phone: "+1 (444) 333-2222",
      OfficeHours: "Monday and Wednesday, 1:00 PM - 3:00 PM",
    },
      LinkedIn: "linkedin.com/in/emilylewis",
   
  },
  {
    id:7,
    Name: "Michael Davis",
    Qualifications: "B.S. in Computer Science",
    Specializations: "Software Development, Artificial Intelligence",
    Experience: "11 years",
    TeachingMethods: "Coding tutorials, project-based learning",
    AwardsAndRecognition: "Innovative Educator Award 2017",
    RatingsAndReviews: "4.8 stars (36 reviews)",
    ContactInformation: {
      Email: "michael.davis@example.com",
      Phone: "+1 (222) 333-4444",
      OfficeHours: "Tuesday and Thursday, 3:00 PM - 5:00 PM",
    },

      LinkedIn: "linkedin.com/in/michaeldavis",
     
  },
  {
    id:8,
    Name: "Linda Rodriguez",
    Qualifications: "M.A. in Environmental Science",
    Specializations: "Ecology, Conservation Biology",
    Experience: "13 years",
    TeachingMethods: "Field trips, environmental research",
    AwardsAndRecognition: "Environmental Educator of the Year 2018",
    RatingsAndReviews: "4.9 stars (42 reviews)",
    ContactInformation: {
      Email: "linda.rodriguez@example.com",
      Phone: "+1 (111) 222-3333",
      OfficeHours: "Wednesday and Friday, 10:00 AM - 12:00 PM",
    },
      LinkedIn: "linkedin.com/in/lindarodriguez",
     
  },
  // Add more teacher objects here...
]
export const mockDataInvoices = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    cost: "21.24",
    phone: "(665)121-5454",
    date: "03/12/2022",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    cost: "1.24",
    phone: "(421)314-2288",
    date: "06/15/2021",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    cost: "11.24",
    phone: "(422)982-6739",
    date: "05/02/2022",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    cost: "80.55",
    phone: "(921)425-6742",
    date: "03/21/2022",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    cost: "1.24",
    phone: "(421)445-1189",
    date: "01/12/2021",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    cost: "63.12",
    phone: "(232)545-6483",
    date: "11/02/2022",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    cost: "52.42",
    phone: "(543)124-0123",
    date: "02/11/2022",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    cost: "21.24",
    phone: "(222)444-5555",
    date: "05/02/2021",
  },
];

export const mockFeddback= [
  {
    text: "Your communication could be clearer; work on being more concise.",
    date: "2022-08-15",
  },
  {
    text: "Consider exploring more creative solutions in your projects.",
    date: "2022-08-23",
  },
  {
    text: "Keep honing your leadership skills; you have great potential.",
    date: "2022-09-02",
  },
  {
    text: "Continue seeking opportunities for professional development.",
    date: "2022-09-09",
  },
  {
    text: "Your communication could be clearer; work on being more concise.",
    date: "2022-09-17",
  },
  {
    text: "Consider exploring more creative solutions in your projects.",
    date: "2022-09-21",
  }
  // {
  //   txId: "0315dsaa",
  //   user: "jackdower",
  //   date: "2022-04-01",
  //   cost: "133.45",
  // },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "Communication",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "Jan",
        y: 101,
      },
      {
        x: "Feb",
        y: 75,
      },
      {
        x: "Mar",
        y: 36,
      },
      {
        x: "Apr",
        y: 216,
      },
      {
        x: "May",
        y: 35,
      },
      {
        x: "Jun",
        y: 236,
      },
      {
        x: "Jul",
        y: 88,
      },
      {
        x: "Aug",
        y: 232,
      },

    ],
  },
  {
    id: "Contest participation",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "Jan",
        y: 212,
      },
      {
        x: "Feb",
        y: 190,
      },
      {
        x: "Mar",
        y: 270,
      },
      {
        x: "Apr",
        y: 9,
      },
      {
        x: "May",
        y: 75,
      },
      {
        x: "Jun",
        y: 175,
      },
      {
        x: "Jul",
        y: 33,
      },
      {
        x: "Aug",
        y: 189,
      },
    ],
  },
  {
    id: "Total enhancement",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "Jan",
        y: 191,
      },
      {
        x: "Feb",
        y: 136,
      },
      {
        x: "Mar",
        y: 91,
      },
      {
        x: "Apr",
        y: 190,
      },
      {
        x: "May",
        y: 211,
      },
      {
        x: "Jun",
        y: 152,
      },
      {
        x: "Aug",
        y: 189,
      },
     
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
