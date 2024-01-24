import html from "html-literal";

export default () => html`
  <section id="form">
    <form id="NewMissionForm" method="POST" action="">
      <h2>Enter a New Mission</h2>
      <div>
        <label for="missionName">Mission Name</label>
        <input type="text" name="missionName" id="missionName" required />
      </div>
      <div>
        <label for="user">User</label>
        <input type="text" name="user" id="user" required />
      </div>
      <div id="planetlayout">
        <label for="planet">Planet</label>
        <input
          type="checkbox"
          id="id_1"
          class="item1"
          name="planet"
          value="Mercury"
        />
        <label for="id_1">Mercury</label>
        <input
          type="checkbox"
          id="id_2"
          class="item2"
          name="planet"
          value="Venus"
        />
        <label for="id_2">Venus</label>
        <input
          type="checkbox"
          id="id_3"
          class="item3"
          name="planet"
          value="Earth"
        />
        <label for="id_3">Earth</label>
        <input
          type="checkbox"
          id="id_4"
          class="item4"
          name="planet"
          value="Mars"
        />
        <label for="id_4">Mars</label>
        <input
          type="checkbox"
          id="id_5"
          class="item5"
          name="planet"
          value="Jupiter"
        />
        <label for="id_5">Jupiter</label>
        <input
          type="checkbox"
          id="id_6"
          class="item6"
          name="planet"
          value="Saturn"
        />
        <label for="id_6">Saturn</label>
        <input
          type="checkbox"
          id="id_7"
          class="item7"
          name="planet"
          value="Uranus"
        />
        <label for="id_7">Uranus</label>
        <input
          type="checkbox"
          id="id_8"
          class="item8"
          name="planet"
          value="Neptune"
        />
        <label for="id_8">Neptune</label>
      </div>
      <div id="missiontypelayout">
        <label for="typeMission">Type of Mission</label>
        <input
          type="radio"
          id="id_1"
          class="item1"
          name="typeMission"
          value="Flyby"
        />
        <label for="id_1">Flyby</label>
        <input
          type="radio"
          id="id_2"
          class="item2"
          name="typeMission"
          value="Orbiter"
        />
        <label for="id_2">Orbiter</label>
        <input
          type="radio"
          id="id_3"
          class="item3"
          name="typeMission"
          value="Lander"
        />
        <label for="id_3">Lander</label>
        <input
          type="radio"
          id="id_4"
          class="item4"
          name="typeMission"
          value="Rover"
        />
        <label for="id_4">Rover</label>
      </div>
      <input type="submit" name="submit" value="Submit Mission" />
    </form>
  </section>
`;
