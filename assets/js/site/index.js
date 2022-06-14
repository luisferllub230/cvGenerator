const named = document.getElementById("name");
const lastName = document.getElementById("lastname");
const address = document.getElementById("address");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const website = document.getElementById("website");
const language = document.getElementById("language");
const jobs = document.getElementById("jobs");
const educations = document.getElementById("educations"); 
const skills = document.getElementById("skills");
const certifications= document.getElementById("certification");
const overview = document.getElementById("overview");




//validation
function validation(){ 
    let validation = false;

    const valueNamed = named.value, valueLastName = lastName.value, valueAddress = address.value, valueEmail = email.value,valuePhone = phone.value,valueWebSite = website.value,valueLanguage = language.value,valueJobs = jobs.value,valueEducations = educations.value,valueSkills = skills.value;
    const valueCertifications = certifications.value,valueOverview = overview.value;
   
    const listValidation = {
        0: [named,valueNamed],
        1: [lastName,valueLastName],
        2: [address,valueAddress],
        3: [email,valueEmail],
        4: [phone,valuePhone],
        5: [website,valueWebSite],
        6: [language,valueLanguage],
        7: [jobs, valueJobs],
        8: [educations,valueEducations],
        9: [skills,valueSkills],
        10: [certifications,valueCertifications],
        11: [overview, valueOverview]
    }

    //to validate that it is not empty
    for(i in listValidation){
        for(j in listValidation){            
            if(listValidation[i][1] == "" || listValidation[i][1] == null || listValidation[i][1] == undefined){
                listValidation[i][0].classList.add("validationFalse")
                listValidation[i][0].classList.remove("validationTrue")
            }
            else{
                listValidation[i][0].classList.remove("validationFalse")
                listValidation[i][0].classList.add("validationTrue")
                validation = true;
            }
        }
    }

    //to validate email
    if(valueEmail.indexOf('@') > -1 && valueEmail.indexOf('.com') > -1){
        email.classList.remove("validationFalse")
        email.classList.add("validationTrue")
        validation = true;
    }else if(valueEmail.indexOf('@') > -1 && valueEmail.indexOf('.do') > -1){
        email.classList.remove("validationFalse")
        email.classList.add("validationTrue")
        validation = true;
    }
    else{
        email.classList.remove("validationTrue")
        email.classList.add("validationFalse")
    }

    phone.addEventListener('keypress', (event)=>{
        console.log("puto")
    })

}

function clean(){

}