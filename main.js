var naminator = require("./index.js").naminator;

if (process.argv.length > 2) {

  for (var i = 0; i < process.argv[2]; i++) {
    naminator.generate(function(name) {
      console.log(name);
    });
  }
} else {
  naminator.generate(function(name) {
    console.log(name);
  });
}