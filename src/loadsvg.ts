import * as fs from 'fs';
const xml2js = require('xml2js');
let parser = new xml2js.Parser();
export function readFile(resolve, _reject) {
  fs.readFile('fontawesome-webfont.svg', (_err, data) => {
    parser.parseString(data, (_err, result) => {
      let datas = [];
      let strings = result.svg.defs[0].font[0].glyph;
      for (let i = 0; i < strings.length; i++) {
        datas.push(strings[i].$);
      }
      resolve(datas);
    });
  });
}
export function svgToBase64(svg, callback) {
  let href = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svg)));
  let image = new Image();
  image.src = href;
  image.onload = () => {
    let canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    let context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    //svg转png的base64编码;
    let imgDataUri = canvas.toDataURL('image/png');
    callback.call(this, imgDataUri);
  };
}
/*
export function searchSVG(name) {
  //file path
  let file = 'fontawesome-webfont.svg';
  let xmlDoc = null;
  //根据浏览器的类型读取xml文件
  try {
    xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    xmlDoc.async = false;
    xmlDoc.load(file);
  }
  catch (e) {
    try { // IE
      xmlDoc = document.implementation.createDocument("", "", null);
      xmlDoc.async = false;
      xmlDoc.load(file);
    }
    catch (e) {
      try { //Google Chrome
        let xmlhttp = new window.XMLHttpRequest();
        xmlhttp.open('GET', file, false);
        xmlhttp.send(null);
        xmlDoc = xmlhttp.responseXML.documentElement;
      }
      catch (e) {
        let error = e.message;
      }
    }
  }
  let findList = [];
  let glyphList = xmlDoc.getElementsByTagName('glyph');
  for (let i = 0; i < glyphList.length; i++) {
    let index = glyphList[i].attributes.getNamedItem('glyph-name').value.search(name);
    if (index >= 0) {
      let obj = {
        name: '',
        d: ''
      };
      obj.name = glyphList[i].attributes.getNamedItem('glyph-name').value;
      obj.d = glyphList[i].attributes.getNamedItem('d').value;
      //console.log(glyphList[i]);
      findList.push(obj);
      console.log(obj);
    }
  }
  return findList;
}
*/
