// Retrieve the disclaimerShown value from localStorage
var disshow = localStorage.getItem('disclaimerShown');

// Initialize variables
var selectedSubjects = [];
var showTotalDegreePrice = false;
var totalDegreeCredits = 0;

// Define software engineering subjects
var engineeringSubjects = [
    { name: 'Software Engineering Concepts and Programming - EEX3467', creditValue: 4 },
    { name: 'Web Application Development - EEI3346', creditValue: 3 },
    { name: 'Introduction to Object-Oriented Programming - EEI3262', creditValue: 2 },
    { name: 'Information Systems and Data Management - EEI3266', creditValue: 2 },
    { name: 'Communication and Computer Technology - EEX3373', creditValue: 3 },
    { name: 'Communication Skills - AGM3263', creditValue: 2 },
    { name: 'Basic Mathematics for Computing - MHZ3459', creditValue: 4 },
    { name: 'Web Technology - EEI4346', creditValue: 3 },
    { name: 'Introduction to Mobile Application Development - EEI3269', creditValue: 2 },
    { name: 'Introduction to Business Studies - EEI3269 - EEM3366', creditValue: 3 },
    { name: 'Programming in Python - EEI3269 - EEI3372', creditValue: 3 },
    { name: 'Introduction to Laws of Sri Lanka - LLJ3265', creditValue: 2 }
    // Define engineering subjects and their credit values here
];

// Define Agricultural Engineering subjects
var AgriculturalEngineeringSubjects = [
    { name: 'Basic Biology - AGX3201', creditValue: 2 },
    { name: 'Introduction to Hydraulics & Hydrology - CVX3340', creditValue: 3 },
    { name: 'Introduction to Electrical Engineering - EEX3410', creditValue: 4 },
    { name: 'Software Development for Engineers - EEX3417', creditValue: 4 },
    { name: 'Electronics I - EEX3351', creditValue: 3 },
    { name: 'Fluid Mechanics and Thermodynamics - DMX3401', creditValue: 4 },
    { name: 'Engineering Mechanics - DMX3302', creditValue: 3 },
    { name: 'Introduction to Engineering Design Graphics - DMX3305', creditValue: 3 },
    { name: 'Workshop Practice - DMX3107', creditValue: 1 },
    { name: 'Engineering Mathematics I - MHZ3551', creditValue: 5 },
    { name: 'Engineering Mathematics II - MHZ3552 ', creditValue: 5 },
    { name: 'Communication Skills - AGM3203', creditValue: 2 }
    // Define engineering subjects and their credit values here
];

// Define Computer Engineering subjects
var ComputerEngineeringSubjects = [
    { name: 'Electrical Measurements and Instrumentation - EEX3331', creditValue: 3 },
    { name: 'Communications and Computer Technology - EEX3336', creditValue: 3 },
    { name: 'Electronics I - EEX3351', creditValue: 3 },
    { name: 'Introduction to Electrical Engineering - EEX3410', creditValue: 4 },
    { name: 'Software Development for Engineers - EEX3417', creditValue: 4 },
    { name: 'Fluid Mechanics and Thermodynamics - DMX3401', creditValue: 4 },
    { name: 'Introduction to Engineering Design Graphics - DMX3305', creditValue: 3 },
    { name: 'Workshop Practice - DMX3107', creditValue: 1 },
    { name: 'Engineering Mathematics I - MHZ3551', creditValue: 5 },
    { name: 'Engineering Mathematics II - MHZ3552 ', creditValue: 5 },
    { name: 'Communication Skills - AGM3203', creditValue: 2 }
    // Define engineering subjects and their credit values here
];

// Define Civil Engineering subjects
var CivilEngineeringSubjects = [
    { name: 'Introduction to Hydraulics & Hydrology - CVX3340', creditValue: 3 },
    { name: 'Structural Analysis and Design I - CVX3441', creditValue: 4 },
    { name: 'Strength of Materials - CVX3442', creditValue: 4 },
    { name: 'Introduction to Electrical Engineering - EEX3410', creditValue: 4 },
    { name: 'Software Development for Engineers - EEX3417', creditValue: 4 },
    { name: 'Fluid Mechanics and Thermodynamics - DMX3401', creditValue: 4 },
    { name: 'Introduction to Engineering Design Graphics - DMX3305', creditValue: 3 },
    { name: 'Workshop Practice - DMX3107', creditValue: 1 },
    { name: 'Engineering Mathematics I - MHZ3551', creditValue: 5 },
    { name: 'Engineering Mathematics II - MHZ3552 ', creditValue: 5 },
    { name: 'Communication Skills - AGM3203', creditValue: 2 }
    // Define engineering subjects and their credit values here
];

