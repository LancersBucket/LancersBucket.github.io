/* Adapted from https://stackoverflow.com/a/4814918 */
// Sets the img tag source to either a sheild.io up or down badge depending on the status of lancersbucket.github.io
function set_test(name,status){
    var el=document.getElementById(name+'_test');
    el.src=status?'https://img.shields.io/badge/lancersbucket.github.io_status-up-green:':'https://img.shields.io/badge/lancersbucket.github.io_status-down-red';
}

// Loads an image from lancersbucket.github.io to see if it is accessable
(function(){
    // Create an element to load the image
    var img=document.createElement('img');
    img.src='https://lancersbucket.github.io/assets/images/bio/bio.jpg';
    // If the image loads, set the status to 1 (up)
    img.onload=function(){set_test('lancersbucket',1)};
    // If the image doesn't load, set the status to 0 (down)
    img.onerror=function(){set_test('lancersbucket',0)};
})();