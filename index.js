 var formdata = new FormData();
formdata.append("type", "Dark Square");
formdata.append("tags", "Top,Jersy,Sweater,Crop,Blanket");

var ajax = new XMLHttpRequest();
ajax.addEventListener("load", completeHandler, false);

ajax.open("POST", "https://ad.simaneka.com/api/get");
ajax.setRequestHeader("authorisation", "FsjeeffW6I0DENixhORN9hKLQ87F7F4y");

ajax.send(formdata);

function completeHandler(event) {
    var response = JSON.parse(event.target.responseText);

    console.log(response);
    document.querySelector('.advertIMG').src = response.link;
    document.querySelector('.advertIMG').alt = response.alt;
    document.querySelector('.anchorElement').href = response.href;
    document.querySelector('.headerText').innerHTML = response.message;
}