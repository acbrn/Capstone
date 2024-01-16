import html from "html-literal";
import IVlogo from "../assets/img/Interstell.png";
import satellite from "../assets/img/space-satellite.png";
export default () => html`
  <div class="header">
    <h1 id="headline">
      Interstellar
      <span> <img src="${IVlogo}" id="logo" alt="interstellarlogo"/></span>
      <span> Voyages</span>
    </h1>
    <br />
    <img src="${satellite}" id="satellite" alt="satellite" />
  </div>
`;
