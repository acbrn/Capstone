import html from "html-literal";
import Mercury from "../../assets/img/mercury.png";
import Venus from "../../assets/img/venus.png";
import Earth from "../../assets/img/earth.png";
import Mars from "../../assets/img/mars.png";
import Jupiter from "../../assets/img/jupiter.png";
import Saturn from "../../assets/img/saturn.png";
import Uranus from "../../assets/img/uranus.png";
import Neptune from "../../assets/img/neptune.png";

export default () => html`
  <div class="row">
    <div class="column">
      <h2 id="CurrentPlan">Planned Missions! (Sorry no Pluto)</h2>
      <ul>
        <li>
          <img src="${Mercury}" />
          <h3>Mercury</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <img src="${Venus}" />
          <h3>Venus</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <img src="${Earth}" />
          <h3>Earth/Moon</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <img src="${Mars}" />
          <h3>Mars</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <img src="${Jupiter}" />
          <h3>Jupiter</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <img src="${Saturn}" />
          <h3>Saturn</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <img src="${Uranus}" />
          <h3>Uranus</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <img src="${Neptune}" />
          <h3>Neptune</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="column">
      <h2 id="CurrentPlan">Current Planetary Missions (A work in progress)</h2>
      <ul>
        <li>
          <img src="${Mercury}" />
          <h3>Mercury</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <img src="${Venus}" />
          <h3>Venus</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <img src="${Earth}" />
          <h3>Earth/Moon</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <img src="${Mars}" />
          <h3>Mars</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <img src="${Jupiter}" />
          <h3>Jupiter</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <img src="${Saturn}" />
          <h3>Saturn</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <img src="${Uranus}" />
          <h3>Uranus</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <img src="${Neptune}" />
          <h3>Neptune</h3>
          <ul>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
            <li>test1</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
`;