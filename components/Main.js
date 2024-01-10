import html from "html-literal";
import * as views from "./views";

export default state => {
  if (typeof views[state.view] === "function") {
    return html`
      ${views[state.view](state)}
    `;
  } else {
    return html`
      <div>Error: Invalid view</div>
    `;
  }
};
