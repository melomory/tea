import { Component, HostBinding, OnInit } from "@angular/core";
import { Observable } from "rxjs";

declare var $: any;

@Component({
  selector: "main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  @HostBinding("className") componentClass: string = "content";

  private observable: Observable<void>;
  public canShowPopup: boolean = false;

  constructor() {
    this.observable = new Observable((observer) => {
      const popupTimeout = setTimeout(() => {
        observer.next();
      }, 10000);

      return {
        unsubscribe() {
          clearTimeout(popupTimeout);
        },
      };
    });
  }

  ngOnInit(): void {
    this.observable.subscribe(() => {
      this.canShowPopup = true;
    });

    const icons = {
      header: "ui-icon-chevron-e",
      activeHeader: "ui-icon-chevron-s",
    };

    $("#accordion").accordion({
      collapsible: true,
      icons: icons,
    });

    $(".slick-carousel").slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
    });
  }

  closePopup() {
    this.canShowPopup = false;
  }
}
