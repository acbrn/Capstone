import html from "html-literal";
import Mercury from "../../assets/img/mercury.png";
import Venus from "../../assets/img/venus.png";
import Earth from "../../assets/img/earth.png";
import Mars from "../../assets/img/mars.png";
import Jupiter from "../../assets/img/jupiter.png";
import Saturn from "../../assets/img/saturn.png";
import Uranus from "../../assets/img/uranus.png";
import Neptune from "../../assets/img/neptune.png";

export default () => {
  return html`
    <div class="planetary-lists">
      <form action="#">
        <label for="planetary">Planned Missions</label>
        <select name="plannedPlanets" id="planetary">
          <option value="Mercury">Mercury</option>
          <option value="Venus">Venus</option>
          <option value="Earth">Earth</option>
          <option value="Mars">Mars</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturn">Saturn</option>
          <option value="Uranus">Uranus</option>
          <option value="Neptune">Neptune</option>
        </select>
        <input type="button" value="Let's See" />
      </form>
    </div>
  `;
};
