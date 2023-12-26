import html from "html-literal";
import oops from "../../assets/img/oops.gif";
export default () => html`
  <div id="oops404">
    <img src=${oops} id="imgLost" alt="View not found!" />
    <div class="attribution">
      This is the wrong way!
    </div>
  </div>
`;
