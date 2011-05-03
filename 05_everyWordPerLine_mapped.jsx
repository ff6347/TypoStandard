// basic javascript snippets for indesign cs 4
// written by fabiantheblind

// first of all open basicDoc.idml or use script buildDocument.jsx
// to build the doc we are using

//this runs the function
main();
// this is the function
function main(){
// setup some variables
var theDoc = app.activeDocument; // active doc
var thePage = theDoc.pages.item(0); // first page
var theTextFrame = thePage.textFrames.item(0); // the one textframe that is there

// now we can loop thru all lines in the text
for(var i = 0;i < theTextFrame.lines.length; i++){

	// this loops thru all words in the lines
	for(var j = 0;j < theTextFrame.lines.item(i).words.length ;j++){
	// this mappes the values
	var theValue = (100 / theTextFrame.lines.item(i).words.length) *j;
	
		theTextFrame.lines.item(i).words.item(j).fillTint = theValue;
		}
	}
}