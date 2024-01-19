import html from "html-literal"; // import html helper function

export default state => html`
  <table id="mission">
    <tr>
      <th>Mission Name</th>
      <th>User</th>
      <th>Planet</th>
      <th>Type of Mission</th>
    </tr>
    ${state.mission
      .map(mission => {
        return `<tr>
    <td>${mission.missionName}</td>
    <td>${mission.user}</td>
    <td>${mission.planet}</td>
    <td>${mission.typeMission}</td>
    </tr>`;
      })
      .join(``)}
  </table>
`;
