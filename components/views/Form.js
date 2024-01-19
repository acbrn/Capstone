import html from "html-literal";

export default () => html`
  <form id="form" method="POST" action="">
    <div class="planetForm" id="planet-form">
      <label for="planet">Select a Planet</label>
      <select id="planet" name="planet">
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
        <label for="missionName">Name Missions</label>
        <div class="input-box"></div>
        <input type="text" id="missionName" name="missionName" />
      </div>

      <label for="missionType">Type of Missions</label>
      <div class="rowThree">
        <input type="checkbox" id="orbiter" name="newMission" value="Orbiter" />
        <label for="orbiter">Orbiter</label>
        <input type="checkbox" id="flyby" name="newMission" value="Flyby" />
        <label for="flyby">Flyby</label>
        <input type="checkbox" id="rover" name="newMission" value="Rover" />
        <label for="rover">Rover</label>
        <input type="checkbox" id="human" name="newMission" value="Human" />
        <label for="human">Human</label>
        <input type="checkbox" id="drone" name="newMission" value="Drone" />
        <label for="drone">Drone</label>
      </div>

      <div class="rowFour">
        <div class="input-box">
          <label for="traveler">Traveler's Name</label>
          <input type="text" id="user" name="user" />
        </div>
      </div>

      <div class="rowFive" id="rowFive">
        <button id="submit" type="submit">Submit</button>
      </div>
    </div>
  </form>
`;
