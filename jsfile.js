var name;
var phonenumber;
var emailaddress;
var experience;
var skills;
var education;
var divider;

function resume()
{
    name = document.getElementById('name').value;
    document.getElementById("text1").innerHTML = name;

    emailaddress = document.getElementById('emailaddress').value;
    document.getElementById('text3').innerHTML = emailaddress;

    phonenumber = document.getElementById('phonenumber').value;
    document.getElementById('text2').innerHTML = phonenumber;

    education = document.getElementById('education').value;
    document.getElementById('text4').innerHTML = education;

    experience = document.getElementById('experience').value;
    document.getElementById('text5').innerHTML = experience;

    skills = document.getElementById('skills').value;
    document.getElementById('text6').innerHTML = skills;

    divider = "-----------------------------";

    document.getElementById('log').innerHTML = 'Name: ' + name + '<br>' + 'Email: ' +emailaddress + '<br>' + 'Education: ' + education + '<br>' + 'Experience: ' +experience + '<br>' + 'Skills: ' +skills + '<br>' + divider + '<br>';
}