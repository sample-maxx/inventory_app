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