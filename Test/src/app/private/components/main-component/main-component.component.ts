import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import {AuthenticationService} from '../../../services/authentication.service'

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  deviceInfo = null;
  isMobile=false
  navbarOpen = false;

  constructor(private deviceService: DeviceDetectorService, private auth:AuthenticationService) { this.epicFunction()}

  ngOnInit() {
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
