import { Component, HostBinding, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription, tap } from "rxjs";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: "order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"],
})
export class OrderComponent implements OnInit, OnDestroy {
  @HostBinding('className') componentClass: string = 'content';

  orderForm = this.fb.group({
    productTitle: new FormControl(
      { value: "", disabled: true },
      {
        validators: [Validators.required],
      }
    ),
    firstName: new FormControl("", {
      validators: [Validators.pattern(/^\p{L}+$/u), Validators.required],
      updateOn: "blur",
    }),
    lastName: new FormControl("", {
      validators: [Validators.pattern(/^\p{L}+$/u), Validators.required],
      updateOn: "blur",
    }),
    phone: new FormControl("", {
      validators: [
        Validators.pattern(/^\+?[0-9]{11,11}$/),
        Validators.required,
      ],
      updateOn: "blur",
    }),
    country: new FormControl("", {
      validators: [Validators.required],
      updateOn: "blur",
    }),
    postalCode: new FormControl("", {
      validators: [Validators.required],
      updateOn: "blur",
    }),
    address: new FormControl("", {
      validators: [
        Validators.pattern(/^[\p{L}0-9\s\-\\/]+$/u),
        Validators.required,
      ],
      updateOn: "blur",
    }),
    comment: new FormControl(),
  });

  private subscriptionOrder: Subscription | null = null;
  private errorShowingObservable: Observable<void>;

  public isOrderCreated: boolean = false;
  public isSent: boolean = false;
  public isSending: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private orderService: OrderService
  ) {
    this.errorShowingObservable = new Observable((observer) => {
      const errorShowingTimeout = setTimeout(() => {
        observer.next();
      }, 3000);

      return {
        unsubscribe() {
          clearTimeout(errorShowingTimeout);
        },
      };
    });
  }

  ngOnInit(): void {
    const productParam =
      this.activatedRoute.snapshot.queryParamMap.get("product");
    if (productParam) {
      this.orderForm.patchValue({
        productTitle: productParam,
      });
    }
  }

  ngOnDestroy() {
    this.subscriptionOrder?.unsubscribe();
  }

  public onSubmit(): void {
    this.createOrder();
  }

  private createOrder(): void {
    this.isSending = true;
    if (this.orderForm.valid) {
      this.subscriptionOrder = this.orderService
        .createOrder({
          name: this.orderForm.get("firstName")?.value ?? "",
          last_name: this.orderForm.get("lastName")?.value ?? "",
          phone: this.orderForm.get("phone")?.value ?? "",
          country: this.orderForm.get("country")?.value ?? "",
          zip: this.orderForm.get("postalCode")?.value ?? "",
          product: this.orderForm.get("productTitle")?.value ?? "",
          address: this.orderForm.get("address")?.value ?? "",
          comment: this.orderForm.get("comment")?.value ?? "",
        })
        .pipe(tap(() => (this.isSending = false)))
        .subscribe((response) => {
          this.isSent = true;
          if (response.success && !response.message) {
            this.orderForm.reset();
            this.isOrderCreated = true;
          } else {
            this.errorShowingObservable.subscribe(() => (this.isSent = false));
          }
        });
    } else {
      this.orderForm.markAllAsTouched();
      this.isSending = false;
    }
  }
}
