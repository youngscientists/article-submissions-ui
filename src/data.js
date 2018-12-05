import Input, {
    Text,
    Select,
    TextArea
} from "./Input";

/**
 * All the static application data
 */
export default [{
        id: 0,
        title: "Eligibility",
        pairs: [
            new Text("Are you eligible?", `
            <ul>
            <li>Every author must be aged between 12 and 20 at the time of writing the article, adult help is
                acceptable but must be limited to proof reading and guidance.</li>
            <li>The article (and any images) must be your own work and mustn't violate the copyright of another
                person. </li>
            <li>Plagiarism will result in <b>immediate</b> rejection.
            <li>The article must be on a scientific, technology, engineering, mathematical, or related topic.</li>
            <li>The article must be factually correct. </li>
        </ul>`),
            new Text("Is your article ready?", `
        Every article must contain:
                    <ul>
                        <li>An Abstract</li>
                        <li>Introduction</li>
                        <li>Method/Results/Discussion</li>
                        <li>Conclusion</li>
                        <li>Full References in the <a href="http://www.chicagomanualofstyle.org/tools_citationguide.html"
                                target="_blank">Chicago Style</a></li>
                    </ul>
        `),
        new Input("I am eligible to proceed and my article is complete", "eligible", "checkbox")
        ]
    },
    {
        id: 1,
        title: "You",
        pairs: [
            new Input("First Name", "firstName", "text", "Stephen"),
            new Input("Last Name", "lastName", "text", "Hawking"),
            new Input("Your Email", "email", "email", "hawking@cam.ac.uk"),
            new Input("Your Birthday", "birthday", "date", "01/01/2001"),
            new Input("Your Country", "nationality", "text", "British"),
            new TextArea("Biography", "biography", "Write this in the third person!"),
            new Input("Photo", "photo", "photo"),
        ]
    },
    {
        id: 2,
        title: "School",
        pairs: [
            new Select("Are you in a YSJ hub?", "hub", ["Abingdon"]),
            new Select("How did you find the journal?", "find", ["Search Engine", "Friend", "School", "Conference", "Other"]),
            new Select("How did you start this article?", "referred", ["CREST Award", "Nuffield Project", "EPQ", "IRIS", "Google Science Fair", "The Bright Ideas Challenge", "Other"]),
            new Input("Your School / Originisation", "school", "text", "Stockholm School of Science"),
            new TextArea("School / Orginisation Address", "schoolAddress", "123 Education Street, London, WC3 9BT"),
            new Input("Teacher's Email", "teachersEmail", "text", )
        ]
    },
    {
        id: 3,
        title: "Article",
        pairs: [
            new Input("Title", "articleTitle", "text", "The Theory of Everything"),
            new Input("Article Document", "document", "file"),
            new Input("Article Summary", "summary", "text", "Space and stuff"),

        ]
    }
];