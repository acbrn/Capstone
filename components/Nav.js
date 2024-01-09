import html from "html-literal";

export default (links, state) => html`
  <div class="menu_wrapper">
    <div class="menu_toggle" id="menu_toggle" onclick="toggleMenu">
      <span class="menu_icon">☰</span> Menu
    </div>

    <div class="menu" id="navbarNav" style="display: none;">
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
