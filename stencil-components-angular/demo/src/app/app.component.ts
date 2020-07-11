import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  disabled = false;

  onClick(event: Event): void {
    const htmlElement = event.target as HTMLElement;
    alert(`${htmlElement.innerText} has been clicked!`);
  }
}
