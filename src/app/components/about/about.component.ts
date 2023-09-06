import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title: string = 'Front end developer';
  description: string = 'Interested in new technologies and working methods. I like to come up with ideas that to permit to improve business processes.'

  aboutMe: string[] = [
    "My primary goal of being a Front End Developer is to built an easy to use, seamless interface between the user and the product. Optimise application for maximum speed and scalability. Motivate and inspire teams to learn, inspect and adapt new technologies. Help team members an team's to become more Agile.",
    "We are living in the era where software changes rapidly. To cope with this phenomenon, organisations are more and more exploring Agile Development. It refers to iterative development, where requirement and solutions evolve through collaboration between self-organising cross functional teams.",
    "I have a passion for my work, I am a strong believer in the use of standards, conventions, and consistency.",
    "Like in every job, you get a satisfaction feeling when you finish something. I found myself getting satisfied when a project we've done actually help someone.",
    "Designing and developing simple, fast and beautiful UI & UX with latest & cutting edge technologies."
  ];
  skills: string[] = [
    "Web components", 
    "Angular",
    "Angular Material",
    "TypeScript",
    "RxJS",
    "Nginx",
    "REST APIs",
    "NgRx",
    "Web Design",
    "JavaScript",
    "jQuery",
    "Bootstrap",
    "TailwindCSS",
    "HTML5",
    "CSS3/SCSS",
    "NodeJS",
    "JSON",
    "Karma/Jasmine",
  ];
  tools: string[] = [
    "GIT", "Azure Devops", "Agile-SCRUM", "JIRA", "Jenkins", "CI/CD", "Bower"
  ]
  constructor(){}
  ngOnInit(){

  }
}
