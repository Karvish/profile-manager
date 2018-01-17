import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Profile } from '../profile';
import { ProfileService } from "../profile.service";



@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css'],

})
export class ProfileDetailComponent implements OnInit {

	  profile: Profile;
    private showEdit =  false;

constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location
  ) {}

  ngOnInit(): void {
  	 this.getHero();
  	 
  	
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
      this.profileService.getProfile(id)
      .subscribe(profile => this.profile = profile)
  }

 goBack(): void {
    this.location.back();
  }

  editProfile(): void{
    (this.showEdit == false) ? this.showEdit = true : this.showEdit = false
  }


}
