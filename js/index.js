var inputName = document.querySelector("#inputName");
var inputUrl = document.querySelector("#inputUrl");
var inputs = document.querySelectorAll("input");
var subBtn = document.querySelector("#sub-btn");
var urlValue = ``;
var dataContainer = [];

if (localStorage.getItem("data") != null) {
  dataContainer = JSON.parse(localStorage.getItem("data"));
  displayData();
}
subBtn.addEventListener("click", addData);
function addData() {
  var data = {
    name: inputName.value,
    url: inputUrl.value,
  };
  dataContainer.push(data);
  localStorage.setItem("data", JSON.stringify(dataContainer));
  displayData();
  clearForm();
}

function displayData() {
  var temp = ``;
  for (var i = 0; i < dataContainer.length; ++i) {
    temp += `
    <div class="row">
        <div class="col-md-4">
          <h2>${dataContainer[i].name}</h2>
        </div>
        <div class="col-md-8 ">
          <a class="btn btn-primary" href="${visitUrl(
            i
          )}" target="_blank" onclick="visitUrl();" >visit</a>
          <button class="btn btn-danger" onclick="deletData();">Delete</button></td> 
        </div>
      </div>

    `;
  }
  document.querySelector(".contetnt").innerHTML = temp;
}

//      *** visit Url ***
function visitUrl(i) {
  if (
    dataContainer[i].url.includes("https://") != true &&
    dataContainer[i].url.includes("http://") != true
  ) {
    return "https://" + dataContainer[i].url;
  } else {
    return dataContainer[i].url;
  }
}

//    *** delete Data ***
function deletData(deleteindex) {
  dataContainer.splice(deleteindex, 1);
  displayData();
}

//  *************************************************

function clearForm() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}
