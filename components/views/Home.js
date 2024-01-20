import html from "html-literal";
import Earth from "../../assets/img/earth.png";

export default state => html`
  <div class="content">
    <div class="item">
      Welcome home traveler!
      <br />
      <h4>You submitted the mission ideas from the Form page:</h4>
      <h4>
        ${state.mission.user} wants to send a ${state.mission.typeMission} to
        mission to ${state.mission.planet}. The mission name is ${state.mission.missionName}.
      <br />
      <h4>Here is the weather in your area:</h4>
      <h4>
        The weather in ${state.weather.city} is ${state.weather.description}.
        Temperature is ${state.weather.temp}F, and it feels like
        ${state.weather.feelsLike}F.
      </h4>
      <img class="homeImg" id="earth" src="${Earth}" />
      <br />
      Embark on a cosmic journey with our dedication to unveiling the mysteries
      of upcoming planetary missions. Here, we bring you a comprehensive list of
      major and pivotal future expeditions, offering you a front-row seat to the
      next chapter in interplanetary exploration.
      <br />
      <br />
      Whether you're a space enthusiast, a science buff, or just curious about
      the wonders beyond Earth, our platform is your gateway to the latest and
      greatest in planetary missions. Navigate through the cosmos by exploring
      missions, delving into details about specific planets, or even
      contributing your imaginative prowess by submitting name ideas for
      upcoming missions.
      <br />
      <br />
      Join us as we propel into the future, pushing the boundaries of human
      knowledge and discovery. The universe is vast, and the possibilities are
      infinite. Come along and be part of the cosmic adventure that awaits us.
      The next frontier is just a click away!
      <br />
    </div>
  </div>
`;
