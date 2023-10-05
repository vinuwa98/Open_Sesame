// Retrieve the disclaimerShown value from localStorage
var disshow = localStorage.getItem('disclaimerShown');

// Initialize variables
var selectedSubjects = [];
var showTotalDegreePrice = false;
var totalDegreeCredits = 0;

// Define engineering subjects
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
    
// Define health science subjects
var healthScienceSubjects = [
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
    { name: 'Essential Mathematics for Pharmacy - FMU3206', creditValue: 2 },
    { name: 'Basics for Medical Laboratory Sciences - MDU3400', creditValue: 4 },
    { name: 'Haematology I - MDU3401', creditValue: 4 },
    { name: 'Medical Bacteriology - MDU3402', creditValue: 4 },
    { name: 'Clinical Biochemistry I - MDU3303', creditValue: 3 },
    { name: 'Human Anatomy - BSU3230', creditValue: 2 },
    { name: 'Work Based Training I - MDU3805', creditValue: 8 },
    { name: 'Medical Parasitology - MDU3306', creditValue: 3 },
    { name: 'Health Communication - MDU3207', creditValue: 2 },
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
    // Define health science subjects and their credit values here
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
    'technology-engineering': 128,
    'industrial-studies': 125,
    'information-technology': 121,
    'science': 122,
    'it-honors': 123,
    'nursing': 124,
    'pharmacy': 125,
    'laboratory-science': 126,
    'psychology': 127,
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
        programSelect.append('<option value="technology-engineering">Bachelor of Technology Honours in Engineering</option>');
        programSelect.append('<option value="industrial-studies">Bachelor of Industrial Studies Honours</option>');
    } else if (selectedFaculty === "natural-sciences") {
        programSelect.append('<option value="information-technology">Bachelor of Science in Information Technology</option>');
        programSelect.append('<option value="science">Bachelor of Science</option>');
        programSelect.append('<option value="it-honors">Bachelor of Science Honor’s in IT degree</option>');
    } else if (selectedFaculty === "health-sciences") {
        programSelect.append('<option value="nursing">Bachelor of Science Honours in Nursing</option>');
        programSelect.append('<option value="pharmacy">Bachelor of Pharmacy Honours</option>');
        programSelect.append('<option value="laboratory-science">Bachelor of Medical Laboratory Sciences Honours</option>');
        programSelect.append('<option value="psychology">Bachelor of Science Honours in Psychology</option>');
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

        // Define subjects for each program
        if (selectedProgram === "software-engineering") {
            subjects = engineeringSubjects; // Use engineering subjects
        } else if (selectedProgram === "technology-engineering") {
            subjects = engineeringSubjects; // Use engineering subjects
        } else if (selectedProgram === "industrial-studies") {
            subjects = engineeringSubjects; // Use engineering subjects
        } else if (selectedProgram === "information-technology") {
            subjects = healthScienceSubjects; // Use health science subjects
        } else if (selectedProgram === "science") {
            subjects = healthScienceSubjects; // Use health science subjects
        } else if (selectedProgram === "it-honors") {
            subjects = healthScienceSubjects; // Use health science subjects
        } else if (selectedProgram === "nursing") {
            subjects = healthScienceSubjects; // Use health science subjects
        } else if (selectedProgram === "pharmacy") {
            subjects = healthScienceSubjects; // Use health science subjects
        } else if (selectedProgram === "laboratory-science") {
            subjects = healthScienceSubjects; // Use health science subjects
        } else if (selectedProgram === "psychology") {
            subjects = healthScienceSubjects; // Use health science subjects
        } else if (selectedProgram === "Arts-Honors") {
            subjects = HumanitiesSubjects; // Use health science subjects
        }  else if (selectedProgram === "Language-Teaching") {
            subjects = HumanitiesSubjects;
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

// Function to update the total price
function updateTotalPrice() {
    var totalPrice = 0;
    var creditPrice = parseFloat($("#credit-price").val()) || 0;
    var selectedProgram = $("#program-select").val();
    var subjects;

    if (
        selectedProgram === "software-engineering" ||
        selectedProgram === "technology-engineering" ||
        selectedProgram === "industrial-studies"
    ) {
        subjects = engineeringSubjects;
    } else if (
        selectedProgram === "information-technology" ||
        selectedProgram === "science" ||
        selectedProgram === "it-honors" ||
        selectedProgram === "nursing" ||
        selectedProgram === "pharmacy" ||
        selectedProgram === "laboratory-science" ||
        selectedProgram === "psychology"
    ) {
        subjects = healthScienceSubjects;
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
