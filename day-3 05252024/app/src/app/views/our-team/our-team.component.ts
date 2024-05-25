import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {

  teams:any[] = [
    { id: 1, fullname:"chourabi taher", email:'tchourabi@gmail.com' },
    { id: 2, fullname:"wijden", email:'wijden@gmail.com' },
    { id: 3, fullname:"wiem", email:'wiem@gmail.com' },
    { id: 4, fullname:"souha", email:'souha@gmail.com' },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
