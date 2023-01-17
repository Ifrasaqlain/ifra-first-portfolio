import React from 'react';
import { projects } from "./data";

export default function Projects() {
    return (
      <section id="projects" className='pt-5 pb-5'>
        <div className="container text-center">
            <h1 className='width-full'>
              Projects
            </h1>
            <p>
             I worked on wordpress projects, Diziana customer projects, themes, HTML/CSS/JS projects, and pugins.
            </p>
          </div>
        <div className="project-block-item container text-center">
          {projects.map((project) => (
            // dragon art, g.k.electronics
          <div className=" -m-4">
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.image}
                  />
                  <div className="block-text px-8 py-10 relative z-10 w-full">
                    <h3>
                      {project.subtitle}
                    </h3>
                    <h4 className="title-font text-lg font-medium mb-3">
                      {project.title}
                    </h4>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
          </div>
          ))}
        </div>
      </section>
    );
  }