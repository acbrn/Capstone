import html from "html-literal";

export default (links, state) => html`
  <div class="menu_wrapper">
    <nav class="navbar" id="navbar">
      <ul>
        ${links.map(
          (link) => html`
            <li class="${state.view === link.title ? 'active' : ''}">
              <a href="/${link.title}" title="${link.title}" data-navigo>
                <i class="fa-solid ${link.iconClass}"></i> ${link.text}
              </a>
            </li>
          `
        )}
      </ul>
    </nav>
  </div>
`;
