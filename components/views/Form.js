import html from "html-literal";

export default state => html`
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
                placeholder="Name"
                required
              />
            </div>
            <div class="less">
              <label for="type">Type</label>
              <input
                id="type"
                type="text"
                name="type"
                placeholder="Type"
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="input-box">
              <label for="moons">Moons</label>
              <input
                id="moons"
                type="number"
                name="moons"
                placeholder="Number of Moons"
                required
              />
            </div>
            <div class="input-box">
              <label for="missions">Missions</label>
              <input
                type="text"
                name="missions"
                id="missions"
                placeholder="Enter mission names"
                required
              />
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
