import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/team.service';
import { TeamMember } from 'src/app/team-member';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  /* Initialize the team members variable */
  teamMembers: TeamMember[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    // Get the members from the teamService
    this.teamMembers = this.teamService.getMembers();

    // Get the members with http request
    // this.teamService.getTeamMembers()
    //   .subscribe(data => console.log(data));
  }

  handleHover(event: MouseEvent, color: string) {
    console.log(event);
  }

}
