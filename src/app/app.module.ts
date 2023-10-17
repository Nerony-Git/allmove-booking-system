import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './header/profile/profile.component';
import { SearchComponent } from './header/search/search.component';
import { SidenavComponent } from './sidebar/sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreadcrumbHomeComponent } from './dashboard/breadcrumb-home/breadcrumb-home.component';
import { NotificaionComponent } from './header/notificaion/notificaion.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingsdataComponent } from './bookings/bookingsdata/bookingsdata.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { BreadcrumbProfileComponent } from './profile-page/breadcrumb-profile/breadcrumb-profile.component';
import { ProfileSectionComponent } from './profile-page/profile-section/profile-section.component';
import { ProfileOverviewComponent } from './profile-page/profile-overview/profile-overview.component';
import { ProfileInformationEdirComponent } from './profile-page/profile-information-edir/profile-information-edir.component';
import { ProfileAccountInformationComponent } from './profile-page/profile-account-information/profile-account-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    SearchComponent,
    SidebarComponent,
    SidenavComponent,
    FooterComponent,
    DashboardComponent,
    BreadcrumbHomeComponent,
    NotificaionComponent,
    BookingsComponent,
    BookingsdataComponent,
    ProfilePageComponent,
    BreadcrumbProfileComponent,
    ProfileSectionComponent,
    ProfileOverviewComponent,
    ProfileInformationEdirComponent,
    ProfileAccountInformationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
