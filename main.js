let task = prompt("Виберіть завдання: 1, 2 або 3");

switch (task) {

    case "1":
        // Ромб
        let n = parseInt(prompt("Введіть розмір ромба:"));

        for (let i = 1; i <= n; i++) {
            let row = "";
            for (let j = 1; j <= n - i; j++) row += " ";
            for (let j = 1; j <= 2 * i - 1; j++) row += i;
            console.log(row);
        }

        for (let i = n - 1; i >= 1; i--) {
            let row = "";
            for (let j = 1; j <= n - i; j++) row += " ";
            for (let j = 1; j <= 2 * i - 1; j++) row += i;
            console.log(row);
        }
        break;


    case "2":
        // Ряд і сума
        let n2 = parseInt(prompt("Введіть n:"));
        let sum = 0;

        for (let i = 1; i <= n2; i++) {
            console.log(i);
            sum += i;
        }

        console.log("Сума = " + sum);
        break;


    case "3":
        // Гра
        let randomNumber = Math.floor(Math.random() * 20) + 1;
        let guess;

        while (true) {
            guess = parseInt(prompt("Вгадайте число (1-20):"));

            if (guess > randomNumber) {
                alert("Менше!");
            } else if (guess < randomNumber) {
                alert("Більше!");
            } else {
                alert("Вгадали!");
                break;
            }
        }
        break;

    default:
        alert("Невірний вибір!");
}
