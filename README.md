# Rise Naminator

This module is a simple name generator that combines an adjective with a noun, followed by a randomly generated number.  If supports static prefixes and suffixes.  
  
### Installation
`npm install git@github.com:theVolary/rise-naminator.git`

### Usage
`require('rise-naminator').naminator.generate(options, callback);`

* options may be omitted
* options may contain: dictionary, prefix, and suffix keys

### Dictionary
You can provide a dictionary of the form:

    {
      "adjectives": [ ... ],
      "nouns": [ ... ],
      "numbers": {
        "births": [1900, 2050], // used as a range of years
        "ranges": [[0, 999]], // a range of numbers for random use
        "voodoo": [1, 24, 734] // causes some magic to happen when generating a random number
      }
    }

If you don't want any particular piece of the name generated (e.g. numbers), simply omit that part from the dictionary.  Whatever is present is used.  

If no dictionary is passed in, the default dictionary (containing animal names) is used.

### Example Usernames
The default dictionary generates names similar to the following:  

* EmotionalSheep90
* charmingSquirrel420
* Angryhyena37

### API

#### generate 
See usage above.

#### getDefaultDictionary
    function (callback);

Returns the default dictionary included with the module.  This can be useful if you want to reuse parts of it, but not all of it.  The callback is provided with one argument containing the default dictionary object.
