function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

/*=====================================
===========Back Function===============
=====================================*/

function goBack1() {
    window.history.go(-1);
}

function goBack2() {
    window.history.go(-2);
}
