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
    let validationEmpty, validateEmail, validation = false; 

    const valueNamed = named.value, valueLastName = lastName.value, valueAddress = address.value, valueEmail = email.value,valuePhone = phone.value,valueWebSite = website.value,valueLanguage = language.value,valueJobs = jobs.value,valueEducations = educations.value,valueSkills = skills.value,valueCertifications = certifications.value,valueOverview = overview.value;
   
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
                validationEmpty = true;
            }
        }
    }

    //to validate email
    if(valueEmail.indexOf('@') > -1 && valueEmail.indexOf('.com') > -1){
        email.classList.remove("validationFalse")
        email.classList.add("validationTrue")
        validateEmail = true;
    }else if(valueEmail.indexOf('@') > -1 && valueEmail.indexOf('.do') > -1){
        email.classList.remove("validationFalse")
        email.classList.add("validationTrue")
        validateEmail = true;
    }
    else{
        email.classList.remove("validationTrue")
        email.classList.add("validationFalse")
    }


    validationEmpty && validateEmail ? validation=true : validation=false;
    return validation
}

function clean(){
    const listClean = {0: named,1: lastName,2: address,3: email,4: phone,5: website,6: language,7: jobs,8: educations,9: skills,10: certifications,11: overview}

    for(i in listClean){
        listClean[i].value=""
        listClean[i].classList.remove("validationTrue")
        listClean[i].classList.remove("validationFalse")
        listClean[0].focus()
    }
}

function separateComma(){
    var str = 'Hello, World, etc';
    var str_array = str.split(',');

for(var i = 0; i < str_array.length; i++) {
   // Trim the excess whitespace.
   str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
   // Add additional code here, such as:
   console.log(str_array[i])
}

}

function createCv(){
    if(validation()){
        const valueNamed = named.value, valueLastName = lastName.value, valueAddress = address.value, valueEmail = email.value,valuePhone = phone.value,valueWebSite = website.value,valueLanguage = language.value,valueJobs = jobs.value,valueEducations = educations.value,valueSkills = skills.value,valueCertifications = certifications.value,valueOverview = overview.value;

        const divContainerMt5 = document.createElement("div")
        divContainerMt5.setAttribute("class","mt-5 container cv-border")

        const divRowBgWithe = document.createElement("div")
        divRowBgWithe.setAttribute("class","row bg-white")
            
        const divCol5P0 = document.createElement("div")
        divCol5P0.setAttribute("class", "col-5 p-0")

        const divBackBlue = document.createElement("div")
        divBackBlue.setAttribute("class", "background-blue bg-info")

        const br1 = document.createElement("br")
        const br2 = document.createElement("br")
        const br3 = document.createElement("br")

        const firstH1 = document.createElement("h1")
        firstH1.setAttribute("class","mt-3 mb-1 ms-2 me-2 fs-2 text-primary")
        firstH1.innerText(`${valueNamed}`)

        const firstH2 = document.createElement("h2")
        firstH2.setAttribute("class","mt-3 mb-1 ms-2 me-2 fs-2 text-primary")
        firstH2.innerText(`${valueLastName}`)

        const divCol5Contact = document.createElement("div")
        divCol5Contact.setAttribute("class","col5-contact")

        const firstH3 = document.createElement("h3")
        firstH3.setAttribute("class","mt-4 mb-0 ms-2 me-2 fs-2 text-primary")
        firstH3.innerText("Contact:")

        const hr1 = document.createElement("hr")
        hr1.setAttribute("class","backgound-blue mt-1 ms-2 me-2")

        const h41 = document.createElement("h3")
        h41.setAttribute("class","mt-1 mb-1 ms-2 me-2 fs-5")
        h41.innerText("Address:")

        const p1 = document.createElement("p")
        p1.setAttribute("class","mt-1 mb-1 ms-2 me-2")
        p1.innerText(`${valueAddress}`)

        const h42 = document.createElement("h3")
        h42.setAttribute("class","mt-1 mb-1 ms-2 me-2 fs-5")
        h42.innerText("Phone:")

        const p2 = document.createElement("p")
        p2.setAttribute("class","mt-1 mb-1 ms-2 me-2")
        p2.innerText(`${valuePhone}`)

        


    }else{
        alert(" 'PLEASE' - check the rectangles red")
    }
}