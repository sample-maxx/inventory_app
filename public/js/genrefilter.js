// DELETE button functionality
document.querySelectorAll('.delete_btn').forEach((btn, index) => {
   btn.addEventListener('click', async () => {
   const card = btn.closest('.card');
    const gameId = card.dataset.id;
    if (!gameId) return;

    try {
      const response = await fetch(`/delete/genre/${encodeURIComponent(gameId)}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the card from the DOM
         document.querySelectorAll(`.card[data-id='${gameId}']`).forEach(c => c.remove());
      } else {
        alert('Failed to delete game.');
      }
    } catch (error) {
      console.error('Error deleting game:', error);
    }
});
});