// Define Electrical Engineering subjects
var ElectricalEngineeringSubjects = [
    { name: 'Electrical Measurements and Instrumentation - EEX3331', creditValue: 3 },
    { name: 'Communications and Computer Technology - EEX3336', creditValue: 3 },
    { name: 'Electronics I - EEX3351', creditValue: 3 },
    { name: 'Introduction to Electrical Engineering - EEX3410', creditValue: 4 },
    { name: 'Software Development for Engineers - EEX3417', creditValue: 4 },
    { name: 'Fluid Mechanics and Thermodynamics - DMX3401', creditValue: 4 },
    { name: 'Introduction to Engineering Design Graphics - DMX3305', creditValue: 3 },
    { name: 'Workshop Practice - DMX3107', creditValue: 1 },
    { name: 'Engineering Mathematics I - MHZ3551', creditValue: 5 },
    { name: 'Engineering Mathematics II - MHZ3552 ', creditValue: 5 },
    { name: 'Communication Skills - AGM3203', creditValue: 2 }
    // Define engineering subjects and their credit values here
];

// Define Mechanical Engineering subjects
var MechanicalEngineeringSubjects = [
    { name: 'Fluid Mechanics and Thermodynamics - DMX3401', creditValue: 4 },
    { name: 'Engineering Mechanics - DMX3302', creditValue: 3 },
    { name: 'Introduction to Engineering Materials  - DMX3203', creditValue: 2 },
    { name: 'Applied Electronics - DMX3304', creditValue: 3 },
    { name: 'Introduction to Engineering Design Graphics - DMX3305', creditValue: 3 },
    { name: 'Introduction to Manufacturing Processes - DMX3206', creditValue: 2 },
    { name: 'Workshop Practice - DMX3107', creditValue: 1 },
    { name: 'Software Development for Engineers - EEX3417', creditValue: 4 },
    { name: 'Engineering Mathematics I - MHZ3551', creditValue: 5 },
    { name: 'Engineering Mathematics II - MHZ3552 ', creditValue: 5 },
    { name: 'Communication Skills - AGM3203', creditValue: 2 }
    // Define engineering subjects and their credit values here
];

// Define Textile Engineering subjects
var TextileEngineeringSubjects = [
    { name: 'Garment Analysis and Sewing Machinery - TAX3331', creditValue: 3 },
    { name: 'Fibre Science and Technology  - TAX3458', creditValue: 4 },
    { name: 'Yarn Manufacture I - TAX3459', creditValue: 4 },
    { name: 'Introduction to Electrical Engineering - EEX3410', creditValue: 4 },
    { name: 'Software Development for Engineers - EEX3417', creditValue: 4 },
    { name: 'Fluid Mechanics and Thermodynamics - DMX3401', creditValue: 2 },
    { name: 'Workshop Practice - DMX3107', creditValue: 1 },
    { name: 'Introduction to Engineering Design Graphics - DMX3305', creditValue: 4 },
    { name: 'Engineering Mathematics I - MHZ3551', creditValue: 5 },
    { name: 'Engineering Mathematics II - MHZ3552 ', creditValue: 5 },
    { name: 'Communication Skills - AGM3203', creditValue: 2 }
    // Define engineering subjects and their credit values here
];

// Define Agriculture-studies subjects
var AgriculturestudiesSubjects = [
    { name: 'Land and Soil Tillage Management - AGI3450', creditValue: 4 },
    { name: 'Agricultural Biology - AGI3551', creditValue: 5 },
    { name: 'Crop Production and Technology - AGI3552', creditValue: 5 },
    { name: 'Plant Protection - AGI3553', creditValue: 5 },
    { name: 'Communication Skills - AGM3203', creditValue: 2 },
    { name: 'Principles of Economics - AGM3354', creditValue: 3 },
    { name: 'Mathematics for Agriculture - MHZ3458', creditValue: 4 },
    { name: 'Introduction to Computer Application - TAK3237', creditValue: 2 },
    // Define engineering subjects and their credit values here
];

