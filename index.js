document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.modal').modal();
})