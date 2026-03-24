// DELETE button functionality
document.querySelectorAll('.delete_btn').forEach((btn, index) => {
   btn.addEventListener('click', async () => {
   const card = btn.closest('.card');
    const gameId = card.dataset.id;
    if (!gameId) return;

    try {
      const response = await fetch(`/delete/${gameId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        // Remove the card from the DOM
        card.remove();
      } else {
        alert('Failed to delete game.');
      }
    } catch (error) {
      console.error('Error deleting game:', error);
    }
});
});

// EDIT button functionality
document.querySelectorAll('.edit_btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        const name = card.querySelector('p:nth-of-type(1)');
        const genre = card.querySelector('p:nth-of-type(2)');
        const developer = card.querySelector('p:nth-of-type(3)');

        const newName = prompt("Edit Name:", name.textContent);
        const newGenre = prompt("Edit Genre:", genre.textContent);
        const newDeveloper = prompt("Edit Developer:", developer.textContent);
     
        const gameId = card.dataset.id;

      fetch(`/games/${gameId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newName,
          genre: newGenre,
          developer: newDeveloper
        })
      })
        .then(res => res.json())
        .then(data => console.log(data.message))
        .catch(err => console.error(err));

        if (newName && newGenre && newDeveloper) {
            // Update the DOM
            name.textContent = newName;
            genre.textContent = newGenre;
            developer.textContent = newDeveloper;

        }
        
    });
});