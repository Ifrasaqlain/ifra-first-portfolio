import React from "react";
import { aboutData } from "./data";


export default function About() {
  return (
    <section className="page-section" id="about">
      <title>About</title>
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">
            Currently, I'm a web developer Experience was good in my previous
            company (Futureistic in Kanpur, India). I learned how to write code,
            how to manage files of code, about theme structure (Folder & Files)
            , how to work in a team, how to behave. That was my first office so
            I was like a fresher in a college and I thought about ragging but my
            seniors was very nice people :), they trained me very well.
            <br />
            Skills: Build WordPress Website | Implementation of Plugins in
            WordPress Websites | Develop WordPress Themes
            <br />
            <br />
            I worked in a software development company (Allies in Kanpur, India)
            and I worked hard, I never saw the watch in my training period, I
            learned more languages by myself, I learned more about files,
            structure of a website, structure of a software, about libraries -
            how to put on a file; where to put, sequences, code formatting, If
            I'm finding something on google then how to write query to get exact
            solution or relate to your query and learned self management to
            complete the tasks, how you manage time, break the tasks in a small
            pieces and then complete that, deliver to the boss directly. "Never
            see the watch if you are learning by yourself because you are not in
            a school where time is fix."
            <br />
            <br />
            I'm a moderator in Zendesk Community.
            <br />
            My Zendesk Profile:
            https://support.zendesk.com/hc/en-us/profiles/1263169183150-Ifra-Saqlain
            <br />
            I was selected in "Top 3 Contributors" list in year 2020. I got the
            awards in year 2021 and 2022.
            <br />
            <br />
            2021
            <br />
            https://support.zendesk.com/hc/en-us/articles/4411301646234-2021-Zendesk-Community-Award-Winners
            <br />
            <br />
            2022:
            <br />
            https://support.zendesk.com/hc/en-us/community/posts/5126453340058-Congratulations-to-the-2022-Zendesk-Community-Award-winners-
            <br />
            <br />
            My experience, in Zendesk Community, is very very very awesome and I
            love to spend time in Zendesk Community and I love to spend time
            with my guitar also :)
          </h3>
        </div>
        <ul className="timeline">
        {aboutData.map((aboutData) => (
          <li key={aboutData.id}>
            <div className="timeline-image">
              <img
                className="rounded-circle img-fluid"
                src={aboutData.image}  
                alt="Logo"
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4 className="">{aboutData.designation}</h4>
                <h6 className="">{aboutData.companyName}<br/>
                {aboutData.employmentTime}<br/>
                {aboutData.employmentType}
                </h6>
              </div>
              <div className="timeline-body">
                <h5 className="subheading">{aboutData.team}</h5>
                <p className="text-muted">
                {aboutData.description}
                </p>
              </div>
             </div>
            </li>
           ))}
        </ul>
      </div>
    </section>
  );
}