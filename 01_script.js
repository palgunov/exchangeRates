window.addEventListener("load", function () {
    "use strict";

    // let usersContainer = document.querySelector("#users");
    // let example = document.querySelector("#example");
    let example2 = document.querySelector("#example-div");


    // let users = new InteractiveTable({
    //     tableClass: "table table-bordered table-hover"
    //     // interactiveTableId: "table"
    // });
    //
    // users.addHeadingsRow("Имя", "Возраст", "Email");
    //
    // users.addRow("Иван", 39, "ivan@yandex.ru");
    // users.addRow("Светлана", 19, "svetko@mail.ru");
    // users.addRow("Наталья", 23, "nataly@gmail.com");
    //
    // usersContainer.innerHTML = users.generate();
    // users.addRowFromPage(usersContainer);

    // ----------------------------------------------------------------------------

    // let table2 = new Table();
    //
    // table2.addHeadingsRow("Простая", "Таблица");
    //
    // table2.addRow("Какой-то текст", 234234234);
    // table2.addRow("Еще что-нибудь", 898989);
    // table2.addRow("И напоследок", 346587);
    //
    // example.innerHTML = table2.generate();
    // table2.addRowFromPage();

    // ----------------------------------------------------------------------------

    let table3 = new InteractiveTable({
        openTableTag: '<div class="card card-default"><div class="card-body">',
        closeTableTag: '</div></div>',
        openRowTag: '<div class="d-flex">',
        closeRowTag: '</div>',
        openCellTag: '<div class="cell">',
        closeCellTag: '</div>',
        openHeadingTag: '<div class="cell cell--heading">',
        closeHeadingTag: '</div>',
        interactiveTableId: "table3"


    });

    const URL = `https://www.cbr-xml-daily.ru/daily_json.js`;

    let request = new XMLHttpRequest();

    request.open("GET",URL);

    request.send();

    request.addEventListener("load",function () {
       let currencyList = JSON.parse(request.responseText);
       console.log(currencyList);
        table3.addHeadingsRow("Название", "Код", "Курс к рублю");
        table3.addRow(currencyList.Valute.USD.Name, currencyList.Valute.USD.NumCode, currencyList.Valute.USD.Value/currencyList.Valute.USD.Nominal);
        table3.addRow(currencyList.Valute.EUR.Name, currencyList.Valute.EUR.NumCode, currencyList.Valute.EUR.Value/currencyList.Valute.EUR.Nominal);
        table3.addRow(currencyList.Valute.GBP.Name, currencyList.Valute.GBP.NumCode, currencyList.Valute.GBP.Value/currencyList.Valute.GBP.Nominal);
        table3.addRow(currencyList.Valute.JPY.Name, currencyList.Valute.JPY.NumCode, currencyList.Valute.JPY.Value/currencyList.Valute.JPY.Nominal);
        table3.addRow(currencyList.Valute.CNY.Name, currencyList.Valute.CNY.NumCode, currencyList.Valute.CNY.Value/currencyList.Valute.CNY.Nominal);
        example2.innerHTML = table3.generate();
    });

    

    // table3.addRowFromPage(example2);

});