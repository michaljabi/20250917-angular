import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGavel,
  faPlus,
  faShoppingBasket,
  faUser,
  faSearch,
  faCartPlus,
  faEdit,
  faTag,
  faImage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NotificationComponent } from './notification/notification.component';
import { FormsModule } from '@angular/forms';
import { PageLayoutComponent } from './page-layout/page-layout.component';

@NgModule({
  declarations: [SearchBarComponent, NotificationComponent, PageLayoutComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: [FontAwesomeModule, SearchBarComponent, NotificationComponent, PageLayoutComponent],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGavel,
      faPlus,
      faShoppingBasket,
      faUser,
      faSearch,
      faCartPlus,
      faEdit,
      faTag,
      faImage
    );
  }
}
