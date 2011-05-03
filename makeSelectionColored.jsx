// basic javascript snippets for indesign cs 4
// written by fabiantheblind

// first of all open basicDoc.idml or use script buildDocument.jsx
// to build the doc we are using
// select some text


main();
function main(){
var myDoc = app.activeDocument;
// Create a list of swatches
var list_of_swatches = myDoc.swatches.everyItem().name;

// Make dialog box for selecting the swatch
var swatch_dialog = app.dialogs.add({name:"Select a color"});
with(swatch_dialog.dialogColumns.add()) {
	with(borderPanels.add()) {
		with(dialogColumns.add()) {
			staticTexts.add({staticLabel:"Swatches:"});
		}
		with(dialogColumns.add()) {
			var selected_swatch = dropdowns.add({stringList:list_of_swatches, selectedIndex:0});
		}
	}
}
swatch_dialog.show();


for (var i = 0; i<app.selection.length; i++) {
	 	
try {
			var myChars = app.selection[i].characters.everyItem();

} catch (e) {
	
}
		
try {
			myChars.fillColor =  myDoc.swatches.item(selected_swatch.selectedIndex);

} catch (e) {
	
}
}
}

 
 