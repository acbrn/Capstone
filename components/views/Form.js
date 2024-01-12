import html from "html-literal";

export default () => html`
  <form id="form">
    <div class="planetForm" id="planet-form">
      <label for="planets">Select a Planet</label>
      <select id="planets" name="planets">
        <option value="">Select a Planet</option>
        <option value="mercury">Mercury</option>
        <option value="venus">Venus</option>
        <option value="earth">Earth</option>
        <option value="mars">Mars</option>
        <option value="jupiter">Jupiter</option>
        <option value="saturn">Saturn</option>
        <option value="uranus">Uranus</option> </select
      ><br />

      <div class="rowTwo">
        <label for="missions">Name Missions</label>
        <div class="input-box"></div>
        <input type="text" id="missions" name="missions" />
      </div>

      <label for="Type of Missions">Type of Missions</label>
      <div class="rowThree">
        <input type="radio" name="newMission" value="mission1" />Rover<br />
        <input type="radio" name="newMission" value="mission2" />
        Satellite<br />
        <input type="radio" name="newMission" value="mission3" /> Human<br />
        <input type="radio" name="newMission" value="mission4" /> Drone<br />
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
