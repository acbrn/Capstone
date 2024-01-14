import html from "html-literal";

export default () => html`
  <div class="container">
          <h2 class="collapsible">Planets</h2>
          <div class="row">
            <div class="column">
              <div class="planet-list">
                <div id="Mercury" class="planet">
                  <h3>Mercury</h3>
                  <div id="plannedMissionsMercury" class="mission-list">
                    <h6>Planned Missions</h6>
                    -- No planned missions --
                  </div>
                  <div id="currentMissionsMercury" class="mission-list">
                    <h6>Current Missions</h6>
                    -- No current missions --
                  </div>
                </div>
                <div id="Venus" class="planet">
                  <h3>Venus</h3>
                  <div id="plannedMissionsVenus" class="mission-list">
                    <h6>Planned Missions</h6>
                    -- No planned missions --
                  </div>
                  <div id="currentMissionsVenus" class="mission-list">
                    <h6>Current Missions</h6>
                    -- No current missions --
                  </div>
                </div>
                <div id="Earth" class="planet">
                  <h3>Earth</h3>
                  <div id="plannedMissionsEarth" class="mission-list">
                    <h6>Planned Missions</h6>
                    -- James Webb Space Telescope --
                    <br>
                    -- Artemis 2 --
                  </div>
                  <div id="currentMissionsEarth" class="mission-list">
                    <h6>Current Missions</h6>
                    -- International Space Station --
                    <br>
                    -- Artemis 1 (Successor to Apollo Program) --
                    <br>
                    -- James Webb Space Telescope --
                  </div>
                </div>

                <div id="Mars" class="planet">
                  <h3>Mars</h3>
                  <div id="plannedMissionsMars" class="mission-list">
                    <h6>Planned Missions</h6>
                    -- ExoMars --
                    -- Mars Sample Return --

                  </div>
                  <div id="currentMissionsMars" class="mission-list">
                    <h6>Current Missions</h6>
                    -- Mars 2020 --
                    <br>
                    -- Mars Odyssey --
                    <br>
                    -- Mars Express --
                    <br>
                    -- MAVEN --

                  </div>
                </div>
                <div id="Jupiter" class="planet">
                  <h3>Jupiter</h3>
                  <div id="plannedMissionsJupiter" class="mission-list">
                    <h6>Planned Missions</h6>
                    -- Europa Clipper --
                    <br>
                    -- JUICE --
                  </div>
                  <div id="currentMissionsJupiter" class="mission-list">
                    <h6>Current Missions</h6>
                    -- Juno --

                  </div>
                </div>
                <div id="Saturn" class="planet">
                  <h3>Saturn</h3>
                  <div id="plannedMissionsSaturn" class="mission-list">
                    <h6>Planned Missions</h6>
                    -- Dragonfly --

                  </div>
                  <div id="currentMissionsSaturn" class="mission-list">
                    <h6>Current Missions</h6>
                    -- Cassini (Mission ended 2017) --
                  </div>
                </div>
                <div id="Uranus" class="planet">
                  <h3>Uranus</h3>
                  <div id="plannedMissionsUranus" class="mission-list">
                    <h6>Planned Missions</h6>
                    -- No planned missions --
                  </div>
                  <div id="currentMissionsUranus" class="mission-list">
                    <h6>Current Missions</h6>
                    -- No current missions --
                  </div>
                </div>
                <div id="Neptune" class="planet">
                  <h3>Neptune</h3>
                  <div id="plannedMissionsNeptune" class="mission-list">
                    <h6>Planned Missions</h6>
                    -- No planned missions --
                  </div>
                  <div id="currentMissionsNeptune" class="mission-list">
                    <h6>Current Missions</h6>
                    -- No current missions --
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
