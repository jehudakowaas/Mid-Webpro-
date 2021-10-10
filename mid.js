const target = document.querySelector('target');

target.addEventListener('submit', insertFaculty);


function insertFaculty(e) {

  e.preventDefault();

  let studentId = document.querySelector('#student-id');
  let fullName = document.querySelector('#full-name');
  let gender = document.querySelector('#gender');
  let facultyName = document.querySelector('#faculty-name');
  let programStudy = document.querySelector('#program-study');

  const td = document.createElement('td');
  td.className = 'table-data';

  const tdText = document.createTextNode(`${studentId.value} / ${fullName.value} / ${gender.value} / ${facultyName} / ${programStudy} | `);
  td.appendChild(tdText);

  let deleteLink = document.createElement('a')
  deleteLink.className = 'delete';
  deleteLink.setAttribute('href', '#');
  deleteLink.appendChild(document.createTextNode('Delete'));

  td.appendChild(deleteLink);

  const tr = document.querySelector('#dataDiri');

  studentId.value = '';
  fullName.value = '';
  gender.value = '';
  facultyName = '';
  programStudy = '';
}


function FungsiShow() {
  var x = document.getElementById("target");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

