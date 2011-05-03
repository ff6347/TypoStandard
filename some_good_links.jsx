// basic javascript snippets for indesign cs 4
// written by fabiantheblind

main();
// this is the function
function main(){

var theLinks = new Array();

theLinks[0] = "\nhttp://www.hilfdirselbst.ch/";
theLinks[1] = "http://www.adobe.com/products/indesign/scripting/";
theLinks[2] = "http://www.jongware.com/idjshelp.html";
theLinks[3] = "http://www.indesignscript.de/";
theLinks[4] = "http://indesignsecrets.com/";
theLinks[5] = "http://indisnip.wordpress.com/";
theLinks[6] = "http://blog.gilbertconsulting.com/2009/12/grep-lesson.html";
theLinks[7] = "http://forums.adobe.com/community/indesign/indesign_scripting";
theLinks[8] = "http://de.selfhtml.org/javascript/";
theLinks[9] = "https://github.com/fabiantheblind";
theLinks[10] = "http://www.delicious.com/fabiantheblind/indesign";
theLinks[11] = "http://www.the-moron.net/blog/?tag=javascript";
theLinks[12] = "http://lmgtfy.com/?q=indesign+javascript";
theLinks[13] = "http://www.mediawerk.de/mw/mw_htm_pages/head/InDesign-Menu.htm"


// now we can loop thru the array
var theString = "";
for(var i = 0;i < theLinks.length; i++){

	theString = theString + theLinks[i] + "\n";
	}
	
	alert(theString);
	// $.writeln(theString);
}