import html from "html-literal";

export default () => html`
  <main>
    <div class="planetForm" id="planet-form">
      <h1>New Mission Name</h1>
        <div class="rowTwo">
          <div class="input-box">
            <input type="text" id="planet" name="planet" />
            <label for="planet">Planet</label>
            <select id="planet" name="planet">
              <option value="">Select a Planet</option>
              <option value="mercury">Mercury</option>
              <option value="venus">Venus</option>
              <option value="earth">Earth</option>
              <option value="mars">Mars</option>
              <option value="jupiter">Jupiter</option>
              <option value="saturn">Saturn</option>
              <option value="uranus">Uranus</option>
            </select>
          </div>
        </div>
        <div class="rowThree">
          <label for="user">Traveler's Name</label>
          <input type="text" id="user" name="user" />
        </div>
        <div class="rowFour">
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  </main>
`;
