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
                case 'creatifs':
                   creatifs();
                   break;
                case 'visuals':
                   visuals();
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
  changePage('.explore', ['.map', '.ownProfile']);
}

function connect() {
  console.log("connect");
  changePage('.map', ['.ownProfile', '.explore']);
}

function ownProfile() {
  console.log("ownProfile");
  changePage('.ownProfile', ['.explore', '.map']);
}
