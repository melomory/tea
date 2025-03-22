import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {

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
  }

  closePopup() {
    this.canShowPopup = false;
  }
}
