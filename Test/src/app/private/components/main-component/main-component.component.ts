import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import {AuthenticationService} from '../../../services/authentication.service'
import {YoutubeService} from '../../services/youtube.service'
import { NgxSpinnerService } from "ngx-spinner";
import { importType } from '@angular/compiler/src/output/output_ast';
import {TwitterserviceService} from '../../services/twitterservice.service'
import { NewsApiService } from '../../services/news-api.service';

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
  public valores: string = "";
  public videos: any = [];
  myTimeline: any;
  mArticles:Array<any>;
  mSources:Array<any>;


  constructor(private deviceService: DeviceDetectorService, 
              private auth:AuthenticationService,
              private spinner: NgxSpinnerService, 
              private _ys_: YoutubeService,
              private api: TwitterserviceService,
              private newsapi:NewsApiService) { this.epicFunction()}

  ngOnInit() {
    this.username= localStorage.getItem('username')

  }

  buscar(){
  
    // if(this.valores.length > 4){
      this._ys_.buscare(this.valores).subscribe(
        result=>{
          console.log(result)
          this.videos = result.items;
        }
      );

      
        // this.api.getTimeline()
        //   .subscribe(
        //     myTimeline => {
        //       this.myTimeline = myTimeline;
        //       console.log(this.myTimeline);
        //     }
        //   )


      
        console.log("selected source is: "+this.valores);
        this.newsapi.getArticlesByID(this.valores).subscribe(
              data => 
                { console.log(data)
                      this.mArticles = data['articles']
                      // console.log(this.mArticles)
                }
              );
      
       
    
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
