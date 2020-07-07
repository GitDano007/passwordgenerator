var inputLength = document.querySelector('input[name="length"]');
        var smallLetter = document.querySelector('input[name="lowercase"]');
        var bigLetter = document.querySelector('input[name="uppercase"]');
        var num = document.querySelector('input[name="number"]');
        var sym = document.querySelector('input[name="symbol"]');
        var generate = document.querySelector('.wrapper button');
        var copy = document.getElementById("copy");
        

const passKeys = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '*;<>()[]{}#$?!^|'
};


copy.addEventListener("click", () => {
    var genPass = document.querySelector('input[type="text"]');
    if(genPass.value != "" && genPass.value != "Include any key string and define the length!"){
        genPass.select();
        
    }
});

generate.addEventListener("click", () => {
    var length = +inputLength.value;
    var activeLower = smallLetter.checked;
    var activeUpper = bigLetter.checked;
    var activeNumber = num.checked;
    var activeSymbol = sym.checked;
    
    generatePassword(activeLower, activeUpper, activeNumber, activeSymbol, length);
    
});
    function generatePassword(lower, upper, num, sym, length){
        let main = "";
        let finalPassword = "";
        
        const passOptions = {
            lowercase: lower,
            uppercase: upper,
            number: num,
            symbol: sym
        };
            for(i=0;i<Object.keys(passOptions).length;i++){
            main += (Object.values(passOptions)[i]) ? passKeys[Object.keys(passOptions)[i]] : "";
        }
            if(main != "" && length > 0){
            for(i=0;i<length;i++){
                finalPassword += main[Math.floor(Math.random() * main.length)];
            }
            
            document.querySelector('input[type="text"]').value = finalPassword;
            
        }else{
            document.querySelector('input[type="text"]').value = "Please select a password option and then specify the length";
        }
    
        
}