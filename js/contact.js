/* ============================================================
   contact.js — Contact Form Handler
   ============================================================
   Handles form submission feedback.
   To wire up a real backend: replace the handleSubmit body
   with a fetch() call to your API / EmailJS / Formspree.
   ============================================================ */


function handleSubmit(e) {
  e.preventDefault();

  const btn  = e.target.querySelector('.form-submit');
  const orig = btn.textContent;

  // Loading state while sending
  btn.textContent = 'Sending...';
  btn.disabled    = true;

  const formData = new FormData(e.target);

  fetch('https://formspree.io/f/xojkboyb', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if (res.ok) {
      btn.textContent      = '✓ Message Sent!';
      btn.style.background = '#16a34a';
      e.target.reset();
    } else {
      btn.textContent      = '✗ Something went wrong';
      btn.style.background = '#dc2626';
    }
  })
  .catch(() => {
    btn.textContent      = '✗ No internet connection';
    btn.style.background = '#dc2626';
  })
  .finally(() => {
    setTimeout(() => {
      btn.textContent      = orig;
      btn.style.background = '';
      btn.disabled         = false;
    }, 3000);
  });
}
