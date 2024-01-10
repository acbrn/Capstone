import html from "html-literal";
import oops from "../../assets/img/404img.gif";
export default () => html`
  <img src="${oops}" alt="404" />
  <p>Oops! Something went wrong!</p>
  <p>Try going back to the <a href="/">home page</a></p>
`;
