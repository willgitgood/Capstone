import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
  ${Header(state)}
  ${Nav(store.Links)}
  ${Main(state)}
  ${Footer()}
  `;
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  console.log("matsinet - sate:", state);
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Affirmation") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      // const toppings = [];
      // // Interate over the toppings input group elements
      // for (let input of inputList.toppings) {
      //   // If the value of the checked attribute is true then add the value to the toppings array
      //   if (input.checked) {
      //     toppings.push(input.value);
      //   }
      // }

      const requestData = {
        name: inputList.name.value,
        affirmation: inputList.affirmation.value
      };
      console.log("request Body", requestData);

      axios
        .post(`${process.env.COMMENTS}/comments`, requestData)
        .then(response => {
          // Push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the pizza list
          store.Comment.comments.push(response.data);
          router.navigate("/Comment");
        })
        .catch(error => {
          console.log("It puked1", error);
        });
    });
  }
}

router.hooks({
  before: async (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            // API with pictures of dogs
            `https://dog.ceo/api/breeds/image/random`
          )
          .then(response => {
            console.log(response.data.message);
            store.Home.message = response.data.message;
            done();
          })
          .catch(err => {
            console.log(err);
            done();
          });
        break;
      case "Comment":
        axios
          .get(`${process.env.COMMENTS}/comments`)
          .then(response => {
            store.Comment.comments = response.data;
            done();
          })
          .catch(error => {
            console.log("It puked2", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
