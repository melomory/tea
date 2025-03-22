declare var $: any;

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {

    // new WOW({
    //   animateClass: "animate__animated",
    // }).init();

    // $(".slick-carousel").slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   fade: true,
    //   cssEase: "linear",
    // });

    const icons = {
      header: "ui-icon-chevron-e",
      activeHeader: "ui-icon-chevron-s",
    };

    $("#accordion").accordion({
      collapsible: true,
      icons: icons,
    });

    // $(".product__image").magnificPopup({
    //   type: "image",
    //   midClick: true,
    // });

    // const $orderForm = $("#create-order-form");

    // $orderForm.find("#postal-code").on("change", function () {
    //   const $postalCodeInput = $(this);

    //   $postalCodeInput.val($postalCodeInput.val().slice(0, 6));
    // });

    // $orderForm.find("#postal-code").on("keypress", function (e) {
    //   return !isNaN(parseInt(e.key)) && $(this).val().length < 6;
    // });

    // $("#create-order").click((e) => {
    //   if (isFormValid($orderForm)) {
    //     $orderForm.css("display", "none");
    //     $orderForm
    //       .prev("h2")
    //       .text("Спасибо за заказ. Мы свяжемся с вами в ближайшее время!");
    //   }

    //   $.ajax({
    //     type: "POST",
    //     url: "https://webhook.site/da4ec8c5-b2cd-4f8e-ab3c-26ce30070356",
    //     data: $("#create-order-form").serialize(),
    //     success: () => console.log("Order has been sent."),
    //   });

    //   e.preventDefault();
    // });
  }

  // function isFormValid($orderForm) {
  //   let isValid = true;
  //   $orderForm.find(".form-control").each(function () {
  //     const $control = $(this);
  //     if (!$control.val()) {
  //       alert(`Заполните поле "${$control.prev().text()}"`);
  //       isValid &&= false;
  //       return false;
  //     }

  //     if ($control.attr("id") === "postal-code" && $control.val().length !== 6) {
  //       alert(`Индекс должен содержать 6 символов`);
  //       isValid &&= false;
  //       return false;
  //     }

  //     isValid &&= true;
  //   });

  //   return isValid;
  // }


}
