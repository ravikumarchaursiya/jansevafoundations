import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-volounteer-list',
  templateUrl: './volounteer-list.component.html',
  styleUrls: ['./volounteer-list.component.scss']
})
export class VolounteerListComponent  {

  membersList  = new MatTableDataSource<any>()
  list:any
  displayedColumns: string[] = ['name', 'position', 'email', 'phone'];
 ngOnInit(): void {
  this.list =[
    {
      "name": "John Doe",
      "position": "Chairman",
      "email": "johndoe@example.com",
      "phone": "+1 123-456-7890"
    },
    {
      "name": "Jane Smith",
      "position": "Vice Chairman",
      "email": "janesmith@example.com",
      "phone": "+1 234-567-8901"
    },
    {
      "name": "Michael Johnson",
      "position": "Secretary",
      "email": "michaeljohnson@example.com",
      "phone": "+1 345-678-9012"
    },
    {
      "name": "Emily Davis",
      "position": "Treasurer",
      "email": "emilydavis@example.com",
      "phone": "+1 456-789-0123"
    },
    {
      "name": "William Brown",
      "position": "Board Member",
      "email": "williambrown@example.com",
      "phone": "+1 567-890-1234"
    }
  ]
     this.membersList = this.list
 }

}
