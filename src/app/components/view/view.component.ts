import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { ActivatedRoute } from "@angular/router";
import { IUserView } from "../../interfaces/user-interface";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public user: IUserView;

  constructor(
    private readonly apiService: ApiService,
    private readonly route: ActivatedRoute
  ) { }

  // Get user view
  public getUserView(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.apiService.getUser(id)
      .subscribe((data) => {
        this.user = data;
        console.log(data)
      })
  }

  ngOnInit() {
  this.getUserView();
  }

}
