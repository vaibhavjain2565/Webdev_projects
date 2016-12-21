var bio = {
    "name": "Vaibhav Jain",
    "role": "web-developer",
    "contacts": {
        "mobile": "9419149080",
        "email": "vaibhavjain302@gmail.com",
        "github": "vaibhav2565",
        "twitter": "twitter@2565",
        "location": "Jammu"
    },
    "welcomeMessage": "welcome to my profile",
    "skills": ["HTML", "CSS", "Javascript", "Jquery"],
    "biopic": "images/fry.jpg"
};
var work = {
    "jobs": [{
        "employer": "Udacity",
        "title": "course-developer",
        "location": "delhi",
        "dates": "2010-2016",
        "description": "make courses at udacity"
    }, {
        "employer": "infosys",
        "title": "web-developer",
        "location": "Bengalore",
        "dates": "2016-future",
        "description": "develop websites at Infosys"

    }]
};

var education = {
    "schools": [{
        "name": "K.C. public school",
        "location": "jammu",
        "degree": "metric",
        "majors": ["science", "maths", "english"],
        "dates": "2000-2010",
        "url": "www.kcps.com"
    }, {
        "name": "Aklank public school",
        "location": "rajasthan",
        "degree": "plus 2",
        "majors": ["science", "maths"],
        "dates": "2010-2012",
        "url": "www.aklank.com"
    }],
    "onlineCourses": [{
        "title": "front-end web developer program at udacity",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/nanodegree"
    }]
};



var projects = {
    "projects": [{
        "title": "Online Resume",
        "dates": "2015-2016",
        "description": "making a dynamic and good looking online resume",
        "images": ["images/img-1.jpg", "images/main.jpg"]
    }, {
        "title": "web-development",
        "dates": "2015-2016",
        "description": " making dynamic sites ",
        "images": ["images/main.jpg"]
    }]
};

bio.display = function() {
    var name = HTMLheaderName.replace("%data%", bio.name);
    var role = HTMLheaderRole.replace("%data%", bio.role);
    var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var pic = HTMLbioPic.replace("%data%", bio.biopic);

    $('#header').prepend(role);
    $('#header').prepend(name);
    $("#header").append(welcome);
    $('#header').append(pic);


    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var skill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(skill);
    }

    var mob = HTMLmobile.replace("%contact%", "mobile").replace("%data%", bio.contacts.mobile);
    var email = HTMLemail.replace("%contact%", "email").replace("%data%", bio.contacts.email);
    var twitter = HTMLtwitter.replace("%contact%", "twitter").replace("%data%", bio.contacts.twitter);
    var github = HTMLgithub.replace("%contact%", "github").replace("%data%", bio.contacts.github);
    var location = HTMLlocation.replace("%contact%", "location").replace("%data%", bio.contacts.location);
    $("#footerContacts").append(mob, email, twitter, github, location);
    $("#topContacts").append(mob, email, twitter, github, location);




};

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(job) {
        var employer = HTMLworkEmployer.replace("%data%", job.employer);
        var title = HTMLworkTitle.replace("%data%", job.title);
        $(".work-entry:last").append(employer + title);
        var dates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(dates);
        var location = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(location);
        var desc = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(desc);
    });
};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(i) {
        var title = HTMLprojectTitle.replace("%data%", i.title);
        $(".project-entry:last").append(title);
        var dates = HTMLprojectDates.replace("%data%", i.dates);
        $(".project-entry:last").append(dates);
        var desc = HTMLprojectDescription.replace("%data%", i.description);
        $(".project-entry:last").append(desc);
        for (var j = 0; j < i.images.length; j++) {
            var img = HTMLprojectImage.replace("%data%", i.images[j]);
            $(".project-entry:last").append(img);
        }
    });
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(i) {
        var sch = HTMLschoolName.replace("%data%", i.name);
        var degree = HTMLschoolDegree.replace("%data%", i.degree);
        $(".education-entry:last").append(sch + degree);
        var dates = HTMLschoolDates.replace("%data%", i.dates);
        $(".education-entry:last").append(dates);
        var loc = HTMLschoolLocation.replace("%data%", i.location);
        $(".education-entry:last").append(loc);
        for (j = 0; j < i.majors.length; j++) {
            var maj = HTMLschoolMajor.replace("%data%", i.majors[j]);
            $(".education-entry:last").append(maj);
        }
        var url = HTMLschoolName.replace("%data%", i.url);
        $(".education-entry:last").append(url);
    });
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    education.onlineCourses.forEach(function(i) {
        var title = HTMLonlineTitle.replace("%data%", i.title);
        var school = HTMLonlineSchool.replace("%data%", i.school);
        $(".education-entry:last").append(title + school);
        var dates = HTMLonlineDates.replace("%data%", i.dates);
        $(".education-entry:last").append(dates);
        var url = HTMLonlineURL.replace("%data%", i.url);
        $(".education-entry:last").append(url);
    });
};

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);