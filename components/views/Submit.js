import html from "html-literal";

export default state => html`
  <div class="container">
    <p>You've successfully submitted your mission!</p>
    <p>Here's what you submitted:</p>
    <ul>
      ${state.missions.map(
        mission =>
          html`
            <li id="submission">
              <p>
                The planet you selected: ${mission.planet}. The name of mission
                you submitted: ${mission.missions}, and this mission will be a:
                ${mission.newMission} type mission, thank you ${mission.user}
                for your submission
              </p>
              <p>You can submit another mission <a href="/form">here</a></p>
            </li>
          `
      )}
    </ul>
  </div>
`;
