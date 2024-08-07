interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };

  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
  };

  const studentsList: Student[] = [student1, student2];

  const body = document.querySelector('body');
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableBody = document.createElement('tbody');
  const headerRow = document.createElement('tr');
  const headerCell1 = document.createElement('th');
  const headerCell2 = document.createElement('th');

  headerCell1.textContent = 'First Name';
  headerCell2.textContent = 'Location';
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  tableHead.appendChild(headerRow);
  table.appendChild(tableHead);

  studentsList.forEach(student => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;

    row.appendChild(cell1);
    row.appendChild(cell2);
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  body?.appendChild(table);
