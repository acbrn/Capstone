import html from "html-literal";

export default state => html`
  <table id="Planets">
    <tr>
      <th>Planet</th>
      <p>The planet selected is ${state.planet}</p>
      <th>Missions</th>
      <p>The mission selected is ${state.missions}</p>
      <th>Traveler</th>
      <p>The traveler's name is ${state.user}</p>
      <th>Type of Missions</th>
      <p>The type of mission selected is ${state.newMission}</p>
    </tr>
  </table>
`;
