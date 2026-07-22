document.addEventListener('click', async event => {
  const button = event.target.closest('[data-copy-email]');
  if (!button) return;

  try {
    await navigator.clipboard.writeText('kashishrichhariya0204@gmail.com');
    button.textContent = 'Copied!';
    window.setTimeout(() => { button.textContent = 'Copy Email'; }, 1800);
  } catch {
    window.location.href = 'mailto:kashishrichhariya0204@gmail.com';
  }
});
