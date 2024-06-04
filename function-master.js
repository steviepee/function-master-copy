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
    return sto;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //Should take an object and return all its keys in a string each separated with a space
    //create a variable of the keys as a string separated by a space
    let space = Object.keys(object).join(' ');
    //return that variable
    return space;

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
    //seperate each string into individual words with their own indexes. hold it with a variable
    let split = string.split(' ');
    //iterate over each word
    for (i = 0; i < split.length; i++) {
        //in each iteration, set a variable for the first letter capitalized
        const x = split[i][0].toUpperCase();
        //for each word, add the new letter to the beginning of the rest of the word. Push that word into the storage array
        sto.push(x + split[i].substring(1, split[i].length));
    }
    //return the new storage array as a string with the words spaced
    return sto.join(' ');  
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //Should take an object with a name property and return 'Welcome <Name>!'
   //set a variable for the first letter of the name property of the object capitalized
   let x = object.name[0].toUpperCase();
    //if arg has a name property, return welcome 'that name'. Otherwise, just say hi
    return object.name ? 'Welcome' + ' ' + x + object.name.substring(1, object.name.length) + '!' : 'Hey yoooouuu'

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
//Should take an object with a name an a species and return '<Name> is a <Species>'
//create variables for the values of both keys
let nam = object.name;
let spec = object.species;
//create a variable for the name and species property's first letter capitalized
let x = nam[0].toUpperCase();
let y = spec[0].toUpperCase();
//return the specified phrase with the name and species property properly capitalized
return x + nam.substring(1, nam.length) + ' is a ' + y + spec.substring(1, spec.length); 
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'
    //if object has a noises value that is an array with >0 noises, return it as a string with spaces, if not, return 'there are no noises'
    return Array.isArray(object.noises) && object.noises.length ? object.noises.join(' ') : 'there are no noises';

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
    //create a variable that splits the string into individual words
    let split = string.split(' ');
    //iterate over each word in the string
    for (let i = 0; i < split.length; i++) {
        //if word matches that word
        if (word === split[i]) {
            //return true
            return true;
        }//if none return true, return false
    }
    return false;

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //Should take a name and an object and add the name to the object's friends array then return the object
    //push the intended name into the object's current friend's array
    object.friends.push(name);
    //return the new object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
    //if the object has no friends array, give it one
    object.friends ? console.log('on it') : object.friends = [];
    //create a variable for the friends array in said object
    let check = object.friends;
    //iterate over the friends array
    for (let i = 0; i < check.length; i++) {
        //if the name matches any of the friends in the array
        if (name === check[i]) {
            //return true
            return true;
        }//if nothing in the loop returns true
    }//return false
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //Should take a name and a list of people, and return a list of all the names that <name> is not friends with
    //create two storage arrays
    let sto = [];
    //iterate over the array of objects
    for (let i = 0; i < array.length; i++) {
        //create a variable for the current object we're looking at
        const obj = array[i];
        //and a variable for that object's friends array
        const buds = obj.friends
        //if the names are not the same
        if (name !== obj.name) {//check if their name is on the objects friends list. If not...
            if (!buds.includes(name)) {//push it into the storage array
                sto.push(obj.name)
            }
        }
               }           //check each name against the argumen
    //return the storage array
    return sto;


}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
    //have the value of the property in this object become the specified value
    object[key] = value;
// return the object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
    //iterate over the array
    for (let i = 0; i < array.length; i++) {
        //for each property listed in the array, remove it from the object
        delete object[array[i]];
    }//return the object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //Should take an array and return an array with all the duplicates removed
// iterate over the array
for (i = 0; i < array.length; i++) {
    //iterate over the array again
    for (x = 0; x < array.length; x++) {
        //if they're not referring to the same index
        if (i !== x) {
        //if any have an equal value
        if (array[i] === array[x]) {
            //remove the duplicate
            array.splice(x, 1);
        }
        } 
    }
}
//return the array
return array;
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