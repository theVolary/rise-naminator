var _ = require("underscore");

var capitalize = function(string) {
    return string.replace(/(?:^|\s)\S/g, function(a) {
        return a.toUpperCase();
    });
};

var misspell = function(string, literacy) {
    // Replace a random vowel with another vowel.
    return string.replace(/[aeiou]+/g, function(a) {
        if(Math.random() > literacy) return "aeiou"[Math.floor(Math.random() * 5)];
        else return a;
    });
};

exports.naminator = {
  generate: function(options, cb) {
    options = options || {};
    if (typeof options === "function") {
      cb = options;
      options = {};
    }
    var dict = options.dictionary || require('./animals-dictionary.json');
    var username = options.prefix ? options.prefix : "";
    var parts = [];

    if (dict.adjectives) {
      parts.push(dict.adjectives[Math.floor(Math.random() * dict.adjectives.length)]);
    }

    if (dict.nouns) {
      parts.push(dict.nouns[Math.floor(Math.random() * dict.nouns.length)]);
    }

    _.each(parts, function(part) {

      if (Math.random() > 0.3) part = capitalize(part); // capitalize 70% of the time
      username += part;
    });

    if (dict.numbers) {
      var numbers = dict.numbers,
          range = null,
          number = null;

      while (true) {
        if (Math.random() > 0.6) {
          number = parseInt(_.random(numbers.births[0], numbers.births[1]).toString().substr(2, 2));
        } else {
          range = numbers.ranges[Math.floor(Math.random() * numbers.ranges.length)];
          number = _.random(range[0], range[1]);
        }

        username += number;

        if (numbers.voodoo.indexOf(number) == -1) break;
      }
    }

    if (options.suffix) {
      username += options.suffix;
    }

    cb && cb(username);
  }
};