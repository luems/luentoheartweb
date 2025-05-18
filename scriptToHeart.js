document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('mainForm2').addEventListener('submit', function (e) {
        e.preventDefault();

        const absoluteName = "Heart";
        const gotName = document.getElementById('nameCheck').value;
        let result = "";

        if (gotName === absoluteName || gotName === "heart" || gotName === "HEART") {
            result = "YAYYYYYY!";
        } else if (gotName === "Heart Usares Repotula") {
            result = "just the nickname is fine :3";
        } else if (gotName === "Hun" || gotName === "hun" || gotName === "HUN") {
            result = "Hunn!";
        } else if (gotName === "Hunnestt") {
            result = "Yesss?";
        } else if (gotName.toLowerCase().includes("friki")) {
            result = "NOT HERE";
        }else if (gotName === ":3") {
            result = ";3";
        } else if (gotName.toLowerCase().includes("luen")) {
            result = "Thats meee :D";
        } else if (gotName.toLowerCase().includes("bwoa")) {
            result = "i can codeee :3";
        } else if (gotName === "miah" || gotName === "Miah" || gotName === "emman" || gotName === "Emman") {
            result = "why u typin other men here";
        } else if (
            gotName === "michael rryann luen velasco" ||
            gotName === "Michael Rryann Luen Velasco" ||
            gotName === "Michael Rryann Luen R. Velasco" ||
            gotName === "michael Rryann Luen r. Velasco"
        ) {
            result = "FULL GOVERNMENT?";
        } else if (
            gotName === "michael rryann luen raquinio velasco" ||
            gotName === "Michael Rryann Luen Raquinio Velasco" ||
            gotName === "Michael Rryann Luen R Velasco" ||
            gotName === "michael Rryann Luen r Velasco"
        ) {
            result = "FULL GOVERNMENT???";
        } else if (
            gotName.toLowerCase().includes("farrah yvonne usares repotula")
        ) {
            result = "You forgot to add *Velasco";
        } else if (
            gotName === "I love you" ||
            gotName === "I LOVE YOU" ||
            gotName === "i love you"
        ) {
            result = "I love you too hunnest !!";
        }
        else if(
            gotName.toLowerCase().includes('i love youu')

        ){

            result = "I LOVE YOUUUUUUU";
        
        }
        else if(
            gotName.toLowerCase().includes("hai")

        ){
            result = "ALLOOO";
        }

        else if(gotName === "Lu" || gotName === "lu"){
            result = "ooo , long time that has been used";
        }else if(gotName === "My darling" || gotName === "My darlingg" || gotName === "My Darlinggg" || gotName === "My darlinggg"){
            result = "HAIII MY LOVE";
        }else if(gotName.toLowerCase().includes("pookie")){
            result = "Hiiii pooookie";
        }
        else if(gotName.toLowerCase().includes("sweetie")){
            result = "Honeyyyy";
        }else if (gotName.toLowerCase().includes("my love")){
            result = "My love, I love you so much"
        }else if (gotName.toLowerCase().includes("hmm")){
            result = "Whatchu thinkin ? :3";
        }else if (gotName.toLowerCase().includes("hi")){
            result = "Hi my love :3";
        }else if (gotName.toLowerCase().includes(":D")){
            result = "Yesyesyes";
        }
        else if (gotName.toLowerCase().includes("how")){
            result = "WDYM HOW";
        }else if (gotName.toLowerCase().includes("wha")){
            result = "WHAT'RE YOU SAYING 'WHAT' FOR IM CS";
        }
        else if (gotName.toLowerCase().includes("so")){
            result = "soo....";
        }
        else if (gotName.toLowerCase().includes("michael")){
            result = "Well I guess technically thats my name";
        }
        else if (gotName.toLowerCase().includes("rryann")){
            result = "yup thats my second first name";
        }
        else if (gotName.toLowerCase().includes("ryann")){
            result = "thats my dad you forgot the extra r";
        }
        else if (gotName.toLowerCase().includes("velasco")){
            result = "LAST NAME BRUH";
        }
        else if (gotName.toLowerCase().includes("farrah")){
            result = "Youuu!";
        }
        else if (gotName.toLowerCase().includes("yvonne")){
            result = "ur second first name :3";
        }
        else if (gotName.toLowerCase().includes("cs")){
            result = "COMPSCI";
        }
        else if (gotName.toLowerCase().includes("repotula")){
            result = "Peare";
        }
        
        
        
        else {
            result = "whaaa (thats not in my dataset😭)";
        }

        // Animate result text
        typeText(result);
    });

    function typeText(text) {
        const replacer = document.getElementById('replacer');
        replacer.innerText = ""; // Clear it first
        let i = 0;

        const interval = setInterval(() => {
            replacer.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(interval);
            }
        }, 60); // ← You can make this faster or slower
    }
});
