import html from "html-literal";

export default state => html`
  <section id="comment">
    <!-- form -->
  <form method="POST" action="/">
    <!-- name -->
        <div id="submittedname">
        <label for="submittedname"
          >Name:</label>
          <input name="name" class="name" autocomplete="name" type="text" id="name" required/>
          </div>
          <!-- affirmation -->
        <div id="affirmation"></div>
        <label for="affirmation"
          >Affirmation:
          <input type="text" name="affirmation"  id="affirmation"
          class="affirmation1" required />
        </label>
        </div>
        <div id="submitbutton">
        <input type="submit" value="Submit" name="submit">
        </div>
      </form>
  </section>
`;
