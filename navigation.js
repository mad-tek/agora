function loadJS(file) {
    // DOM: Create the script element
    var jsElm = document.createElement("script");
    // set the type attribute
    jsElm.type = "application/javascript";
    // make the script element load file
    jsElm.src = file;
    // finally insert the element to the body element in order to load the script
    document.body.appendChild(jsElm);
}

$(function(){
    $('a').on('click',function(e){
        var href = this.href.split("=");
        e.preventDefault();
            switch(href[1]){
                case 'explore':
                   explore();
                   ;
                   break;
                case 'connect':
                   connect();
                   ;
                   break;
                case 'ownProfile':
                   ownProfile();
                   ;
                   break;
                case 'cheeseProfile':
                   cheeseProfile();
                   break;
                case 'glassProfile':
                   glassProfile();
                   break;
                case 'blog':
                   blog();
                   break;
            }
    });
});

var changePage = function(showPage, hidePageArr) {
  $(showPage).attr( "style", "" );
  for(var i = 0; i < hidePageArr.length; i++){
    $(hidePageArr[i]).attr( "style", "display: none;");
  };
}

function explore() {
  console.log("explore!!");
  changePage('.explore', ['.map', '.ownProfile', '.cheeseProfile', '.glassProfile']);
}

function connect() {
  console.log("connect");
  changePage('.map', ['.ownProfile', '.explore', '.cheeseProfile', '.glassProfile']);

}

function ownProfile() {
  console.log("ownProfile");
  changePage('.ownProfile', ['.explore', '.map', '.cheeseProfile', '.glassProfile']);
}

function cheeseProfile() {
  changePage('.cheeseProfile', ['.explore', '.map', '.ownProfile', '.glassProfile']);
}

function glassProfile() {
  changePage('.glassProfile', ['.explore', '.map', '.ownProfile', '.cheeseProfile', '.coverPage']);
}
