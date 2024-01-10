import html from "html-literal";

export default () => html`
  <main>
    <div class="container">
      <div class="planet-form">
        <h1>Add New Planet</h1>
        <form id="planet-form">
          <div class="row">
            <div class="more">
              <label for="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="less">
              <label for="missionname">Mission Name</label>
              <input
                id="missionname"
                type="text"
                name="missions"
                placeholder="Mission Name"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="input-box">
              <label for="planet">Planet</label>
              <select id="planet" name="planet" required>
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
          <div class="submit-button">
            <button class="clear-form" type="button">
              clear
            </button>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
  </main>
`;
