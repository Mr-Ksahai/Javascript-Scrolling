func4()
{
    window.scrollTo(0,findPosition(document.getElementById("4"))-5);
}
function findPosition(obj) {
    var currenttop = 0;
    if (obj.offsetParent) {
        do {
            currenttop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [currenttop];
    }
}