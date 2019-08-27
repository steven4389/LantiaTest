import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import {AuthenticationService} from '../../../services/authentication.service'
import {YoutubeService} from '../../services/youtube.service'
import { NgxSpinnerService } from "ngx-spinner";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  username = '';
  deviceInfo = null;
  isMobile=false
  navbarOpen = false;
  videos: any[];

  constructor(private deviceService: DeviceDetectorService, 
              private auth:AuthenticationService,
              private spinner: NgxSpinnerService, 
              private youTubeService: YoutubeService) { this.epicFunction()}

  ngOnInit() {
    this.username= localStorage.getItem('username')


    this.spinner.show()
    setTimeout(()=>
        {
          this.spinner.hide()
        },3000)

    this.videos = [];
    // this.youTubeService.getVideosForChanel('UC_LtA_EtCr7Jp5ofOsYt18g', 15)
    //                    .pipe(takeUntil(this.unsubscribe$))
    //                    .subscribe(lista => {
        
    //       for (let element of lista["items"]) {
    //         this.videos.push(element)
        
    //       }
          
    // });

  }

  epicFunction() {
    console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log(this.isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout(){
      this.auth.logout()
  }

}