// Define Apparel-studies subjects
var ApparelstudiesSubjects = [
    { name: 'Fibre to Fabric - AGI3450', creditValue: 4 },
    { name: 'Garment Analysis and Sewing Machinery - TAX3331', creditValue: 3 },
    { name: 'Garment Accessories - TAI3332', creditValue: 3 },
    { name: 'Pattern Construction - TAI3533', creditValue: 5 },
    { name: 'Basics of Human Resource Management - TAM3234', creditValue: 3 },
    { name: 'Management Studies - TAM3535', creditValue: 5 },
    { name: 'Statistics for Industrial Studies - MHZ3576', creditValue: 5 },
    { name: 'Introduction to Computer Applications - TAK3237', creditValue: 2 },
    // Define engineering subjects and their credit values here
];

// Define Fashion-studies subjects
var FashionstudiesSubjects = [
    { name: 'Fibre to Fabric - AGI3450', creditValue: 4 },
    { name: 'Garment Analysis and Sewing Machinery - TAX3331', creditValue: 3 },
    { name: 'Garment Accessories - TAI3332', creditValue: 3 },
    { name: 'Pattern Construction - TAI3533', creditValue: 5 },
    { name: 'Basics of Human Resource Management - TAM3234', creditValue: 3 },
    { name: 'Management Studies - TAM3535', creditValue: 5 },
    { name: 'Statistics for Industrial Studies - MHZ3576', creditValue: 5 },
    { name: 'Fashion Illustration I - TAI3270', creditValue: 2 },
    { name: 'Introduction to Computer Applications - TAK3237', creditValue: 2 },
    // Define engineering subjects and their credit values here
];

// Define Textile-studies subjects
var TextilestudiesSubjects = [
    { name: 'Fibre Science & Technology - TAX3458', creditValue: 4 },
    { name: 'Yarn Manufacture I - TAX3459 ', creditValue: 4 },
    { name: 'Garment Analysis and Sewing Machinery - TAX3331', creditValue: 3 },
    { name: 'Garment Accessories - TAI3332', creditValue: 3 },
    { name: 'Statistics for Industrial Studies - MHZ3576', creditValue: 5 },
    { name: 'Basics of Human Resource Management - TAM3234', creditValue: 2 },
    { name: 'Management Studies - TAM3535', creditValue: 5 },
    { name: 'Fashion Illustration I - TAI3270', creditValue: 2 },
    { name: 'Introduction to Computer Applications - TAK3237', creditValue: 2 },
    // Define engineering subjects and their credit values here
];

// Define science subjects
var scienceSubjects = [
    { name: 'Diversity of Plants - BYU3500', creditValue: 5 },
    { name: 'Organization of Cells and Plant Biochemistry - BYU3301 ', creditValue: 3 },
    { name: 'Basic Principles of Chemistry I - CYU3300', creditValue: 3 },
    { name: 'Basic Principles of Chemistry II - CYU3201', creditValue: 2 },
    { name: 'Basic Practical Chemistry - CYU3302', creditValue: 3 },
    { name: 'General and Thermal Physics - PHU3300', creditValue: 3 },
    { name: 'Basic Electromagnetism - PHU3301', creditValue: 3 },
    { name: 'Waves in Physics - PHU3202', creditValue: 2 },
    { name: 'Animal Life and Diversity - ZYU3500', creditValue: 5 },
    { name: 'Biogeography - ZYU3301 ', creditValue: 3 },
    { name: 'Introduction to Computer Programming - CSU3200', creditValue: 2 },
    { name: 'Database Design and Implementation - CSU3301', creditValue: 3 },
    { name: 'Data Structures & Algorithms - CSU3302', creditValue: 3 },
    { name: 'Vector Algebra - ADU3300', creditValue: 3 },
    { name: 'Basic Statistics - ADU3201', creditValue: 2 },
    { name: 'Differential Equations - ADU3302', creditValue: 3 },
    { name: 'Mathematical Logic and Mathematical Proofs - PEU3300', creditValue: 3 },
    { name: 'Foundation of Mathematics - PEU3301', creditValue: 3 },
    { name: 'Vector Spaces - PEU3202', creditValue: 2 },
    // Define engineering subjects and their credit values here
];

