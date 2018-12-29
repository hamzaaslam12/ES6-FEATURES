        // default parameter
        function log(name = "abc", age = 32) {
            console.log(name, age);
        }
        // log()

        // SEPRATE OPERATOR
        var num = [1, 2, 3, 4, 5];
        function sum(a, b, c, d, e) {
            console.log(a + b + c + d + e);
        }
        // sum(...num);

        // TEMPLATE STRING
        function person(name = "ABC", age = 12) {
            console.log(`my name is ${name} and my age is ${age} years old.`);
        } // person("HAMZA", 13);

        // Object Literal Enhancements
        var name = "ABC";
        var age = 12;
        var person = {
            /* name: name, 
            age: age,
          THE ABOVE PROPERTIES ARE SAME AS BELOW, WE CAN USE NAME AND AGE LIKE THIS:*/
            name, age,
            strength(x) { console.log(`I study for last ${x} years.`) }
            /* THE ABOVE IS SAME AS BELOW:
             strength: function(x) {console.log(`I study for last ${x} years.`)} */
        }; // console.log(person), console.log(person.strength(12));

        // NEW STRING METHODS
        var a = "ABCDEFGHIJKL";
        /* 1) repeat() method; console.log(a.repeat(6)); */

        /* 2) startsWith() method; console.log(a.startsWith("AB")); It returns true or false */

        // 3) endsWith() method; console.log(a.endsWith("KL")); It returns true or false

        // 4) include() methodsl; console.log(a.includes("FGH")); It returns true or false


        // Arrow Function 
        var ninja = {
            name: "ABC",
            age: 23,
            study(x) {
                window.setInterval(() => {
                    if (x > 0) {
                        console.log(ninja.name /* or with: this.name */ + " study for last " +x + " years.");
                        x--;
                    }
                }, 1000);
            }
        }

// ninja.study(3);

/*       */
var b = ["a","b","c","d","a"];
console.log(b);

// this return a array deleting the repeat words
// using set() it will delete repeating words.
// S must be in capital letter
var a = new Set(b)
console.log(a);
console.log(...b)
