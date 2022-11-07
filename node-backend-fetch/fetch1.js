
fetch('http://localhost:5000/api/todos')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))

