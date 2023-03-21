import html from "html-literal";

export default state => html`
  <section id="comment">
    <!-- form -->
  <form method="POST" action="https://formspree.io/f/xnqybqbg">
    <!-- name -->
        <div id="submittedname">
        <label for="submittedname"
          >Name:</label>
          <input name="submitted-name" autocomplete="name" type="text" id="submittedname" required/>
          </div>
          <!-- affirmation -->
        <div id="affirmation"></div>
        <label for="affirmation"
          >Affirmation:
          <input type="text" name="affirmation"  id="affirmation" required />
        </label>
        </div>
        <!-- <button id="namebutton">
          Save
        </button> -->
        <div id="submitbutton">
        <input type="submit" value="Submit">
        </div>
      </form>
  </section>

  <!-- get comments -->
  <div id="affirmationcomment">
    <table id="comments">
      <tr>
        <th>Name:</th>
      </tr>
      <tr>
        <th>Affirmation:</th>
      </tr>

    </table>


  </div>
`;
