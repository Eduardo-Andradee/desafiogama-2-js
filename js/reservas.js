const tableBody = document.querySelector('table tbody');

const reservations = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bobsmith@example.com' }
];

// Loop through reservations array and add rows to table
for (let i = 0; i < reservations.length; i++) {
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.textContent = reservations[i].id;
    row.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = reservations[i].name;
    row.appendChild(nameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = reservations[i].email;
    row.appendChild(emailCell);

    tableBody.appendChild(row);
}
