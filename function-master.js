//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //  Should take an object and return its values in an array
    //create a storage array
    let sto = [];
    //access keys and values in the array
    for (var key in object) {
        //push the values to the storage array
        sto.push(object[key]);
    }
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //Should take an object and return all its keys in a string each separated with a space
    //create a storage array
    let sto = [];
    //access keys and values in the array
    for (var key in object) {
        //push the keys to the storage array
        sto.push(object.key);
    }
    //return the array as a string with spaces between
    return sto.join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //Should take an object and return all its string values in a string each separated with a space
    //create a storage array
    sto = [];
    //create another storage array
    rage = [];
    //access keys and values in the array
    for (var key in object) {
        //push the values to the storage array
        sto.push(object[key]);
    }
    //iterate over the array
    for (let i = 0; i < sto.length; i++) {
        //if the value is a string, add it to rage
        typeof sto[i] === 'string' ? rage.push(sto[i]) : console.log('waymin!');
    }
    //return the second storage array as a string with spaces
    return rage.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //Should take one argument and return 'array' if its an array and 'object' if its an object
    //if typeof comes to object and the argument isnt null, it's either an array or an object.. if so
    if (typeof collection === 'object' && collection !== null) {
        //check to see if it's an array. if it is
        if (Array.isArray(collection)) {
            //return array
            return 'array';
            //if not, return object
        }else {
            return 'object';
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //Should take a string of one word, and return the word with its first letter capitalized
    //isolate the first letter of the string. Give a variable to that uppercased letter
    let x = string[0].toUpperCase();
    //return that letter along with the rest of the string
    return x + string.substring(1, string.length);

    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // Should take a string of words and return a string with all the words capitalized
    //create a storage array
    let sto = [];
    //push the string into the storage array
    sto.push(string);
    //seperate each string into individual words

    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //Should take an object with a name property and return 'Welcome <Name>!'

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //Should take an object with a name an a species and return '<Name> is a <Species>'

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //Should take a name and an object and add the name to the object's friends array then return the object

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //Should take a name and an object and return true if <name> is a friend of <object> and false otherwise

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //Should take a name and a list of people, and return a list of all the names that <name> is not friends with

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //Should take an array and return an array with all the duplicates removed

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}