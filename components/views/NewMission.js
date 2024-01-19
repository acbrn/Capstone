import html from "html-literal"; // import html helper function

export default () => html`
  <section id="NewMission">
    <h1>New Mission Name Ideas</h1>
    <form>
      <table id="mission">
        <tr>
          <td><label for="missionName">Mission Name:</label></td>
          <td><input type="text" name="missionName" id="missionName" /></td>
        </tr>
        <tr>
          <td><label for="planet">Planet:</label></td>
          <td><input type="text" name="planet" id="planet" /></td>
        </tr>
        <tr>
          <td><label for="missionType">Mission Type:</label></td>
          <td><input type="text" name="missionType" id="missionType" /></td>
        </tr>
        <tr>
          <td><label for="traveler">Traveler:</label></td>
          <td><input type="text" name="traveler" id="traveler" /></td>
        </tr>
      </table>

      <button type="submit">Submit</button>
    </form>
  </section>
`;
