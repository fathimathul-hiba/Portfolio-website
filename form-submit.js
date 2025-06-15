const scriptURL = 'https://script.google.com/macros/s/AKfycbxDgeQ3fBgnArexqAyPO0UCEGDn-zUlmdyix3PEcQ9GAjDQU9O480Xp7CZrz4L_mpia/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  alert('Your message has been sent successfully')
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = 'Thank you'
      setTimeout(function () {
        msg.innerHTML = ''
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
