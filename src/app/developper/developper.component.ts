import { Component, OnInit } from '@angular/core';
import { Developper } from '../model/developper.model'
import {Skill} from "../model/skill.model";

@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public developper: Developper = new Developper(
    "Smith",
    "Bart",
    26,
    "male",
    "Just a dev in a non binary world.",
    [
      new Skill('PHP', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png', 'https://www.php.net/'),
      new Skill('Java', 'https://cdn2.clc2l.fr/t/j/a/java-N5uhyL.jpg', 'https://www.java.com/fr/'),
      ]
  );

}
