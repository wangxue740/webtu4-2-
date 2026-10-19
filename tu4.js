fetch('useProfiles.json')
  .then(response => {
    if (!response.ok)
      throw new Error('Fetch error: ' + response.status);
    else
      return response.json();
  })
  .then(json => {
    const container = document.getElementById('profiles');

    json.forEach(user => {
      const card = document.createElement('div');
      card.className = 'profile-card';
      card.innerHTML = `
        <h2>${user.firstName} ${user.lastName}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Date of Birth:</strong> ${user.dateOfBirth}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zipCode}</p>
        <p><strong>Theme:</strong> ${user.preferences.theme}</p>
        <p><strong>Language:</strong> ${user.preferences.language}</p>
        <p><strong>Notifications:</strong> ${user.preferences.notifications}</p>
        <p><strong>Subscribed:</strong> ${user.preferences.subscription}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Fetch error: ' + err.message));