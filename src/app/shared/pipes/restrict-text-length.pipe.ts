import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "restrictTextLength",
})
export class RestrictTextLengthPipe implements PipeTransform {
  transform(value: string, maxLength: number = 200): string {
    if (!value) {
      return "";
    }

    return value.length < maxLength
      ? value
      : value.substring(0, maxLength) + "...";
  }
}
