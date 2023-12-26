import html from "html-literal";
import IVlogo from "./assets/img/interstell.png";
export default () => html`
  <div class="header">
    <h1 id="headline">
      Interstellar
      <span> <img src="${IVlogo}" id="logo" alt="interstellarlogo"/></span>
      <span> Voyages</span>
    </h1>
  </div>
`;
