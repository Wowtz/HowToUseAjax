axios.get('https://api.github.com/users/Wowtz')

  .then(function(response) {
    console.log(response)
  })
  .catch(function(error) {
    console.warn(error)
  })

  onreadystatechange