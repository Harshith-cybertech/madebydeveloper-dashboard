document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copyUpi');
const upiId = document.getElementById('upiId');
const toast = document.getElementById('toast');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(upiId.textContent.trim());
    copyButton.textContent = 'Copied!';
    toast.textContent = 'UPI ID copied to clipboard';
    toast.classList.add('show');
    setTimeout(() => { copyButton.textContent = 'Copy'; toast.classList.remove('show'); }, 1800);
  } catch (e) {
    toast.textContent = 'Please select and copy the UPI ID manually';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  }
});
