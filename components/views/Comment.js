import html from "html-literal";

export default state => html`
  <section id="comment">
    <!-- form for name -->
    <form method="GET">
      <label
        >Name:
        <input name="submitted-name" autocomplete="name" />
      </label>
      <button id="namebutton">Save</button>
    </form>
    <form method="GET">
      <label
        >Affirmation:
        <input name="Affirmation" />
      </label>
      <button id="namebutton">Save</button>
    </form>
  </section>
`;
