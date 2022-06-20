$(document).ready(function(){

    /*-------------------------variables-------------------------*/
    let valueNamed = '';let valueLastName = '';let valueAddress = '';let valueEmail = '';let valuePhone = '';let valueWebSite = '';let valueLanguage = '';let valueJobs = '';let valueEducations = '';let valueSkills = '';let valueCertifications = '';let valueOverview = '';

    /*-------------------------events-------------------------*/
    $("#createBtn").on("click",function(){
        createCv();
    });
    $("#cleanBtn").on("click",function(){
        clean();
    });
    

    /*-------------------------fUNCTIONS-------------------------*/
    //creator cv
    function createCv(){

        valueNamed = $("#name").val();valueLastName = $("#lastname").val();valueAddress = $("#address").val();valueEmail = $("#email").val();valuePhone = $("#phone").val();valueWebSite = $("#website").val();valueLanguage = $("#language").val();valueJobs = $("#jobs").val();valueEducations = $("#educations").val();valueSkills = $("#skills").val();valueCertifications= $("#certification").val();valueOverview = $("#overview").val();

        if(validation()){
            createHtml();
        }else{
            alert("you need to check the red rectangle");
        }
    }

    //validation
    function validation(){ 
        let validationEmpty = false, validateEmail = false, validation = false; 

        //values and id list 
        const objectValuesAndIds = {0: ["#name",valueNamed],1: ["#lastname",valueLastName],2: ["#address",valueAddress],3: ["#email",valueEmail],4: ["#phone",valuePhone],5: ["#website",valueWebSite],6: ["#language",valueLanguage],7: ["#jobs", valueJobs],8: ["#educations",valueEducations],9: ["#skills",valueSkills],10: ["#certification",valueCertifications],11: ["#overview", valueOverview]}

        //to validate that it is not empty
        for(i in objectValuesAndIds){
            if(objectValuesAndIds[i][1] == "" || objectValuesAndIds[i][1] == null || objectValuesAndIds[i][1] == undefined){
                $(`${objectValuesAndIds[i][0]}`).addClass("validationFalse");
                $(`${objectValuesAndIds[i][0]}`).removeClass("validationTrue");
                validationEmpty = false;
            }
            else{
                $(`${objectValuesAndIds[i][0]}`).addClass("validationTrue");
                $(`${objectValuesAndIds[i][0]}`).removeClass("validationFalse");
                validationEmpty = true;
            }
        }
    
        //to validate email
        if(valueEmail.indexOf('@') > -1 && valueEmail.indexOf('.com') > -1){
            $(`${objectValuesAndIds[3][0]}`).removeClass("validationFalse");
            $(`${objectValuesAndIds[3][0]}`).addClass("validationTrue");
            validateEmail = true;
        }else if(valueEmail.indexOf('@') > -1 && valueEmail.indexOf('.do') > -1){
            $(`${objectValuesAndIds[3][0]}`).removeClass("validationFalse");
            $(`${objectValuesAndIds[3][0]}`).addClass("validationTrue");
            validateEmail = true;
        }else{
            $(`${objectValuesAndIds[3][0]}`).removeClass("validationTrue");
            $(`${objectValuesAndIds[3][0]}`).addClass("validationFalse");
            validateEmail = false
        }
        if(validationEmpty){
            if(validateEmail){
                return validation = true
            }
        }else{
            return validation = false
        }
    }

    //clean
    function clean(){
        const listClean = ["#name","#lastname","#address","#email","#phone","#website","#language","#jobs","#educations","#skills","#certification","#overview"]
        for(i in listClean){
            $(`${listClean[i]}`).val("").removeClass("validationTrue");
            $(`${listClean[i]}`).val("").removeClass("validationFalse");
        }
        $(`${listClean[0]}`).val("").removeClass("validationTrue").removeClass("validationFalse").focus();
    }

    //comma validation
    const separateComma = (value, num) => {
        if(num == 1){
            let a = value.replaceAll(",","<br>");
            return a
        }
        if(num == 2){
            let newValue = value.replaceAll(" ","");
            let listFor = newValue.split(",");
            for (i=0; i<=listFor.length; i++){
                return $("#ul1").append( '<li>' + listFor[i] + '</li>' );
            } 
        }
    }

    //create html structure
    function createHtml(){
        const createHtmlStructure =  `
        <div class="mt-5 container cv-border">
            <div class="row bg-white">
                <div class="col-5 p-0">
                    <div class="background-blue1">
                    <br><br></div>
                    <h1 class="mt-3 mb-1 ms-2 me-2 fs-2 ps-4 pe-5">${valueNamed}</h1>
                    <h2 class="mt-3 mb-1 ms-2 me-2 fs-2 ps-4 pe-5">${valueLastName}</h2>
                    <div class="col5-contact ps-4 pe-5">
                        <h3 class="mt-4 mb-0 ms-2 me-2 fs-2 text-color">Contact:</h3>
                        <hr class="backgound-blue mt-1 ms-2 me-2">
                        <h4 class="mt-1 mb-1 ms-2 me-2 fs-5">Address:</h4>
                        <p class="mt-1 mb-1 ms-2 me-2">${valueAddress}</p>
                        <h4 class="mt-3 mb-1 ms-2 me-2 fs-5">Phone:</h4>
                        <p class="mt-1 mb-1 ms-2 me-2">${valuePhone}</p>
                        <h4 class="mt-3 mb-1 ms-2 me-2 fs-5">Email:</h4>
                        <p class="mt-1 mb-1 ms-2 me-5 ">${valueEmail}</p>
                    </div>
                    <div class="col5-Languages ps-4 pe-5">
                        <h3 class="mt-4 mb-0 ms-2 me-5 fs-2 text-color">Languages:</h3>
                        <hr class="backgound-blue mt-1 ms-2 me-2">
                        <p class="mt-1 mb-1 ms-2 me-2">${separateComma(valueLanguage,1)}</p>
                    </div>
                </div>

                <div class="col-7 mt-5 pe-0">
                    <div class="col7-summary ps-4 pe-5">
                        <h3 class="mt-4 mb-0 ms-2 me-2 fs-2 text-color">Summary:</h3>
                        <hr class="backgound-blue mt-1 ms-2 me-2">
                        <p class="mt-1 mb-1 ms-2 me-2 ">${valueOverview}</p>
                    </div>
                    <div class="col7-skills ps-4 pe-5">
                        <h3 class="mt-4 mb-0 ms-2 me-2 fs-2 text-color">Skills:</h3>
                        <hr class="backgound-blue mt-1 ms-2 me-2">
                        <div class="row">
                            <div class="col-12 ms-3 skills-list1">
                                <ul id="ul1">
                                    ${separateComma(valueSkills,2)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col7-jobs ps-4 pe-5">
                        <h3 class="mt-4 mb-0 ms-2 me-2 pe-2 fs-2 text-color">Jobs experience:</h3>
                        <hr class="backgound-blue mt-1 ms-2 me-2">
                        <div class="row">
                            <div class="col-12 ms-3 jobs-list2">
                                <ul id="ul2">
                                    <li>${separateComma(valueJobs,2)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col5-Educations ps-4 pe-5">
                        <h3 class="mt-4 mb-0 ms-2 me-2 fs-2 text-color">Educations:</h3>
                        <hr class="backgound-blue mt-1 ms-2 me-2">
                        <p class="mt-1 mb-1 ms-2 me-2 fw-bold">${separateComma(valueEducations,1)}</p>
                    </div>
                    <div class="col5-certifications ps-4 pe-5">
                        <h3 class="mt-4 mb-0 ms-2 me-2 fs-2 text-color">Certifications:</h3>
                        <hr class="backgound-blue mt-1 ms-2 me-2">
                        <p class="mt-1 mb-1 ms-2 me-2 fw-bold">${separateComma(valueCertifications,1)}</p>
                    </div>
                    <h3 class="fs-6 mt-5 ms-2">for more information visit web site: ${valueWebSite}</h3>
                    <div class="background-blue2"><br><br></div>
                </div>

            </div>

        </div>
        `
        $("#cvContainer").append(createHtmlStructure);
    }
    
});