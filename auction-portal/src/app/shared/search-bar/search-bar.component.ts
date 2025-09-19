import { Component, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  template: `
    <div class="input-group mb-3 w-100">
      <div class="input-group-prepend" (click)="myInput.focus()">
        <span class="input-group-text">
          <fa-icon icon="search" />
        </span>
      </div>
      <input
        #myInput
        type="text"
        name="title"
        class="form-control"
        [(ngModel)]="searchValue"
        (input)="handleUpdate()"
      />
    </div>
  `,
  styles: ``,
})
export class SearchBarComponent {
  searchValue = '';
  search = output<string>();

  handleUpdate() {
    this.search.emit(this.searchValue);
  }
}