// Define information-technology subjects
var informationtechnologySubjects = [
    { name: 'Computer Organization and Communication - COU3300', creditValue: 3 },
    { name: 'Database Management Systems - COU3301 ', creditValue: 3 },
    { name: 'System Analysis and Design - COU3202', creditValue: 2 },
    { name: 'Discrete Mathematics I - ADU3330', creditValue: 3 },
    { name: 'Fundamentals of Programming - COU3304', creditValue: 3 },
    { name: 'Software Engineering - COU3303', creditValue: 3 },
    { name: 'Web Development - ITU3201', creditValue: 2 },
    { name: 'Computer Security Concepts - COU3305', creditValue: 3 },
    { name: 'Fundamentals of Information Systems - ISU3300', creditValue: 3 },
    { name: 'Data Structures and Algorithms - COU3306 ', creditValue: 3 },
    { name: 'IT Organization - ISU3201', creditValue: 2 },
    // Define engineering subjects and their credit values here
];

// Define nursing subjects
var nursingSubjects = [
    { name: 'Ethics & History in Nursing - NGU3200', creditValue: 2 },
    { name: 'Health Communication - NGU3301', creditValue: 3 },
    { name: 'Psychology for Nursing - NGU3302', creditValue: 3 },
    { name: 'Sociology for Nursing - NGU3203', creditValue: 2 },
    { name: 'Fundamentals of Nursing I - NGU3504', creditValue: 5 },
    { name: 'Simulation Lab Practicum in Nursing I - NGU3305', creditValue: 3 },
    { name: 'Medical Surgical Nursing I - NGU3406', creditValue: 4 },
    { name: 'Human Anatomy - BSU3230', creditValue: 2 },
    { name: 'Human Physiology - BSU3431', creditValue: 4 },
    { name: 'Microbiology - BSU3235', creditValue: 2 },
    // Define engineering subjects and their credit values here
];

// Define pharmacy subjects
var pharmacySubjects = [
    { name: 'Pharmaceutical Chemistry I - BSU3340', creditValue: 3 },
    { name: 'Pharmaceutical Chemistry II - BSU3341', creditValue: 3 },
    { name: 'Human Anatomy - BSU3230', creditValue: 2 },
    { name: 'Human Physiology - BSU3431', creditValue: 4 },
    { name: 'Biochemistry - FMU3300', creditValue: 3 },
    { name: 'Pharmacognosy I - FMU3401', creditValue: 4 },
    { name: 'Physical Pharmacy - FMU3302', creditValue: 3 },
    { name: 'Pharmaceutics I - FMU3203', creditValue: 2 },
    { name: 'Pharmaceutical Microbiology I - FMU3204', creditValue: 2 },
    { name: 'Health Communication - FMU3205', creditValue: 2 },
    { name: 'Essential Mathematics for Pharmacy - FMU3206', creditValue: 2 }
    // Define engineering subjects and their credit values here
];

// Define laboratory-science subjects
var laboratorySubjects = [
    { name: 'Basics for Medical Laboratory Sciences - MDU3400', creditValue: 4 },
    { name: 'Haematology I - MDU3401', creditValue: 4 },
    { name: 'Medical Bacteriology - MDU3402', creditValue: 4 },
    { name: 'Clinical Biochemistry I - MDU3303', creditValue: 3 },
    { name: 'Human Anatomy - BSU3230', creditValue: 2 },
    { name: 'Work Based Training I - MDU3805', creditValue: 8 },
    { name: 'Medical Parasitology - MDU3306', creditValue: 3 },
    { name: 'Health Communication - MDU3207', creditValue: 2 },
    // Define engineering subjects and their credit values here
];

// Define psychology subjects
var psychologySubjects = [
    { name: 'Introduction to Psychology - PLU3301', creditValue: 3 },
    { name: 'Personality & Individual Differences - PLU3302', creditValue: 3 },
    { name: 'Motivation and Emotion - PLU3303', creditValue: 3 },
    { name: 'Ethics in Psychology - PLU3204', creditValue: 2 },
    { name: 'Academic Writing in Psychology - PLU3205', creditValue: 2 },
    { name: 'Communication & Study Skills for Psychology - PLU3206', creditValue: 2 },
    { name: 'Lifespan Development - PLU3307', creditValue: 3 },
    { name: 'Social Psychology - PLU3308', creditValue: 3 },
    { name: 'Introduction to Counselling Psychology - PLU3309', creditValue: 3 },
    { name: 'Biological Psychology - PLU3310', creditValue: 3 },
    { name: 'Cognitive Psychology - PLU3311', creditValue: 3 },
    // Define engineering subjects and their credit values here
];

