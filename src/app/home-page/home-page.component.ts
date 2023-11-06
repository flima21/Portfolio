import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})

export class HomePageComponent {
  colorLight = false;
  currentIcon = 'bi bi-database';
  iconsIndex = 0;
  icons = ['bi bi-database','bi bi-hdd','bi bi-bar-chart','bi bi-pc-display-horizontal'];

  //Skilss value 
  valueSkillPython = 80;
  valueSkillR = 50;
  valueSkillSql = 85;
  valueSkillJs = 25;
  valueSkillAngular = 20;
  valueSkillPhp = 70;
  valueSkillLinux = 40;

  // Type Gauge 
  typeGauge = 'semi';

  // Certificações 
  objCertifications = [
    { name:'Programming for Everybody (Getting Started with Python)',codeAuth:'5ETZKR9NAKH8',linkAuth:'https://coursera.org/verify/5ETZKR9NAKH8',school:'COURSERA' ,image:''},
    { name:'Oracle Cloud Infrastructure 2023 Certified Foundations Associate',codeAuth:'302305695OCIF2023CA',linkAuth:'',school:'ORACLE UNIVERSITY'                ,image:''},
    { name:'Oracle Cloud Data Management 2023 Certified Foundations Associate',codeAuth:'302305695OCDMF2023',linkAuth:'',school:'ORACLE UNIVERSITY'                ,image:''},
    { name:'Santander BootCamp',codeAuth:'',linkAuth:'',school:'SANTANDER BRASIL'                                                                                  ,image:'../../assets/icons/santanderCardPng.png'},
    // { name:'Santander Coders 2023 2ª Edição',codeAuth:'',linkAuth:'',school:'Santander Brasil'                                                                  ,image:''},
  ];               



  constructor() {
    interval(1000).subscribe(() => {
      this.iconsIndex = (this.iconsIndex + 1) % this.icons.length;
      this.currentIcon = this.icons[this.iconsIndex];
    });
  
  }

  scrollSmoothSection(idSection:string) {
    const nameSection = document.getElementById(idSection);

    if(nameSection) {
      nameSection.scrollIntoView({behavior:'smooth'});
    }
  }
  setModeTheme() {
    if (this.colorLight) {
      this.colorLight = false;
    } 
    
    else {
      this.colorLight = true;
    }
  }
}
