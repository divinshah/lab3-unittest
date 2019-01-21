//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
//alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 * 
 */
var regexID = /(n|N)\d{8}/;
function checkhumbrID(humberID){
    let validID = false;
    if(humberID == undefined){
        validID = false;
    }
    else if (regexID.test(humberID)){
        validID = true;
    }

    return validID;

}

