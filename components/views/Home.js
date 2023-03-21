import html from "html-literal";

export default state => html`
  <section id="suicideprevention">
    <p>
      If you are having thoughts about harming yourself or others please contact
      the Suicide and Crisis Lifeline at 988 or visit their website at
      <a href="https://988lifeline.org/"> 988lifeline.org.</a>
    </p>
  </section>
  <section id="quoteoftheday">
    <p>
      <q>
        Mental health problems don’t define who you are. They are something you
        experience. You walk in the rain and you feel the rain, but,
        importantly, YOU ARE NOT THE RAIN.</q
      >
      <cite>-Matt Haig</cite>
    </p>
  </section>
  <section id="factoftheday">
    <h2>
      <strong>Mental Health Fact of the Day</strong>
    </h2>
    <p>
      <q
        >46 percent of Americans will meet the criteria for a diagnosable mental
        health condition sometime in their life, and half of those people will
        develop conditions by the age of 14.</q
      >
      <cite
        ><a href="https://pubmed.ncbi.nlm.nih.gov/15939837/">Source</a></cite
      >
    </p>
  </section>
  <section id="dogoftheday">
    <h2 id="dogpicheader">
      <strong>Pictures of Dogs</strong>
    </h2>
    <p>
      <img src="${state.message}" alt="Enjoy this picture of a dog" />
    </p>
  </section>
`;
