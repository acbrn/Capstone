import html from "html-literal";

export default state => html`

  <div id="planet">
    <tr>
      <th>Mission Name</th>
      <th>Planet</th>
      <th>Traveler's Name</th>
    </tr>
    ${state.Planets.planets &&
      state.Planets.planets.map(
        mission => html`
          <tr>
            <td>${mission.missions[0].planet}</td>
            <td>${mission.planet}</td>
            <td>${mission.user}</td>
          </tr>
        `
      )}
  </table>
`;
