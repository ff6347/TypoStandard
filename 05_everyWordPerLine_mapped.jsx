﻿// basic javascript snippets for indesign cs 4// written by fabiantheblind// first of all open basicDoc.idml or use script buildDocument.jsx// to build the doc we are usingcheckSetup ();//this runs the functionmain();// this is the functionfunction main(){// setup some variablesvar d = app.activeDocument; // active docvar pg = d.pages.item(0); // first pagevar tf = pg.textFrames.item(0); // the one textframe that is therevar lns = tf.lines;// now we can loop thru all lines in the textfor(var i = 0;i < lns.length; i++){	// this loops thru all words in the lines	var wrds = lns[i].words;	for(var j = 0;j < wrds.length ;j++){	// this mappes the values	var val = (100 / wrds.length) *j;			tf.lines.item(i).words.item(j).fillTint = val;		// or use 		// wrds[j].fillTint = val;		}	}}function checkSetup(){				if(app.documents.length < 1){			alert("You need a document with a page and a textframe with some text\nYour document is missing\nUse \"buildDocument.jsx\"!");			exit();			}		if(app.documents.item(0).pages.item(0).textFrames.length < 1){			alert("You need a document with a page and a textframe with some text\nYour textframe is missing\nUse \"buildDocument.jsx\"!");			exit();			}		if(app.documents.item(0).pages.item(0).textFrames.item(0).characters.length < 1){			alert("You need a document with a page and a textframe with some text\nYour textframe has no content\nUse \"buildDocument.jsx\"!");			exit();			}			}