// with some help from Martin Fischer who referenced Peter Kahrel

try_char();
function try_char () 
    { 
    var ip = app.selection[0]; 
	
   // var pos = ip_position (app.selection[0]); 
    try 
        { 
        // insert the character 
        //ip.contents = uni;
		var storage = ip.contents;
        // create outline 
        ip.paragraphs[0].characters[0].createOutlines(); 
        // if we got here it worked, so delete the outline 
        ip.paragraphs[0].characters[0].remove(); 
        // insert the character (again) 
        ip.contents = storage; 
        exit(); 
        } 
    catch(_) 
        { 
        // couldn't create outline, so delete it 
        ip.paragraphs[0].characters[0].appliedFont = "Times"; 
        // and create overstrike of ch and diacr 
        } 
    }

	function ip_position (ip)
	    {
	    if (ip.constructor.name != "InsertionPoint")
	        errorM ("Need an insertion point (line 540).")
	    else
	        return ip.index - ip.paragraphs[0].insertionPoints[0].index
	    }

		function errorM (m)
		    {
		    alert (m)
		    exit()
		    }