// Define HR-Management subjects
var HRManagementSubjects = [
    { name: 'Introduction to Financial Accounting - AFU3401', creditValue: 4 },
    { name: 'Principles of Management - OSU3401', creditValue: 4 },
    { name: 'Marketing Management and Ethics in Marketing  - MMU3401', creditValue: 4 },
    { name: 'Microeconomics - AFU3402', creditValue: 4 },
    { name: 'Quantitative Techniques for Management - OSU3407', creditValue: 4 },
    { name: 'Human Resource Management - HRU3406', creditValue: 4 },
    { name: 'Business Communication - OSU3309', creditValue: 3 },
    { name: 'Human Resource Ethics or Human Resource Personality - HRU3301,HRU3302', creditValue: 3 },
    // Define engineering subjects and their credit values here
];

// Define Marketing-Management subjects
var MarketingManagementSubjects = [
    { name: 'Marketing Management and Ethics in Marketing - MMU3401', creditValue: 4 },
    { name: 'Introduction to Financial Accounting - AFU3401', creditValue: 4 },
    { name: 'Principles of Management - OSU3401', creditValue: 4 },
    { name: 'Microeconomics - AFU3402', creditValue: 4 },
    { name: 'Quantitative Techniques for Management - OSU3407', creditValue: 4 },
    { name: 'Human Resource Management - HRU3406', creditValue: 4 },
    { name: 'Business Communication - OSU3309', creditValue: 3 },
    { name: 'Creative Marketing - MMU3302', creditValue: 3 },
    // Define engineering subjects and their credit values here
];

// Define Management-Studies subjects
var ManagementStudiesSubjects = [
    { name: 'Principles of Management - OSU3401', creditValue: 4 },
    { name: 'Financial Accounting  - AFU3401 ', creditValue: 4 },
    { name: 'Principles of Management - OSU3401', creditValue: 4 },
    { name: 'Microeconomics - AFU3402', creditValue: 4 },
    { name: 'Quantitative Techniques for Management - OSU3407', creditValue: 4 },
    { name: 'Human Resource Management - HRU3406', creditValue: 4 },
    { name: 'Business Communication - OSU3309', creditValue: 3 },
    { name: 'Creative Marketing - MMU3302', creditValue: 3 },
    // Define engineering subjects and their credit values here
];
    
// Define Humanities subjects
var HumanitiesSubjects = [
    { name: 'Introduction to Communication Theory and Practice - DSU3521', creditValue: 5 },
    { name: 'Principles of Economics I - DSU3531', creditValue: 5 },
    { name: 'Understanding Society and Culture - DSU3551', creditValue: 5 },
];


// Define totalDegreeCredits for each degree program
var degreeCredits = {
    'software-engineering': 131,
    'Agricultural-engineering': 152,
    'Civil-engineering': 152,
    'Computer-engineering': 152,
    'Electrical-engineering': 152,
    'Mechanical-engineering': 152,
    'Mechatronics-engineering' : 152,
    'Textile-engineering': 152,
    'Agriculture-studies' : 130,
    'Apparel-studies' : 130,
    'Fashion-studies' : 130,
    'Textile-studies' : 130,
    'science': 120,
    'information-technology': 120,
    'it-honors': 123,
    'nursing': 124,
    'pharmacy': 125,
    'laboratory-science': 126,
    'psychology': 127,
    'HR-Management': 130,
    'Marketing-Management': 130,
    'Arts-Honors': 128,
    'Language-Teaching': 129,
    'Laws-Degree': 130,
    'Social-Sciences': 131,
    'Community-Development': 132,
};

// Check if the disclaimer has been shown previously
if (disshow === null || disshow === 'false') {
    $("#DisclaimerTxt").hide();
}

// Event handler for the disclaimer button
$("#DisclaimeBtn").click(function () {
    $("#DisclaimerTxt").fadeToggle();
    // Toggle the disclaimerShown value in localStorage
    disshow = disshow === 'true' ? 'false' : 'true';
    localStorage.setItem('disclaimerShown', disshow);
});

