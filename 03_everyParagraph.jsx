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

// now we can loop thru the text
for(var i = 0;i < theTextFrame.paragraphs.length; i++){
	var theValue = Math.random()*23;
		if(theValue < 4.9){
			theValue = 5;	
		}
	// the next line loops thru all characters in the text
	theTextFrame.paragraphs.item(i).pointSize = theValue;
	}
}