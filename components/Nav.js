import html from "html-literal";

export default (links, state) => html`
  <div class="menu_wrapper">
    <div class="menu" id="navbar">
      <ul>
        ${links
          .map(
            link => `
    <li class="${state.view === link.title ? "active" : ""}">
      <a href="/${link.title}" title="${link.title}" data-navigo>
        <i class="fa-solid ${link.iconClass}"></i> ${link.text}
      </a>
    </li>
  `
          )
          .join("")}
      </ul>
    </div>
  </div>
`;
