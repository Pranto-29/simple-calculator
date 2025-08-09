
        function add() {
            let x = Number(document.getElementById("num1").value);
            let y = Number(document.getElementById("num2").value);
            document.getElementById("result").textContent = x + y;
        }
        function subtract() {
            let x = Number(document.getElementById("num1").value);
            let y = Number(document.getElementById("num2").value);
            document.getElementById("result").textContent = x - y;
        }
        function multiply() {
            let x = Number(document.getElementById("num1").value);
            let y = Number(document.getElementById("num2").value);
            document.getElementById("result").textContent = x * y;
        }
        function divided() {
            let x = Number(document.getElementById("num1").value);
            let y = Number(document.getElementById("num2").value);
            if(y !==0) {
                document.getElementById("result").textContent = x / y;
            }
            else{
                document.getElementById("result").textContent = "0 diye div kora jabe na";
            }
        }
