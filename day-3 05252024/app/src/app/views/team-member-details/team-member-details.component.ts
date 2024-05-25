import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-member-details',
  templateUrl: './team-member-details.component.html',
  styleUrls: ['./team-member-details.component.css']
})
export class TeamMemberDetailsComponent implements OnInit {

  id:string="";


  // SERVICES !!
  // ActivatedRoute
  // injection

  constructor( private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
   
    // API ...
  }

}
