import html from "html-literal";

export default state => html`
<main>
    <div class="submit">
      <a class="add-planet-btn-form" href="/Form">Mission Name</a>
      <table class="planet-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Moons</th>
            <th>Missions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${state.planets
            .map(planet => {
              `
            <tr key="${planet.id}">
              <td>${planet.name}</td>
              <td>${planet.type}</td>
              <td>${planet.moons}</td>
              <td>${planet.distanceFromSun}</td>
              <td>${planet.missions}</td>
              <td><span>delete_forever</span></td>
            </tr>
            `;
            })
            .join("")}
        </tbody>
      </table>
    <div>
  </main>
`;
