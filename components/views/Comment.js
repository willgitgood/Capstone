import html from "html-literal";

export default state => html`
  <!-- get comments -->
  <div id="affirmationcomment">
    <table id="comments">
      <tr>
        <th>Name:</th>
        <th>Affirmation:</th>
      </tr>
      ${state.comments
        .map(comment => {
          return `<tr><td>${comment.name}</td><td>${comment.affirmation}</td></tr>`;
        })
        // eslint-disable-next-line prettier/prettier
        .join("")}
    </table>
  </div>
`;
