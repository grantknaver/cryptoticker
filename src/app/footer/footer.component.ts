import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn, faFreeCodeCamp, faTwitter } from '@fortawesome/free-brands-svg-icons';

/**
 * Component for the footer of the PetStore App
 *
 * @export
 * @class FooterComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  githubIcon = faGithub;
  linkedinIcon = faLinkedinIn;
  fccIcon = faFreeCodeCamp;
  twitterIcon = faTwitter;

  constructor() { }

  ngOnInit() {
  }

}
