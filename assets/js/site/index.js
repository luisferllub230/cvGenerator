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

function separateComma(value,num){
    if(num === 1){
        let newValue=value.replaceAll("," ,"\n") 
        return newValue
    }
    if(num === 2){
        let ul= document.createElement("ul")
        let newValue = value.replaceAll(" ","")
        let listFor = newValue.split(",")

        for(i in listFor){
            const li1 = document.createElement("li")
            li1.innerText = `${listFor[i]}`
            ul.appendChild(li1)
        }
        return ul
    }
}

function createCv(){
    if(validation()){
        const valueNamed = named.value, valueLastName = lastName.value, valueAddress = address.value, valueEmail = email.value,valuePhone = phone.value,valueWebSite = website.value,valueLanguage = language.value,valueJobs = jobs.value,valueEducations = educations.value,valueSkills = skills.value,valueCertifications = certifications.value,valueOverview = overview.value;

        const cvContainer = document.getElementById('cvContainer')

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
        firstH1.innerText=`${valueNamed}`

        const firstH2 = document.createElement("h2")
        firstH2.setAttribute("class","mt-3 mb-1 ms-2 me-2 fs-2 text-primary")
        firstH2.innerText=`${valueLastName}`

        const divCol5Contact = document.createElement("div")
        divCol5Contact.setAttribute("class","col5-contact")

        const firstH3 = document.createElement("h3")
        firstH3.setAttribute("class","mt-4 mb-0 ms-2 me-2 fs-2 text-primary")
        firstH3.innerText="Contact:"

        const hr1 = document.createElement("hr")
        hr1.setAttribute("class","backgound-blue mt-1 ms-2 me-2")

        const h41 = document.createElement("h3")
        h41.setAttribute("class","mt-1 mb-1 ms-2 me-2 fs-5")
        h41.innerText= "Address:"

        const p1 = document.createElement("p")
        p1.setAttribute("class","mt-1 mb-1 ms-2 me-2")
        p1.innerText=`${valueAddress}`

        const h42 = document.createElement("h3")
        h42.setAttribute("class","mt-1 mb-1 ms-2 me-2 fs-5")
        h42.innerText="Phone:"

        const p2 = document.createElement("p")
        p2.setAttribute("class","mt-1 mb-1 ms-2 me-2")
        p2.innerText=`${valuePhone}`

        const h43 = document.createElement("h3")
        h43.setAttribute("class","mt-1 mb-1 ms-2 me-2 fs-5")
        h43.innerText="Email:"

        const p3 = document.createElement("p")
        p3.setAttribute("class","mt-1 mb-1 ms-2 me-2")
        p3.innerText = `${valueEmail}`

        const divCol5Languages = document.createElement("div")
        divCol5Languages.setAttribute("class","col5-contact")

        const f2tH3 = document.createElement("h3")
        f2tH3.setAttribute("class","mt-4 mb-0 ms-2 me-2 fs-2 text-primary")
        f2tH3.innerText ="Languages:"

        const hr2 = document.createElement("hr")
        hr2.setAttribute("class","backgound-blue mt-1 ms-2 me-2")

        const p4 = document.createElement("p")
        p4.setAttribute("class","mt-1 mb-1 ms-2 me-2")
        p4.innerText = `${separateComma(valueLanguage,1)}`

        const divCol7M5P0 = document.createElement("div")
        divCol7M5P0.setAttribute("class","col-7 mt-5 p-0")

        const divcol7summry = document.createElement("div")
        divcol7summry.setAttribute("class","col7-summary")

        const f3tH3 = document.createElement("h3")
        f3tH3.setAttribute("class","mt-4 mb-0 ms-2 me-2 fs-2 text-primary")
        f3tH3.innerText ="Summary:"

        const hr3 = document.createElement("hr")
        hr3.setAttribute("class","backgound-blue mt-1 ms-2 me-2")

        const p5 = document.createElement("p")
        p5.setAttribute("class","mt-1 mb-1 ms-2 me-2")
        p5.innerText = `${valueOverview}`

        const divcol7Skills = document.createElement("div")
        divcol7Skills.setAttribute("class","col7-skills")

        const f4tH3 = document.createElement("h3")
        f4tH3.setAttribute("class","mt-4 mb-0 ms-2 me-2 fs-2 text-primary")
        f4tH3.innerText ="Skills:"

        const hr4 = document.createElement("hr")
        hr4.setAttribute("class","backgound-blue mt-1 ms-2 me-2")

        const divrow = document.createElement("div")
        divrow.setAttribute("class","row")

        const divlist1 = document.createElement("div")
        divlist1.setAttribute("class","col-5 ms-3 skills-list1")

        const ul1 = separateComma(valueSkills,2)
        
        const divjobs = document.createElement("div")
        divjobs.setAttribute("class","col7-jobs")

        const f5tH3 = document.createElement("h3")
        f5tH3.setAttribute("class","mt-4 mb-0 ms-2 me-2 fs-2 text-primary")
        f5tH3.innerText ="Jobs:"

        const divrow2 = document.createElement("div")
        divrow2.setAttribute("class","row")

        const hr5 = document.createElement("hr")
        hr5.setAttribute("class","backgound-blue mt-1 ms-2 me-2")

        const divlist2 = document.createElement("div")
        divlist2.setAttribute("class","col-5 ms-3 jobs-list1")

        const ul2 = separateComma(valueJobs,2)

        const divCol5Educations = document.createElement("div")
        divCol5Educations.setAttribute("class","col5-contact")

        const f6tH3 = document.createElement("h3")
        f6tH3.setAttribute("class","mt-4 mb-0 ms-2 me-2 fs-2 text-primary")
        f6tH3.innerText ="Educations:"

        const hr6 = document.createElement("hr")
        hr6.setAttribute("class","backgound-blue mt-1 ms-2 me-2")

        const p6 = document.createElement("p")
        p6.setAttribute("class","mt-1 mb-1 ms-2 me-2")
        p6.innerText = `${separateComma(valueEducations,1)}`

        const divCol5Certification = document.createElement("div")
        divCol5Certification.setAttribute("class","col5-contact")

        const f7tH3 = document.createElement("h3")
        f7tH3.setAttribute("class","mt-4 mb-0 ms-2 me-2 fs-2 text-primary")
        f7tH3.innerText ="Certifications:"

        const hr7 = document.createElement("hr")
        hr7.setAttribute("class","backgound-blue mt-1 ms-2 me-2")

        const p7 = document.createElement("p")
        p7.setAttribute("class","mt-1 mb-1 ms-2 me-2")
        p7.innerText = `${separateComma(valueCertifications,1)}`

        const f8tH3 = document.createElement("h3")
        f8tH3.setAttribute("class","fs-6 mt-5")
        f8tH3.innerText =`for more information visit My web site ${valueWebSite}`

        const divFinal = document.createElement("div")
        divFinal.setAttribute("class","background-blue bg-info")
        
        const br4 = document.createElement("br")
        const br5 = document.createElement("br")
        const br6 = document.createElement("br")

        // lest fucking go xd
        
        cvContainer.appendChild(divContainerMt5)
        divContainerMt5.appendChild(divRowBgWithe)

        divRowBgWithe.appendChild(divCol5P0)
        divCol5P0.appendChild(divBackBlue)
        divBackBlue.appendChild(br1)
        divBackBlue.appendChild(br2)
        divBackBlue.appendChild(br3)
        divCol5P0.appendChild(firstH1)
        divCol5P0.appendChild(firstH2)
        divCol5P0.appendChild(divCol5Contact)
        divCol5Contact.appendChild(firstH3)
        divCol5Contact.appendChild(hr1)
        divCol5Contact.appendChild(h41)
        divCol5Contact.appendChild(p1)
        divCol5Contact.appendChild(h42)
        divCol5Contact.appendChild(p2)
        divCol5Contact.appendChild(h43)
        divCol5Contact.appendChild(p3)
        divCol5P0.appendChild(divCol5Languages)
        divCol5Languages.appendChild(f2tH3)
        divCol5P0.appendChild(hr2)
        divCol5P0.appendChild(p4)

        divRowBgWithe.appendChild(divCol7M5P0)
        divCol7M5P0.appendChild(divcol7summry)
        divcol7summry.appendChild(f3tH3)
        divcol7summry.appendChild(hr3)
        divcol7summry.appendChild(p5)
        divCol7M5P0.appendChild(divcol7Skills)//bug in skills
        divcol7Skills.appendChild(f4tH3)
        divcol7Skills.appendChild(hr4)
        divcol7Skills.appendChild(divrow)
        divrow.appendChild(divlist1)
        divlist1.appendChild(ul1)
        divCol7M5P0.appendChild(divjobs)
        divjobs.appendChild(f5tH3)
        divjobs.appendChild(hr5)
        divjobs.appendChild(divrow)
        divrow2.appendChild(divlist2)
        divlist2.appendChild(ul2)
        divCol7M5P0.appendChild(divCol5Educations)
        divCol5Educations.appendChild(f6tH3)
        divCol5Educations.appendChild(hr6)
        divCol5Educations.appendChild(p6)
        divCol7M5P0.appendChild(divCol5Certification)
        divCol5Certification.appendChild(f7tH3)
        divCol5Certification.appendChild(hr7)
        divCol5Certification.appendChild(p7)
        divCol7M5P0.appendChild(f8tH3)
        divCol7M5P0.appendChild(divFinal)
        divFinal.appendChild(br4)
        divFinal.appendChild(br5)
        divFinal.appendChild(br6)

        const btn = document.createElement("button")
        btn.setAttribute("class", "m-2 btn btn-danger")
        btn.innerText ="Delete"
        btn.addEventListener("click", function(){
            if(confirm("Do you want to delete this cv?")){
                cvContainer.removeChild(divContainerMt5)
                cvContainer.removeChild(btn)
            }
        })
        cvContainer.appendChild(btn)

        
        
        clean();
    }else{
        alert("PLEASE - check the rectangles red")
    }
}