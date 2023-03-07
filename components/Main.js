import html from "html-literal";
import * as views from "./views";

export default state => {
  console.log("state", state);
  return html`
    ${views[state.view](state)}
  `;
};
