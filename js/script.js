xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","xml/blog.xml",false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;
x = xmlDoc.getElementsByTagName("blog");

function imagem1(){
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='img/" + x[i].getElementsByTagName("imagem1")[0].childNodes[0].nodeValue + "' class='img' height='150px'>");
    }
}

function texto1() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font1'>" +
            x[i].getElementsByTagName("texto1")[0].childNodes[0].nodeValue +
            "</>");
    }
}


function imagem2(){
    for (i = x.length - 1; i >= 0; i--) {
        document.write("<img src='img/" + x[i].getElementsByTagName("imagem2")[0].childNodes[0].nodeValue + "' class='img-ods' height='180px'>");
    }
}

function texto2() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font1'>" +
            x[i].getElementsByTagName("texto2")[0].childNodes[0].nodeValue +
            "</>");
    }
}

function ods1() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font3'>" +
            x[i].getElementsByTagName("ods-1")[0].childNodes[0].nodeValue +
            "</>");
    }
}

function ods2() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font3'>" +
            x[i].getElementsByTagName("ods-2")[0].childNodes[0].nodeValue +
            "</>");
    }
}

function  ods3() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font3'>" +
            x[i].getElementsByTagName("ods-3")[0].childNodes[0].nodeValue +
            "</>");
    }
}

function ods4() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font3'>" +
            x[i].getElementsByTagName("ods-4")[0].childNodes[0].nodeValue +
            "</>");
    }
}

function ods5() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font3'>" +
            x[i].getElementsByTagName("ods-5")[0].childNodes[0].nodeValue +
            "</>");
    }
}

function ods6() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font3'>" +
            x[i].getElementsByTagName("ods-6")[0].childNodes[0].nodeValue +
            "</>");
    }
}

function ods7() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font3'>" +
            x[i].getElementsByTagName("ods-7")[0].childNodes[0].nodeValue +
            "</>");
    }
}

function ods8() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font3'>" +
            x[i].getElementsByTagName("ods-8")[0].childNodes[0].nodeValue +
            "</>");
    }
}

function ods9() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font3'>" +
            x[i].getElementsByTagName("ods-9")[0].childNodes[0].nodeValue +
            "</>");
    }
}

function ods10() {

    for (i = x.length - 1; i >= 0; i--) {
        document.write("<p class='font3'>" +
            x[i].getElementsByTagName("ods-10")[0].childNodes[0].nodeValue +
            "</>");
    }
}

