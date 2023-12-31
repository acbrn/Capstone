import html from "html-literal";
import acbrn from "../assets/img/acbrn.png";
export default () => html`
  <footer class="footer" id="bottomLine">
    ACBRN Development
    <br />
    <span><img src="${acbrn}" id="acbrn"/></span>
  </footer>
`;
