document.querySelectorAll('.card[data-company]').forEach((card) => {
  card.addEventListener('click', () => {
    const companyId = card.dataset.company;
    if (!companyId) return;
    window.location.href = `./company.html?c=${companyId}`;
  });

  card.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      card.click();
    }
  });
});
