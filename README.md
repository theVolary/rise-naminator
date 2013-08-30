# Rise Naminator

This module is a simple name generator that combines an adjective with a noun, followed by a randomly generated number.  If supports static prefixes and suffixes.  You can provide a dictionary of the form:

    {
      "adjectives": [ ... ],
      "nouns": [ ... ],
      "numbers": {
        "births": [1900, 2050], // used as a range of years
        "ranges": [[0, 999]], // purely a range of numbers for random use
        "voodoo": [1, 24, 734] // causes some magic to happen when generating a random number
      }
    }

If you don't want any particular piece of the name generated (e.g. numbers), simply omit that part from the dictionary.  Whatever is present is used.  
  
### Installation
`npm install git@github.com:theVolary/rise-naminator.git`

### Usage
`require('rise-naminator').naminator.generate(options, callback);`

* options may be omitted
* options may contain: dictionary, prefix, and suffix keys