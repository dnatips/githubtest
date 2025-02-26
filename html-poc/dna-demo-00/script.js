function addACellToARow(aRow, text, textType = "text") {
    const aCell = document.createElement("td");
    if (textType == "text") {
        aCell.innerHTML = text;
    }
    else if (textType == "image") {
        const anImage = document.createElement("img");
        anImage.src = text;
        aCell.appendChild(anImage);
    }
    aRow.appendChild(aCell);
}

async function fetchData() {
    const rootElement = document.getElementById("root");
    const aTable = document.createElement("table");
    aTable.setAttribute("border", "1");

    const aHeader = document.createElement("tr");
    const headers = ["Avatar", "ID", "First Name", "Last Name", "Email"];
    headers.forEach((element) => {
        const aHeaderCell = document.createElement("th");
        aHeaderCell.innerHTML = element;
        aHeader.appendChild(aHeaderCell);
    });
    aTable.appendChild(aHeader);

    let currentPage = 1;
    do
    {
        let peopleData = await (await fetch(`https://reqres.in/api/users?page=${currentPage++}`)).json();
        peopleData.data.forEach((element) => {
            const aRow = document.createElement("tr");
    
            addACellToARow(aRow, element.avatar, "image");
            addACellToARow(aRow, element.id);
            addACellToARow(aRow, element.first_name);
            addACellToARow(aRow, element.last_name);
            addACellToARow(aRow, element.email);
                
            aTable.appendChild(aRow);
        });
        if (peopleData.page == peopleData.total_pages)
        {
            break;
        }
    }
    while (true);

    rootElement.appendChild(aTable);
}

fetchData();
