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

// now we can loop thru lines ofthe text
for(var i = 0;i < theTextFrame.lines.length; i++){

	// the next line loops thru all words in the line
	for(var j = 0;j < theTextFrame.lines.item(i).words.length ;j++){
		var theValue = Math.random()*100;
			if(theValue < 10){
				theValue = 10;	
			}
		theTextFrame.lines.item(i).words.item(j).fillTint = theValue;
		}
	}
}