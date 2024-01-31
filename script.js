function displayData(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;

    const entryDiv = document.createElement('div');
    entryDiv.classList.add('entry');
    entryDiv.innerHTML = `
      <h3>Registration Details</h3>
      <p><strong>Full Name:</strong> ${fullname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Gender:</strong> ${gender}</p>
    `;

    const displayDiv = document.getElementById('display-data');
    displayDiv.appendChild(entryDiv);

    document.getElementById('registration-form').reset();
}