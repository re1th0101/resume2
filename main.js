function getjson(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if (xhr.readyState === 4 && xhr.status =="200") {
            callback(xhr.responseText);
        }
    }
xhr.send();    
}

var parent=document.querySelector(".parent-div");

// details div
var divForDetails=document.createElement("div");
divForDetails.classList.add("details");
parent.appendChild(divForDetails);

// right side div
var rightSideDiv = document.createElement('div');
rightSideDiv.className = 'right-side';
parent.appendChild(rightSideDiv);

// carrer obj div
var divForCareerObj=document.createElement("div");
divForCareerObj.classList.add("carrerobjectives");
rightSideDiv.appendChild(divForCareerObj);

// edu details div
var divForEduDetails=document.createElement("div");
divForEduDetails.classList.add("Educationaldetails");
rightSideDiv.appendChild(divForEduDetails);

// certification details div
var divForCerDetails=document.createElement("div");
divForCerDetails.classList.add("Certifications");
rightSideDiv.appendChild(divForCerDetails);

//declaration details div
var divForDecDetails=document.createElement("div");
divForDecDetails.classList.add("Declaration");
rightSideDiv.appendChild(divForDecDetails);




getjson("data.json",function(text){
    var data=JSON.parse(text);
    console.log(data);
    mydetails(data);
    
    // getting carrer obj data 
    carrerobj(data.carrerobjectives);
    
    // getting edu details data
    education(data.Educationaldetails);
    
    // getting certification details
    certification(data.Certifications);
    

    // getting declaration statement
    dec(data.Declaration);
})





function mydetails(React){

    
    // img element
    var i=document.createElement("img");
    i.classList.add("image");
    i.src=React.details.image;
    i.alt="profile-image";

    // name element
    var name=document.createElement("h3");
    name.classList.add("name");
    name.setAttribute("id","name");
    name.textContent=React.details.name;
    
    // mail element
    var e=document.createElement("h3");
    e.classList.add("mail");
    e.textContent=React.details.mail;
    
    // mobile element
    var m=document.createElement("h3");
    m.classList.add("mobile");
    m.textContent=React.details.mobile;
    
    // address element
    var a=document.createElement("h3");
    a.classList.add("address");
    a.textContent=React.details.address;
    
    // div for personal-details
    var divForPersonalDetails = document.createElement('div');
    divForPersonalDetails.className = 'personal-details';
    // appending personal-details div into details div
    divForDetails.appendChild(divForPersonalDetails);
    // appending personal details into div
    divForPersonalDetails.appendChild(i);
    divForPersonalDetails.appendChild(name);
    divForPersonalDetails.appendChild(e);
    divForPersonalDetails.appendChild(m);
    divForPersonalDetails.appendChild(a);
    
    // hobbies div
    var divForHobbies=document.createElement("div");
    divForHobbies.className = "hobbies";
    divForDetails.appendChild(divForHobbies);
    divForHobbies.innerHTML = "Hobbies:";
    // unordered list for hobbies
    var unorderedListForHobbies = document.createElement("ul");
    unorderedListForHobbies.className = "hobbies-list";
    divForHobbies.appendChild(unorderedListForHobbies);
    // appending list items into unordered list
    React.hobbies.forEach((hobby) => {
        unorderedListForHobbies.innerHTML +=`<li>${hobby}`;
    })
    
    // languages div
    var divForLanguages = document.createElement("div");
    divForLanguages.className = "languages";
    divForDetails.appendChild(divForLanguages);
    divForLanguages.innerHTML = "Languages:";
    var orderedListForLanguages = document.createElement("ol");
    divForLanguages.appendChild(orderedListForLanguages);
    React.languages.forEach((language) => {
        orderedListForLanguages.innerHTML += `<li>${language}`;
    })

}
function carrerobj(c){
    var h=document.createElement("h2");
    h.textContent="Carrer Objectives:";
    divForCareerObj.appendChild(h);
    p=document.createElement("p");
    for(var i=0;i<c.length;i++){
        var li=document.createElement("li");
        li.textContent=c[i];
        p.appendChild(li);
    }
    divForCareerObj.appendChild(p);

}  
function education(e){
    var h=document.createElement("h2");
    h.textContent="Educational-Details:";
    divForEduDetails.appendChild(h);
    var table=document.createElement("table");
    var row="";
    for(var i=0;i<e.length;i++){
        row+="<tr><td>"+e[i].Qualification+"</td><td>"+e[i].Board
        +"</td><td>"+e[i].Percentage+"</td><td>"+e[i].Year+"</td></tr>";
    }
    table.innerHTML=row;
    divForEduDetails.appendChild(table);
}      

function certification(c){
    var h=document.createElement("h2");
    h.textContent="Certifications:";
    divForCerDetails.appendChild(h);
    p=document.createElement("p");
    for(var i=0;i<c.length;i++){
        var li=document.createElement("li");
        li.textContent=c[i];
        p.appendChild(li);
    }
    divForCerDetails.appendChild(p);

}   

function dec(c){
    var h=document.createElement("h2");
    h.textContent="Declaration:";
    divForDecDetails.appendChild(h);
    p=document.createElement("p");
    for(var i=0;i<c.length;i++){
        var li=document.createElement("li");
        li.textContent=c[i];
        p.appendChild(li);
    }
        
    divForDecDetails.appendChild(p);

}   

