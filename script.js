fetch("projets.json")
  .then(response => response.json())
  .then(projets => {
    const portfolio = document.getElementById("portfolio");

    projets.forEach(projet => {
      const div = document.createElement("div");
      div.classList.add("projet");

      div.innerHTML = `
        <img src="${projet.image}" alt="${projet.titre}">
        <h3>${projet.titre}</h3>
        <p>${projet.description}</p>
        <a href="${projet.lien}" target="_blank">Voir le site</a>
      `;

      portfolio.appendChild(div);
    });
  });