import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { IUserInterface, IUser } from "../../interfaces/user-interface";
import {ActivatedRoute} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public users: IUser[];

  public readonly pagination = {
    pageIndex: 0,
    count: 0,
  };


  constructor(
    private readonly apiService: ApiService
  ) { }

  public getItemsList(): void {
    this.apiService.getItemsList(this.pagination.pageIndex)
      .subscribe((data: IUserInterface) => {
        this.users = data.data;
        this.pagination.pageIndex = data.page
        this.pagination.count = data.total
      })
  }

  public onPageChange(event: PageEvent): void {
    this.pagination.pageIndex = event.pageIndex;
    this.getItemsList();
  }

  ngOnInit() {
    this.getItemsList()
  }

}
