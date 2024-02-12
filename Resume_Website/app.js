//direct to Personal Information page
function directPerInfo() {
    window.location.href = 'perinfo.html';
}

//direct to Education page
function directEdu() {
    window.location.href = 'edu.html';
}

//direct to Skills page
function directSkills() {
    window.location.href = 'skills.html';
}

//direct to Work Experience page
function directWorkEx() {
    window.location.href = 'workex.html';
}

//direct to Awards and Achievements page
function directAandA() {
    window.location.href = 'aanda.html';
}

//direct to Projects page
function directProjects() {
    window.location.href = 'projects.html';
}

//store Dark/Light Mode in memory
const storedTheme = localStorage.getItem('theme');
if(storedTheme) {
    document.body.classList.add(storedTheme);
}

//switch from light to dark mode (vice versa)
function darkAndLight() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    //set 'dark-mode' and put method in memory
    const theme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
    localStorage.setItem('theme', theme);
}

function updateTimeAndDate() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var formattedAmPm = (hours >= 12 ? ' PM' : ' AM');
    hours = hours % 12;
    hours = hours ? hours : 12;
    var formattedTime = hours + ':' + (minutes < 10 ? '0' : "") + minutes + formattedAmPm;

    var month = currentDate.getMonth() + 1;
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();
    var formattedDate = (month < 10 ? '0' : "") + month + '/' + (day < 10 ? '0' : "") + day + '/' + year;

    document.getElementById('time').innerHTML = formattedTime;
    document.getElementById('date').innerHTML = formattedDate;
}

setInterval(updateTimeAndDate, 1000);