// Event handler for the faculty selection
$("#faculty-select").change(function () {
    var selectedFaculty = $(this).val();
    var programSelect = $("#program-select");

    programSelect.empty().append('<option value="">Select Program</option>');
    $("#subject-checkboxes").empty();

    if (selectedFaculty === "engineering") {
        programSelect.append('<option value="software-engineering">Bachelor of Software Engineering Honours</option>');
        programSelect.append('<option value="Agricultural-engineering">Bachelor of Science Honours in Engineering – Agricultural Engineering</option>');
        programSelect.append('<option value="Civil-engineering">Bachelor of Science Honours in Engineering – Civil Engineering</option>');
        programSelect.append('<option value="Computer-engineering">Bachelor of Science Honours in Engineering – Computer Engineering</option>');
        programSelect.append('<option value="Electrical-engineering">Bachelor of Science Honours in Engineering – Electrical Engineering</option>');
        programSelect.append('<option value="Mechanical-engineering">Bachelor of Science Honours in Engineering – Mechanical Engineering</option>');
        programSelect.append('<option value="Mechatronics-engineering">Bachelor of Science Honours in Engineering – Mechatronics Engineering</option>');
        programSelect.append('<option value="Textile-engineering">Bachelor of Science Honours in Engineering – Textile & Clothing</option>');
        programSelect.append('<option value="Agriculture-studies">Bachelor of Industrial Studies Honours – Agriculture</option>');
        programSelect.append('<option value="Apparel-studies">Bachelor of Industrial Studies Honours – Apparel Production and Management</option>');
        programSelect.append('<option value="Fashion-studies">Bachelor of Industrial Studies Honours – Fashion Design and Product Development</option>');
        programSelect.append('<option value="Textile-studies">Bachelor of Industrial Studies Honours – Textile Manufacture Specialization</option>');
    } else if (selectedFaculty === "natural-sciences") {
        programSelect.append('<option value="science">Bachelor of Science Honours in Botany</option>');
        programSelect.append('<option value="science">Bachelor of Science Honours in Chemistry</option>');
        programSelect.append('<option value="science">Bachelor of Science Honours in Mathematics</option>');
        programSelect.append('<option value="science">Bachelor of Science honours in Physics</option>');
        programSelect.append('<option value="science">Bachelor of Science Honours in Zoology</option>');
        programSelect.append('<option value="information-technology">Bachelor of Science in Information Technology</option>');
        programSelect.append('<option value="it-honors">Bachelor of Science Honours in IT degree</option>');
    } else if (selectedFaculty === "health-sciences") {
        programSelect.append('<option value="nursing">Bachelor of Science Honours in Nursing</option>');
        programSelect.append('<option value="pharmacy">Bachelor of Pharmacy Honours</option>');
        programSelect.append('<option value="laboratory-science">Bachelor of Medical Laboratory Sciences Honours</option>');
        programSelect.append('<option value="psychology">Bachelor of Science Honours in Psychology</option>');
    } else if (selectedFaculty === "management") {
        programSelect.append('<option value="HR-Management">Bachelor of Management Studies Honours in Human Resource Management</option>');
        programSelect.append('<option value="Marketing-Management">Bachelor of Management Studies Honours in Marketing Management</option>');
        programSelect.append('<option value="Management-Studies">Bachelor of Management Studies Honours</option>');
        programSelect.append('<option value="Accounting-Management">Bachelor of Management Studies Honours in Accounting and Finance</option>');
        programSelect.append('<option value="BMS-Degree">BMS (Hons.) degree linked with the University of Essex Management Studies</option>');
    } else if (selectedFaculty === "humanities") {
        programSelect.append('<option value="Arts-Honors">Bachelor of Arts Honors in Library and Information Studies</option>');
        programSelect.append('<option value="Language-Teaching">B.A. Degree in English and English Language Teaching</option>');
        programSelect.append('<option value="Social-Sciences">Bachelor of Arts in Social Sciences</option>');
        programSelect.append('<option value="Community-Development">Bachelor of Arts in Youth and Community Development</option>');
        programSelect.append('<option value="Laws-Degree">Bachelor of Laws Degree Programme (LLB)</option>');
    }

    programSelect.prop("disabled", false);
    $("#subject-select-container").hide();
    updateTotalPrice();
});

