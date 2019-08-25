import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';
import {Issue} from '../../issue.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues:Issue[];
  displayedColumns = ['title', 'responsible', 'description', 'severity', 'status', 'actions'];
  constructor(private issueService:IssueService, private router:Router) { }

  ngOnInit() {
    // this.issueService.getIssues()
    //       .subscribe((issue)=>{
    //         console.log(issue);
    //       })
    this.fetchIssues();
  }
    fetchIssues(){
      this.issueService
        .getIssues()
          .subscribe((data:Issue[])=>{
            this.issues = data;
            console.log('data requested');
            console.log(this.issues);
          })
  }
  editIssues(id){
    this.router.navigate([`/edit/${id}`]);
  }

  deletedIssues(id){
    debugger;
    this.issueService.deleteIssue(id).subscribe(()=>{
      this.fetchIssues();
    });
  }

}
