import html from "html-literal";

export default () => html`
  <form id="form" method="POST" action="">
    <div class="planetForm" id="planet-form">
      <label for="planets">Select a Planet</label>
      <select id="planets" name="planets">
        <option value="">Select a Planet</option>
        <option value="Mercury">Mercury</option>
        <option value="Venus">Venus</option>
        <option value="Earth">Earth</option>
        <option value="Mars">Mars</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
        <option value="Uranus">Uranus</option>
        <option value="Neptune">Neptune</option></select
      ><br />

      <div class="rowTwo">
        <label for="missions">Name Missions</label>
        <div class="input-box"></div>
        <input type="text" id="missions" name="missions" />
      </div>

      <label for="typeofMission">Type of Missions</label>
      <div class="rowThree">
        <input type="radio" name="newMission" value="Rover" />
        <p>Rover</p>
      </input>
        <input type="radio" name="newMission" value="Satellite" />
        <p>Satellite</p>
      </input>
        <input type="radio" name="newMission" value="Human" />
        <p> Human</p>
      </input>
        <input type="radio" name="newMission" value="Drone" />
        <p>Drone</p>
      </input>
      </div>

      <div class="rowFour">
        <div class="input-box">
          <label for="user">Traveler's Name</label>
          <input type="text" id="user" name="user" />
        </div>
      </div>

      <div class="rowFive" id="rowFive">
        <button id="submit" type="submit">Submit</button>
      </div>
    </div>
  </form>
`;