// Event handler for the program selection
$("#program-select").change(function () {
    selectedSubjects = [];
    updateTotalPrice();
    var selectedProgram = $(this).val();

    if (selectedProgram) {
        $("#subject-select-container").show();
        $("#subject-checkboxes").empty();

        var subjects;

        // Define engineering subjects for each program
        if (selectedProgram === "software-engineering") {
            subjects = engineeringSubjects; // Use engineering subjects
        } else if (selectedProgram === "Agricultural-engineering") {
            subjects = AgriculturalEngineeringSubjects; // Use Agricultural engineering subjects
        } else if (selectedProgram === "Civil-engineering") {
            subjects =  CivilEngineeringSubjects; // Use Civil engineering subjects
        } else if (selectedProgram === "Computer-engineering") {
            subjects = ComputerEngineeringSubjects; // Use Computer Engineering subjects
        } else if (selectedProgram === "Mechanical-engineering") {
            subjects = MechanicalEngineeringSubjects; // Use Mechanical Engineering subjects
        } else if (selectedProgram === "Electrical-engineering") {
            subjects = ElectricalEngineeringSubjects; // Use Electrical Engineering subjects
        } else if (selectedProgram === "Mechatronics-engineering") {
            subjects = MechanicalEngineeringSubjects; // Use Mechatronics Engineering subjects
        } else if (selectedProgram === "Textile-engineering") {
            subjects = TextileEngineeringSubjects; // Use Textile Engineering subjects
        } else if (selectedProgram === "Agriculture-studies") {
            subjects = AgriculturestudiesSubjects; // Use Agriculture Studies subjects
        } else if (selectedProgram === "Apparel-studies") {
            subjects = ApparelstudiesSubjects; // Use Apparel Studies subjects
        } else if (selectedProgram === "Fashion-studies") {
            subjects = FashionstudiesSubjects; // Use Fasion Studies subjects
        } else if (selectedProgram === "Textile-studies") {
            subjects = TextilestudiesSubjects; // Use Fasion Studies 
        
        // Define science subjects for each program
        } else if (selectedProgram === "science") {
            subjects = scienceSubjects; // Use Science subjects
        } else if (selectedProgram === "information-technology") {
            subjects = informationtechnologySubjects; // Use information technology subjects
        
         // Define Health subjects for each program
        } else if (selectedProgram === "nursing") {
            subjects = nursingSubjects; // Use nursing subjects
        } else if (selectedProgram === "pharmacy") {
            subjects = pharmacySubjects; // Use pharmacy subjects
        } else if (selectedProgram === "laboratory-science") {
            subjects = laboratorySubjects; // Use labratory subjects
        } else if (selectedProgram === "psychology") {
            subjects = psychologySubjects; // Use psychology subjects

         // Define Management subjects for each program    
        } else if (selectedProgram === "HR-Management") {
            subjects = HRManagementSubjects; // Use health science subjects
        }  else if (selectedProgram === "Marketing-Management") {
            subjects = MarketingManagementSubjects;
        } else if (selectedProgram === "Social-Sciences") {
            subjects = HumanitiesSubjects;
        } else if (selectedProgram === "Community-Development") {
            subjects = HumanitiesSubjects;
        } else if (selectedProgram === "Laws-Degree") {
            subjects = HumanitiesSubjects;
        } 

        if (subjects) {
            addSubjectCheckboxes(subjects);
        }
    } else {
        $("#subject-select-container").hide(); // Hide subjects when no program is selected
    }
});


// Event handler for subject checkboxes
$("#subject-checkboxes").on("change", ".subject-checkbox", function () {
    if ($(this).is(":checked")) {
        selectedSubjects.push($(this).val());
    } else {
        var index = selectedSubjects.indexOf($(this).val());
        if (index !== -1) {
            selectedSubjects.splice(index, 1);
        }
    }
    updateTotalPrice();
});


// Event handler for the calculate price button
$("#calculate-price-container").on("click", "#calculate-price-button", function () {
    showTotalDegreePrice = true; // Set showTotalDegreePrice to true when the button is clicked
    updateTotalPrice();
    $("#total-degree-price").show(); // Show Total Degree Price when the button is clicked
});

// Event handler for the credit price input
$("#credit-price").on("input", function () {
    updateTotalPrice();
})

// Event handler for the credit price input
$("#credit-price").on("input", function () {
    updateTotalPrice();
});


