fetch('https://api.github.com/users/marija8t/repos')
  .then(response => response.json())
  .then(data => {
    const reposContainer = document.getElementById('github-repos');
    data.forEach(repo => {
      const repoElement = document.createElement('p');
      repoElement.textContent = repo.ProFessUp; 
      reposContainer.appendChild(repoElement);
    });
  })
  .catch(error => console.error('Error fetching data:', error));



  
