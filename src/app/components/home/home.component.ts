import { Component, OnInit,AfterViewInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
  $(function () {
    $(".slider #pictures li").hide();
    $(".slider #pictures li:first").show();
    $(".slider #buttons li:first").addClass("active");
    $(".slider #buttons li").click(function () {
      var i = $(".slider #buttons li").index();
      $(".slider #pictures li").hide();
      $(".slider #pictures li:eq(" + i + ")").fadeIn("slow");
      $(".slider #buttons li").removeClass("active");
      $(".slider #buttons li:eq(" + i + ")").addClass("active");
        var slider=i
      return false;
    });
     var slider = 0;
     var time=3500;
      $.Don = function(e: any){
      $(".slider #pictures li").hide();
      $(".slider #buttons li").removeClass("active");
      if (slider < e-1) {
        slider++;
        $(".slider #pictures li:eq("+slider+")").fadeIn("slow");
        $(".slider #buttons li:eq("+slider+")").addClass("active");
      }
      else{
        slider=0
        $(".slider #pictures li:first").fadeIn("slow");
        $(".slider #buttons li:first").addClass("active");
      }
    }
    var len= $(".slider #pictures li").length
    setInterval(" $.Don("+len+")",time)
  });
}}
