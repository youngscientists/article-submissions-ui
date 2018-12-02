<template>
  <div id="eligibility" class="visible">
    <h3>Are you eligible?</h3>

    <ul>
      <li>
        Every author must be aged between 12 and 20 at the time of writing the article, adult help is
        acceptable but must be limited to proof reading and guidance.
      </li>
      <li>
        The article (and any images) must be your own work and mustn't violate the copyright of another
        person.
      </li>
      <li>Plagiarism will result in
        <b>immediate</b> rejection.
      </li>
      <li>The article must be on a scientific, technology, engineering, mathematical, or related topic.</li>
      <li>The article must be factually correct.</li>
    </ul>

    <hr>

    <h3>Is your article ready?</h3>

    <p>Every article must contain:</p>
    <ul>
      <li>An Abstract</li>
      <li>Introduction</li>
      <li>Method/Results/Discussion</li>
      <li>Conclusion</li>
      <li>Full References in the
        <a
          href="http://www.chicagomanualofstyle.org/tools_citationguide.html"
          target="_blank"
        >Chicago Style</a>
      </li>
    </ul>

    <input type="checkbox" name="eligible" class="eligiblecheck">I am eligible and my article is
    complete
    <br>

  </div>
</template>

<script>
export default {
    name: "Eligibility"
};
</script>

<style>
</style>
