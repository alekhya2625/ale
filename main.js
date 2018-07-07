function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200" ){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}

getfile("data.json",function(text){
  let data = JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);

})
var child2=document.querySelector(".childTwo");
function career(careerInfo){
console.log(careerInfo);
var careerHeading=document.createElement("h3");
child2.appendChild(careerHeading);
careerHeading.textContent="Career Objective";
var careerHr=document.createElement("hr");
child2.appendChild(careerHr);


var ch=document.createElement("p");
ch.textContent=careerInfo.info;
child2.appendChild(ch);
}
function education(edu){
var eduHeading=document.createElement("h3");
eduHeading.textContent="EDUCATIONAL QUALIFICATION";
child2.appendChild(eduHeading);
var careerHr=document.createElement("hr");
child2.appendChild(careerHr);

var eduTable=document.createElement("table");
eduTable.border="1";
var tr1="<tr><td>Degree</td><td>INSTITUTE</td><td>Data</td></tr>";
//eduTable.innerHTML=tr1;
var tr2=""
for(var i=0;i<edu.length;i++)
{
  tr2+="<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].data+"</td></tr>";

}
eduTable.innerHTML=tr1+tr2;
child2.appendChild(eduTable);
}
function skills(skill){
  var ul=document.createElement("ul");
  child2.appendChild(ul);
  for(var i=0;i<skill.length;i++)
  {
    var li=document.createElement("li");
    li.textContent=skill[i].title+":"+skill[i].content;
    ul.appendChild(li);
  }
}
