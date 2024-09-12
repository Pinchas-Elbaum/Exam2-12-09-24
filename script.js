const addPersonalbutton = document.querySelector('#submit');
const CreateSoldier = () => {

    const fullname = document.querySelector('#fullname').value;
    const rank = document.querySelector('#rank').value;
    const position = document.querySelector('#position').value; 
    const platon = document.querySelector('#platon').value;
    const missionTime = document.querySelector('#missionTime').value;
    const status = document.querySelector('#status').value;

    const soldier = {
        fullname,
        rank,
        position,
        platon,
        missionTime,
        status
    }
    return soldier
    }
   

const AddPersonal = (e) => {
    e.preventDefault();
    // document.innerText = '';
    // LoadTable()
    const soldier = CreateSoldier();
    const table = document.querySelector('table');
    const tr = document.createElement('tr');
    tr.style.padding = '10px';
    const tdfullname = document.createElement('td');
    const tdrank = document.createElement('td');
    const tdposition = document.createElement('td');
    const tdplaton = document.createElement('td');
    const tdmissionTime = document.createElement('td');
    const tdstatus = document.createElement('td');
    const tdactions = actions();

    tdfullname.textContent = soldier.fullname;
    tdrank.textContent = soldier.rank;
    tdposition.textContent = soldier.position;
    tdplaton.textContent = soldier.platon;
    tdmissionTime.textContent = soldier.missionTime;
    tdstatus.textContent = soldier.status;
    tdactions.HTMLcontent = tdactions;

    tr.appendChild(tdfullname);
    tr.appendChild(tdrank);
    tr.appendChild(tdposition);
    tr.appendChild(tdplaton);
    tr.appendChild(tdmissionTime);
    tr.appendChild(tdstatus);
    tr.appendChild(tdactions);
    table.appendChild(tr);
    table.style.textAlign = 'left';
        
    SaveTable();
    document.textContent = '';
}


function SaveTable() { // שמירת מידע באחסון מקומי
    const table = document.querySelector("table"); // מביא את הטבלה מהhtml
    const rows = Array.from(table.rows).slice(1); // מביא את כל השורות בטבלה חוץ מהשורה הראשונה
    const data = rows.map(row => { // רץ על כל השורות ומכניס למערך את 3 התאים
        return {
            name: row.cells[0].innerText,
            rank: row.cells[1].innerText,
            position: row.cells[2].innerText,
            platon: row.cells[3].innerText,
            status: row.cells[4].innerText,
            missionTime: row.cells[5].innerText
        }
    });
    localStorage.setItem('tableData', JSON.stringify(data)); // מעדכן את האחסון וקורא לו בשם
}

function LoadTable() {
    const data = JSON.parse(localStorage.getItem('tableData'));
    const table = document.querySelector('table');

    if (!data) return;
    data.forEach(rowData => {
        const newRow = document.createElement('tr');

        const name = document.createElement('td');
        name.textContent = rowData.column1;
        

        const rank = document.createElement('td');
        rank.textContent = rowData.column2;
        

        const position = document.createElement('td');
        position.textContent = rowData.column3;
        

        const platon = document.createElement('td');
        platon.textContent = rowData.column4;


        const status = document.createElement('td');
        status.textContent = rowData.column5;       


        const missionTime = document.createElement('td');       
        missionTime.textContent = rowData.column6;
       
        newRow.appendChild(name);
        newRow.appendChild(rank);
        newRow.appendChild(position);
        newRow.appendChild(platon);
        newRow.appendChild(status);
        newRow.appendChild(missionTime);

        table.appendChild(newRow);

    })
}

function actions() {
    const newOptions = document.createElement("div");
    newOptions.id = 'activityButtons';
    newOptions.style.padding = "15px";

    const deleteButton = document.createElement("button");
    deleteButton.id = 'deleteButton';
    deleteButton.textContent = "remove";
    deleteButton.style.backgroundColor = "green";
    deleteButton.style.padding = "5px";
    deleteButton.style.margin = "10px";
    deleteButton.style.border = "1px solid black";
    deleteButton.style.borderRadius = "15%";
    
    
    const missionButton = document.createElement("button");
    missionButton.id = 'deleteButton';
    missionButton.textContent ="Edit";
    missionButton.style.backgroundColor = "green";
    missionButton.style.padding = "5px";
    missionButton.style.margin = "10px";
    missionButton.style.border = "1px solid black";
    missionButton.style.borderRadius = "15%";

    const editButton = document.createElement("button");
    editButton.id = 'editButton';
    editButton.textContent = "Mission";
    editButton.style.backgroundColor = "green";
    editButton.style.padding = "5px";
    editButton.style.margin = "10px";
    editButton.style.border = "1px solid black";
    editButton.style.borderRadius = "15%";

   

    newOptions.appendChild(deleteButton)
    newOptions.appendChild(missionButton)
    newOptions.appendChild(editButton)
    

    return newOptions;
}

console.log(CreateSoldier())

addPersonalbutton.addEventListener('click', AddPersonal);


