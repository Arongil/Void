/*

Types of learn menus:
- grammar question
- Harry Potter phrase
- video game recommendation / quote
- YouTube channel + quote
- random quotes
- audio clip from radio or elsewhere
- vocabulary question

*/

/*
class Learn {

    constructor(type) {
        alert(type);
    }
}
*/

var learnWays = [
    ["Vocabulary Question", 1],
    ["Grammar Question", 1],
    ["Harry Potter Quote", 4],
    ["YouTube Video", 1],
    ["Random Quote", 1],
    ["Video Game Recommendation", 2]
];

function f(a) {
    return a[Math.floor(a.length * Math.random())];
}

function pickRandom(arr) {
    // The arrays have frequencies now.
    var total = 0, i;
    for (i = 0; i < arr.length; i++) {
        total += arr[i][1];
    }
    var n = Math.floor(Math.random() * total);
    total = 0;
    for (i = 0; total + arr[i][1] < n; i++) {
        total += arr[i][1];
    }
    return arr[i][0];
}

function learn() {
    var method = pickRandom(learnWays);
    alert(method);
    alert(f(data[method]));
    // window.location.replace("https://www.khanacademy.org/math/multivariable-calculus-2020-beta");
}


const data = {
    "Vocabulary Question": [
        "cerdo = pig",
        "conejo = rabbit",
        "cangrejo = crab",
        "capuchado = hooded",
        "coronado = crowned",
        "creado = to create",
        "comer = to eat",
        "coser = to sew"
    ],
    "Grammar Question": [
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "El muchacho ____ (comer, present tense) su cena.",
        "La maestra dijo que ella ____ (crear, past subjunctive) que el exámen solía tenía solo preguntas acerca del subjuntivo para trucar a los estudiantes perezosos."
    ],
    "Harry Potter Quote": [
        "Sirius Black - El mundo no se divide en gente buena y mala; todos tenemos luz y oscuridad dentro de nosotros, lo que importa es la parte a la que obedecemos, eso es lo que realmente somos.",
        "Sirius Black - Si quieres saber cómo es alguien realmente, mira de qué manera trata a sus inferiores, no a sus iguales.",
        "Hermione Granger - Sólo porque tú tengas la profundidad emocional de una cucharita de té, no quiere decir que todos la tengamos.",
        "Hermione Granger - Espero que estéis satisfechos con lo que habéis hecho. Podíamos haber muerto, o peor, haber sido expulsados.",
        "Hermione Granger - ¡Vamos, Harry! ¡Lo que despierta interés no es el Quidditch, sino tú! Nunca habías provocado tanta atracción, pero, francamente, no me extraña, porque nunca habías estado tan guapetón.",
        "Hermione Granger - Las varitas mágicas sólo son poderosas si lo son los magos que las utilizan, pero a algunos les gusta jactarse de que la suya es la más grande y la mejor.",
        "Albus Dumbledore - Son nuestras elecciones, Harry, las que muestran quienes somos, mucho más que nuestras habilidades.",
        "Albus Dumbledore - Por supuesto que está sucediendo dentro de tu cabeza, Harry, pero ¿por qué debería eso significar que no es real?",
        "Albus Dumbledore - La felicidad se puede encontrar incluso en los momentos más oscuros, siempre que seamos capaces de usar bien la luz.",
        "Albus Dumbledore - Es el miedo a lo desconocido lo que tememos cuando miramos a la muerte y a la oscuridad, nada más.",
        "Albus Dumbledore - No tengas lástima de los muertos, Harry. Ten pena de los vivos, y, sobre todo, de aquellos que viven sin amor.",
        "Albus Dumbledore - No es bueno dejarse arrastrar por los sueños, y olvidarse de vivir.",
        "Albus Dumbledore - Las palabras son, en mi no tan humilde opinión, nuestra más inagotable fuente de magia, capaces de infringir daño y de remediarlo.",
        "Albus Dumbledore - El amor es una fuerza que es más hermosa y más terrible que muerte.",
        "Albus Dumbledore - Las consecuencias de nuestras acciones son siempre tan complicadas, tan diversas, que predecir el futuro resulta ser un negocio muy difícil en sí.",
        "Albus Dumbledore - En todo momento esplendoroso de felicidad hay una gota de veneno: la certeza de que el dolor volverá.",
        "Albus Dumbledore - Hay que tener un gran valor para enfrentarse a nuestros enemigos, pero se necesita aún más valor par enfrentarse a nuestros amigos.",
        "Albus Dumbledore - En los sueños encontramos un mundo enteramente nuestro. Que se sumerja en el más profundo océano, que sobrevuele la más alta nube.",
        "Albus Dumbledore - Para una mente bien preparada la muerte es solo la siguiente gran aventura.",
        "Albus Dumbledore - Es hora de elegir entre lo que es facil y lo que es correcto.",
        "Albus Dumbledore - No se trata de vuestras semejanzas, sino de vuestras diferencias.",
        "Albus Dumbledore - La gente encuentra más fácil perdonar a los demás por equivocarse, que por acertar.",
        "Albus Dumbledore - Llámalo Voldemort, Harry. Utiliza siempre el nombre correcto de las cosas. El miedo a un nombre aumenta el miedo a la cosa que se nombra.",
        "Albus Dumbledore - Los jóvenes no podéis saber cómo piensan ni como se sienten los ancianos, pero los ancianos somos culpables si olvidamos qué significa ser joven.",
        "Albus Dumbledore - ¡No te das cuenta de que no importa lo que uno es por nacimiento, sino lo que uno es por sí mismo!",
        "Albus Dumbledore - La comprensión es el primer paso para la aceptación, y sólo aceptando puede recuperarse.",
        "Albus Dumbledore - Tu incapacidad de comprender que hay cosas mucho peores que la muerte siempre ha sido tu mayor debilidad.",
        "Albus Dumbledore - Ser el Maestro de la Muerte no es conseguir la inmortalidad. Es aceptar la muerte, esto es conquistarla.",
        "Albus Dumbledore - ¡Todo el dinero y la vida que uno pueda desear! Las dos cosas que la mayor parte de los seres humanos elegirían… El problema es que los humanos tienen el don de elegir precisamente las cosas que son peores para ellos.",
        "Albus Dumbledore - Seremos fuertes a medida que estemos unidos, débiles a medida que estemos divididos… el don de esparcir discordia y enemistad es muy grande… podemos combatirlo demostrando un lazo de amistad y confianza igualmente fuertes...",
        "Albus Dumbledore - ¿Piensas que los muertos a los que hemos querido nos abandonan del todo? ¿No crees que los recordamos especialmente en los mayores apuros? Tu padre vive en ti, Harry, y se manifiesta más claramente cuando lo necesitas.",
        "Albus Dumbledore - No estoy preocupado, Harry. Estoy contigo.",
        "Albus Dumbledore - Fue una de mis más brillantes ideas y, entre tú y yo, eso es decir mucho.",
        "Albus Dumbledore - Y ahora, Harry, adentrémonos en la oscuridad y vayamos en busca de la aventura, aquella caprichosa seductora.",
        "Albus Dumbledore - Las consecuencias de nuestras acciones son siempre tan complicadas, tan diversas, que predecir el futuro resulta ser un negocio muy difícil en sí.",
        "Albus Dumbledore - Fascinantes criaturas, los fénix. Pueden transportar cargas muy pesadas, sus lágrimas tie­nen poderes curativos y son mascotas muy fieles.",
        "Albus Dumbledore - A veces la indiferencia y la frialdad causan mucho más daño que la aversión declarada.",
        "Albus Dumbledore - Me quito el sombrero ante ti, o lo haría si no temiera llenarte de arañas.",
        "Albus Dumbledore - Las cicatrices pueden ser útiles. Yo tengo una en la rodilla izquierda que es un diagrama perfecto del metro de Londres.",
        "Albus Dumbledore - Quizás los más capacitados para ejercer el poder son los que nunca han aspirado a él. Los que, como tú, se ven obligados a ostentar el liderazgo y asumen esa responsabilidad y comprueban con sorpresa que saben hacerlo.",
        "Albus Dumbledore - Tu madre murió para salvarte. Si hay algo que Voldemort no puede entender es el amor.",
        "Albus Dumbledore - Adormecer el dolor por un rato te haría sentirlo luego con mayor intensidad.",
        "Severus Snape - La mente no es ningún libro que uno pueda abrir cuando se le antoje o examinarlo cuando le apetezca. Los pensamientos no están grabados dentro del cráneo para que los analice cualquier invasor. La mente es una potencia muy compleja y con muchos estratos.",
        "Severus Snape - Si te lo ha prohibido, no deberías hablar. Las palabras del Señor Tenebroso son Ley.",
        "Severus Snape - ¿Cómo te atreves a utilizar mis propios hechizos contra mí, Potter? ¡Yo los invente! ¡Yo soy el Príncipe Mestizo!",
        "Rubeus Hagrid - Yo soy lo que soy y no tengo vergüenza. 'Nunca se avergüence,' solía decir mi viejo padre, 'hay algunos que van a usar eso contra usted, pero con ellos no vale la pena molestarse'.",
        "Rubeus Hagrid - No sirve de nada quedarse sentado preocupándose. Lo que tenga que ser será, y nosotros lo enfrentaremos cuando venga.",
        "Luna Lovegood - Lo que perdemos al final siempre vuelve a nosotros... aunque a veces no del modo que esperamos.",
        "Luna Lovegood - ¡Es la primera vez que alguien me invita a ir a una fiesta como amigos! ¿Te has teñido la ceja para la fiesta? ¿Quieres que yo también me tiña una?",
        "Luna Lovegood - Los aurores participan en la Conspiración Rotfang; creía que lo sabía todo el mundo. Trabajan infiltrados en el Ministerio de Magia para derrocarlo combinando la magia oscura con cierta enfermedad de las encías.",
        "Luna Lovegood - Hay otras maneras de volar, no solo con escobas mágicas.",
        "Luna Lovegood - Al final, todo se resuelve. Siempre.",
        "Lord Voldemort - Harry Potter, el niño que sobrevivió viene a morir.",
        "Lord Voldemort - No existe el bien, ni el mal, solo hay poder y personas demasiado débiles para buscarlo.",
        "Lord Voldemort - La grandeza inspira envidia, la envidia engendra rencor y el rencor genera mentiras.",
        "Ginny Weasley - Lo bueno de crecer con Fred y George es que acabas pensando que cualquier cosa es posible si tienes suficiente coraje.",
        "Dobby - Qué lugar tan hermoso para estar con amigos. Dobby está feliz de estar con su amigo...¡Harry Potter!",
        "Harry Potter - Yo no salgo por ahí buscando problemas. Por norma general, los problemas acuden a mi encuentro.",
        "Harry Potter - Una de mis mejores amigas es hija de muggles, y es la mejor alumna de mi curso.",
        "Harry Potter - A veces no tienes más remedio que pensar en otra cosa aparte de tu propia seguridad! ¡A veces no tienes más remedio que pensar en el bien de todos!",
        "Minerva McGonagall - Tiempos oscuros y difíciles nos aguardan. Pronto deberemos elegir entre lo que es correcto y lo que es fácil.",
        "Minerva McGonagall - Me parece que tienes una salud estupenda, Potter, así que me disculparás que no te perdone hoy los deberes de mañana. Te aseguro que si te mueres no necesitarás entregarlos.",
        "Minerva McGonagall - Dentro de cada chica duerme un delicado cisne anhelando emerger y retomar el vuelo... Y dentro de cada chico hay un león preparado para saltar.",
        "Minerva McGonagall - Este chico será famoso. No habrá ni un niño en nuestro mundo que no conozca su nombre.",
        "Minerva McGonagall - ¿Una carta? Dumbledore, ¿de verdad cree que puede explicarlo todo en una carta? ¡Esa gente jamás comprenderá a Harry! ¡Será famoso… una leyenda… no me sorprendería que el día de hoy fuera conocido en el futuro como el día de Harry Potter! Escribirán libros sobre Harry… todos los niños del mundo conocerán su nombre.",
        "Minerva McGonagall - La casa de Godric Gryffindor ha tenido el respeto del Mundo Mágico por casi diez siglos, y no permitiré que en una noche manchen ese nombre... por comportarse como un montón de brutos babuinos.",
        "Minerva McGonagall - No muchos alumnos de primer año se han enfrentado a un trol gigante y han vivido para contarlo.",
        "Remus Lupin - La fuerza de tus convicciones determina tu éxito, no el número de tus seguidores.",
        "Remus Lupin - Se puede vivir sin alma, mientras sigan funcionando el cerebro y el corazón. Pero no se puede tener conciencia de uno mismo, ni memoria, ni nada. No hay ninguna posibilidad de recuperarse. Uno se limita a existir, como una concha vacía.",
        "Belatrix Lestrange - ¡Si yo tuviera hijos, me alegraría de que entregaran la vida por el Señor Tenebroso!",
        "Marauders - Juro solemnemente que mis intenciones no son buenas.",
        "Hogwarts Emblem - Draco dormiens nunquam titillandus (Nunca le hagas cosquillas a un dragón dormido)",
    ],
    "YouTube Video": [
        "https://www.youtube.com/watch?v=2dps4TFIpY0&list=PLR7pDu-6hYpIQAi_afka6YQ4FpUwCM0sF",
        "https://www.youtube.com/watch?v=IW9G1yO3pak&list=PLR7pDu-6hYpIQAi_afka6YQ4FpUwCM0sF&index=14"
    ],
    "Random Quote": [
        "No hay caminos para la paz; la paz es el camino (Mahatma Gandhi).",
        "Haz el amor y no la guerra (John Lennon).",
        "Si das pescado a un hombre hambriento lo nutres durante una jornada. Si le enseñas a pescar, le nutrirás toda su vida (Lao Tsé)."
    ],
    "Video Game Recommendation": [
        "Try Minecraft in Spanish!",
        "Try Diablo III in Spanish!",
        "Try World of Warcraft in Spanish!"
    ]
};
