var disshow = localStorage.getItem('disclaimerShown');
var selectedSubjects = [];
var showTotalDegreePrice = false; // Added variable to track when to show Total Degree Price

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
];

var totalDegreeCredits = 131; // Total credits required for the degree

if (disshow === null || disshow === 'false') {
    $("#DisclaimerTxt").hide();
}

$("#DisclaimeBtn").click(function () {
    $("#DisclaimerTxt").fadeToggle();
    disshow = disshow === 'true' ? 'false' : 'true';
    localStorage.setItem('disclaimerShown', disshow);
});

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
    }

    programSelect.prop("disabled", false);
    $("#subject-select-container").hide(); // Hide subjects when faculty is selected
    updateTotalPrice(); // Added to clear total price when faculty changes
});

$("#program-select").change(function () {
    selectedSubjects = [];
    updateTotalPrice();
    var selectedProgram = $(this).val();

    if (selectedProgram) {
        $("#subject-select-container").show();
        $("#subject-checkboxes").empty();

        var subjects;
        if (selectedProgram === "software-engineering" || selectedProgram === "technology-engineering" || selectedProgram === "industrial-studies") {
            subjects = engineeringSubjects;
        } else if (selectedProgram === "information-technology" || selectedProgram === "science" || selectedProgram === "it-honors") {
            subjects = naturalSciencesSubjects;
        }

        if (subjects) {
            addSubjectCheckboxes(subjects);
        }
    } else {
        $("#subject-select-container").hide(); // Hide subjects when no program is selected
    }
});

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

$("#calculate-price-container").on("click", "#calculate-price-button", function () {
    showTotalDegreePrice = true; // Set showTotalDegreePrice to true when the button is clicked
    updateTotalPrice();
    $("#total-degree-price").show(); // Show Total Degree Price when the button is clicked
});

$("#credit-price").on("input", function () {
    updateTotalPrice();
});

function addSubjectCheckboxes(subjects) {
    var subjectCheckboxes = $("#subject-checkboxes");
    for (var i = 0; i < subjects.length; i++) {
        var subject = subjects[i];
        var checkbox = $('<input type="checkbox" class="subject-checkbox" id="subject-' + i + '" value="' + subject.name + '">');
        var label = $('<label for="subject-' + i + '">' + subject.name + '</label><br>');
        subjectCheckboxes.append(checkbox).append(label);
    }
}

function updateTotalPrice() {
    var totalPrice = 0;
    var creditPrice = parseFloat($("#credit-price").val()) || 0;

    for (var i = 0; i < selectedSubjects.length; i++) {
        var subjectName = selectedSubjects[i];
        var subject = engineeringSubjects.find(function (subj) {
            return subj.name === subjectName;
        });

        if (subject) {
            totalPrice += subject.creditValue * creditPrice;
        }
    }

    var totalDegreePrice = totalDegreeCredits * creditPrice;
    
    if (showTotalDegreePrice) {
        $("#total-degree-price").text("Total Degree Price: රු" + totalDegreePrice.toFixed(2)).show();
    } else {
        $("#total-degree-price").hide();
    }

    $("#total-price").text("Total Price: රු" + totalPrice.toFixed(2));
}

// Initial setup
$("#subject-select-container").hide(); // Hide subjects by default
$("#total-degree-price").hide(); // Hide Total Degree Price by default
