import html from "html-literal";

export default () => html`
  <div class="content" id="submission">
    <form class="sub-menus" id="sub-menu">
      <label for="planet">Select a Planet:</label>
      <select id="planet" name="planet">
        <option value="Mercury">Mercury</option>
        <option value="Venus">Venus</option>
        <option value="Earth">Earth</option>
        <option value="Mars">Mars</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
        <option value="Uranus">Uranus</option>
        <option value="Neptune">Neptune</option>
      </select>
      <br /><br />
      <label for="mission">Mission Name:</label>
      <input type="text" id="mission" name="mission" required />
      <br /><br />
      <input type="submit" value="Submit" />
    </form>

    <div id="result"></div>
  </div>
`;
