import html from "html-literal";

export default state => html`
  <table id="mission">
    <tr>
      <th>Mission Name:</th>
      <th>Planet:</th>
      <th>Mission Type:</th>
      <th>Traveler:</th>
    </tr>
    ${state.mission
      .map(
        mission => `
    <tr key=${mission._id}>
      <td>${mission.missions}</td>
      <td>${mission.planet}</td>
      <td>${mission.missionType}</td>
      <td>${mission.traveler}</td>
    </tr>
    `
      )
      .join("")}
  </table>
`;
