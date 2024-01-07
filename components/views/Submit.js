import html from "html-literal";

export default state => html`
  <div class="content" id="submission">
    <form class="sub-menu" id="sub-menu">
      <table>
        <tr>
          <th>Select</th>
          <th>Planet</th>
        </tr>
        ${state.planets
          .map(planet => {
            return `<tr><td><input type="radio" id="${planet}" name="planet" value="${planet}" /></td><td>${planet}</td></tr>`;
          })
          .join("")}
      </table>

      <br /><br />
      <label for="mission">Mission Name:</label>
      <input type="text" id="mission" name="mission" required />
      <br /><br />
      <input type="submit" value="Submit" />
    </form>

    <div id="result"></div>
  </div>
`;
