import html from "html-literal";

export default () => {
  return html`
    <div>
      <label for="mission-name">Mission Name:</label>
      <input type="text" id="mission-name" name="mission-name" />

      <label for="user-name">User Name:</label>
      <input type="text" id="user-name" name="user-name" />

      <label for="planet">Planet:</label>
      <select id="planet" name="planet">
        <option value="mercury">Mercury</option>
        <option value="venus">Venus</option>
        <option value="earth">Earth</option>
        <option value="mars">Mars</option>
        <option value="jupiter">Jupiter</option>
        <option value="saturn">Saturn</option>
        <option value="uranus">Uranus</option>
        <option value="neptune">Neptune</option>
      </select>

      <label for="mission-type">Mission Type:</label>
      <select id="mission-type" name="mission-type">
        <option value="lander">Lander</option>
        <option value="satellite">Satellite</option>
        <option value="flyby">Flyby</option>
        <option value="manned">Manned</option>
      </select>
    </div>
  `;
};
