const scriptURL = 'https://script.google.com/macros/s/AKfycbzAnhFvlRDoVD74PIHmrIr9UPjDJ9LzeltBAjw5cI2buYMS3zuEaALC6YzT4DrwrQfM/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })