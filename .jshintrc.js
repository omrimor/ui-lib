{
    "maxerr"        : 50,       // {int} Maximum error before stopping

    // Enforcing options
    // http://www.jshint.com/docs/options/#enforcing-options
    "bitwise"       : false,    // true: Prohibit bitwise operators (&, |, ^, etc.)
    "camelcase"     : false,    // true: Identifiers must be in camelCase
    "curly"         : true,     // true: Require {} for every new block or scope
    "eqeqeq"        : true,     // true: Require triple equals (===) for comparison
    "es3"           : true,     // true: Adhere to ECMAScript 3 specification
    "forin"         : true,     // true: Require filtering for..in loops with obj.hasOwnProperty()
    "freeze"        : true,     // true: prohibits overwriting prototypes of native objects such as Array, Date etc.
    "immed"         : true,     // true: Require immediate invocations to be wrapped in parens `(function () { } ());`
    "indent"        : 4,        // {int} Number of spaces to use for indentation
    "latedef"       : true,     // true: Require variables/functions to be defined before being used
                                // "nofunc": Allow function declarations to be ignored
    "newcap"        : true,     // true: Require capitalization of all constructor functions e.g. `new F()`
    "noarg"         : true,     // true: Prohibit use of `arguments.caller` and `arguments.callee`
    "noempty"       : true,     // true: Prohibit use of empty blocks
    "nonbsp"        : true,     // true: Prohibit "non-breaking whitespace" characters.
    "nonew"         : true,     // true: Prohibit use of constructors for side-effects (without assignment)
    "plusplus"      : false,    // true: Prohibit use of `++` & `--`
    "quotmark"      : true,     // Quotation mark consistency:
                                //   false    : do nothing (default)
                                //   true     : ensure whatever is used is consistent
                                //   "single" : require single quotes
                                //   "double" : require double quotes
    "undef"         : true,     // true: Require all non-global variables to be declared (prevents global leaks)
    "unused"        : "vars",   // Detect unused variables
                                // true: Allow unused parameters that are followed by a used parameter
                                // "vars": Check only variables
                                // "strict": Check all variables and parameters
    "strict"        : true,     // true: Requires all functions run in ES5 Strict Mode
    "maxparams"     : false,    // {int} Max number of formal params allowed per function
    "maxdepth"      : false,    // {int} Max depth of nested blocks (within functions)
    "maxstatements" : false,    // {int} Max number statements per function
    "maxcomplexity" : false,    // {int} Max cyclomatic complexity per function
    "maxlen"        : 120,      // {int} Max number of characters per line

    // Relaxing options
    // http://www.jshint.com/docs/options/#relaxing-options
    "asi"           : false,    // true: Tolerate Automatic Semicolon Insertion (no semicolons)
    "boss"          : false,    // true: Tolerate assignments where comparisons would be expected
    "debug"         : false,    // true: Allow debugger statements e.g. browser breakpoints.
    "eqnull"        : false,    // true: Tolerate use of `== null`
    "esnext"        : false,    // true: Allow ES.next (ES6) syntax (ex: `const`)
    "evil"          : false,    // true: Tolerate use of `eval` and `new Function()`
    "expr"          : false,    // true: Tolerate `ExpressionStatement` as Programs
    "funcscope"     : false,    // true: Tolerate defining variables inside control statements
    "globalstrict"  : false,    // true: Allow global "use strict" (also enables 'strict')
    "iterator"      : false,    // true: Tolerate using the `__iterator__` property
    "lastsemic"     : false,    // true: Tolerate omitting a semicolon for the last statement of a 1-line block
    "laxbreak"      : false,    // true: Tolerate possibly unsafe line breakings
    "laxcomma"      : false,    // true: Tolerate comma-first style coding
    "loopfunc"      : false,    // true: Tolerate functions being defined in loops
    "multistr"      : false,    // true: Tolerate multi-line strings
    "noyield"       : false,    // true: Tolerate generator functions with no yield statement in them.
    "notypeof"      : false,    // true: Tolerate invalid typeof operator values
    "proto"         : false,    // true: Tolerate using the `__proto__` property
    "scripturl"     : false,    // true: Tolerate script-targeted URLs
    "shadow"        : false,    // true: Allows re-define variables later in code e.g. `var x=1; x=2;`
    "sub"           : false,    // true: Tolerate using `[]` notation when it can still be expressed in dot notation
    "supernew"      : false,    // true: Tolerate `new function () { ... };` and `new Object;`
    "validthis"     : false,    // true: Tolerate using this in a non-constructor function

    // Environments
    // http://www.jshint.com/docs/options/#environments
    "browser"       : true,     // Web Browser (window, document, etc)
    "browserify"    : false,    // Browserify (node.js code in the browser)
    "couch"         : false,    // CouchDB
    "devel"         : true,     // Development/debugging (alert, confirm, etc)
    "dojo"          : false,    // Dojo Toolkit
    "jasmine"       : false,    // Jasmine
    "jquery"        : true,    // jQuery
    "mocha"         : false,    // Mocha
    "mootools"      : false,    // MooTools
    "node"          : true,    // Node.js
    "nonstandard"   : false,    // Widely adopted globals (escape, unescape, etc)
    "prototypejs"   : false,    // Prototype and Scriptaculous
    "qunit"         : false,    // QUnit
    "rhino"         : false,    // Rhino
    "shelljs"       : false,    // ShellJS
    "worker"        : false,    // Web Workers
    "wsh"           : false,    // Windows Scripting Host
    "yui"           : false,    // Yahoo User Interface

    // Custom Globals
     "globals"       : {         // additional predefined global variables
        "UTILS" : true,
        "Modernizr" : true,
        "Handlebars" : true

    }
}