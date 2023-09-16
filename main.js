const dataForm = document.getElementById("dataForm");
const dataList = document.getElementById("dataList");
let data = [];

dataForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Name and email are required.");
    return;
  }

  const newData = { name, email };
  data.push(newData);

  displayData();
  clearForm();
});

function displayData() {
  dataList.innerHTML = "";
  data.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${item.name} - ${item.email}</span>
      <button  class="btn btn-primary"onclick="editData(${index})">Edit </button>
      <button onclick="removeData(${index})">Delete</button>
    `;
    dataList.appendChild(listItem);
  });
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}

function editData(index) {
  const newData = prompt("Edit data:", `${data[index].name} - ${data[index].email}`);
  if (newData === null) {
    return;
  }

  const [name, email] = newData.split(" - ");
  if (name && email) {
    data[index] = { name, email };
    displayData();
  } else {
    alert("Invalid input. Format should be 'Name - Email'.");
  }
}

function removeData(index) {
  const confirmDelete = confirm("Are you sure you want to delete this data?");
  if (confirmDelete) {
    data.splice(index, 1);
    displayData();
  }
}

// Initialize data (you can load data from a server here)
data.push({ name: "John Doe", email: "johndoe@example.com" });
data.push({ name: "Jane Smith", email: "janesmith@example.com" });
data.push({ name: "Bob Johnson", email: "bobjohnson@example.com" });

displayData();
