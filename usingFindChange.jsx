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

// this replaces random words with a FNORD
for(var i = 0;i < 13; i++){
	var theValue = Math.floor(Math.random()*theTextFrame.words.length-1);
	theTextFrame.words.item(theValue).contents = "FNORD";
	}
	findFnordsText(theDoc);
	//findFnordsGrep(theDoc);
	
	
}

function findFnordsText(theDoc) {
	 //Clear the find/change grep preferences.
    app.findTextPreferences = NothingEnum.nothing;
    app.changeTextPreferences = NothingEnum.nothing;
    //Set the find options.
    app.findChangeTextOptions.includeFootnotes = false;
    app.findChangeTextOptions.includeHiddenLayers = false;
    app.findChangeTextOptions.includeLockedLayersForFind = false;
    app.findChangeTextOptions.includeLockedStoriesForFind = false;
    app.findChangeTextOptions.includeMasterPages = false;
    //Regular expression for finding
    app.findTextPreferences.findWhat = "FNORD";
	// this changes only 24 pt size Text
    // app.findTextPreferences.pointSize = 24;
	try{
	app.changeTextPreferences.appliedCharacterStyle = theDoc.characterStyles.item("charStyle");
	
	} catch(e){
		$.writeln(e);	
		
	}
	// this changes the found text to 50 pt
	//app.changeTextPreferences.fillTint = 50;
	// this changes the found text to another word
	app.changeTextPreferences.changeTo = "DRONF";
	// this changes the text to underlined text
    //app.changeTextPreferences.underline = true;

    theDoc.changeText();
    //Clear the find/change preferences after the search.
    app.findTextPreferences = NothingEnum.nothing;
    app.changeTextPreferences = NothingEnum.nothing;
}

function findFnordsGrep(theDoc) {
	 //Clear the find/change grep preferences.
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
    //Set the find options.
    app.findChangeGrepOptions.includeFootnotes = false;
    app.findChangeGrepOptions.includeHiddenLayers = false;
    app.findChangeGrepOptions.includeLockedLayersForFind = false;
    app.findChangeGrepOptions.includeLockedStoriesForFind = false;
    app.findChangeGrepOptions.includeMasterPages = false;
    //Regular expression for finding
	// see these pages for more about GREP
	// http://de.wikipedia.org/wiki/Regul%C3%A4rer_Ausdruck
	// http://bit.ly/e86ngV // indesign help ->
	// http://www.regular-expressions.info/reference.html
	// and a tool for testing
	// http://gskinner.com/RegExr/desktop/
	
	// !!!!! BEWARE Indesign GREP works a bit diffrent if it comes to
	// multiline REGEX's 
	
    app.findGrepPreferences.findWhat = "(FNORD)"; 
	try{
	app.changeGrepPreferences.appliedCharacterStyle = theDoc.characterStyles.item("charStyle");
	
	} catch(e){
		$.writeln(e);	
		
	}
	app.changeGrepPreferences.changeTo = "$1" + " = DRONF";

    //Apply the change to 24-point text only.
    //app.findGrepPreferences.pointSize = 24;
    //app.changeGrepPreferences.underline = true;
    theDoc.changeGrep();
	//app.changeGrepPreferences.fillTint = 50;
    //Clear the find/change preferences after the search.
    app.findGrepPreferences = NothingEnum.nothing;
    app.changeGrepPreferences = NothingEnum.nothing;
    //</fragment>
}