// Function to add subject checkboxes dynamically
function addSubjectCheckboxes(subjects) {
    var subjectCheckboxes = $("#subject-checkboxes");
    for (var i = 0; i < subjects.length; i++) {
        var subject = subjects[i];
        var checkbox = $('<input type="checkbox" class="subject-checkbox" id="subject-' + i + '" value="' + subject.name + '">');
        var label = $('<label for="subject-' + i + '">' + subject.name + '</label><br>');
        subjectCheckboxes.append(checkbox).append(label);
    }
}

    // Function to update the engineering degrees total price
function updateTotalPrice() {
    var totalPrice = 0;
    var creditPrice = parseFloat($("#credit-price").val()) || 0;
    var selectedProgram = $("#program-select").val();
    var subjects;

    if (
        selectedProgram === "software-engineering"
    ) 
    {
        subjects = engineeringSubjects;
    } else if (
        selectedProgram === "Agricultural-engineering"
    ) {
        subjects = AgriculturalEngineeringSubjects;
    }else if (
        selectedProgram === "Civil-engineering"
    ) {
        subjects = CivilEngineeringSubjects;
    }else if (
        selectedProgram === "Computer-engineering"
    ) {
        subjects = ComputerEngineeringSubjects;
    }else if (
        selectedProgram === "Electrical-engineering"
    ) {
        subjects = ElectricalEngineeringSubjects;
    }else if (
        selectedProgram === "Mechanical-engineering"
    ) {
        subjects = MechanicalEngineeringSubjects;
    }else if (
        selectedProgram === "Mechatronics-engineering"
    ) {
        subjects = MechanicalEngineeringSubjects; 
    }else if (
        selectedProgram === "Textile-engineering"
    ) {
        subjects = TextileEngineeringSubjects; 
    }else if (
        selectedProgram === "Agriculture-studies"
    ) {
        subjects = AgriculturestudiesSubjects;    
    }else if (
        selectedProgram === "Apparel-studies"
    ) {
        subjects = ApparelstudiesSubjects;  
    }else if (
        selectedProgram === "Fashion-studies"
    ) {
        subjects = FashionstudiesSubjects;   
    }else if (
        selectedProgram === "Textile-studies"
    ) {
        subjects = TextilestudiesSubjects;

    // Function to update the science degrees total price
    }else if (
        selectedProgram === "science"
    ) {
        subjects = scienceSubjects;   
    }else if (
        selectedProgram === "information-technology"
    ) {
        subjects = informationtechnologySubjects; 
    
    // Function to update the Health degrees total price
    }else if (
        selectedProgram === "nursing"
    ) {
        subjects = nursingSubjects;
    }else if (
        selectedProgram === "pharmacy"
    ) {
        subjects = pharmacySubjects;
    }else if (
        selectedProgram === "laboratory-science"
    ) {
        subjects = laboratorySubjects;
    }else if (
        selectedProgram === "psychology"
    ) {
        subjects = psychologySubjects;
    
    // Function to update the Management degrees total price

    }else if (
        selectedProgram === "HR-Management"
    ) {
            subjects = HRManagementSubjects;
    }else if (
        selectedProgram === "Marketing-Management"
    ) {
            subjects = MarketingManagementSubjects;
    } else if (
        selectedProgram === "Arts-Honors" ||
        selectedProgram === "Language-Teaching" ||
        selectedProgram === "Social-Sciences" ||
        selectedProgram === "Community-Development" ||
        selectedProgram === "Laws-Degree"
    ) {
        subjects = HumanitiesSubjects;
    }

    if (subjects) {
        for (var i = 0; i < selectedSubjects.length; i++) {
            var subjectName = selectedSubjects[i];
            var subject = subjects.find(function (subj) {
                return subj.name === subjectName;
            });

            if (subject) {
                totalPrice += subject.creditValue * creditPrice;
            }
        }
    }

    var totalDegreePrice = degreeCredits[selectedProgram] * creditPrice;

    if (showTotalDegreePrice) {
        $("#total-degree-price").text("Total Degree Fee: රු " + totalDegreePrice.toFixed(2)).show();
    } else {
        $("#total-degree-price").hide();
    }

    $("#total-price").text("First Year Total Fee: රු " + totalPrice.toFixed(2));
}

// Initial setup
$("#subject-select-container").hide(); // Hide subjects by default
$("#total-degree-price").hide(); // Hide Total Degree Price by default
