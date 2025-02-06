import { AuthService } from '@/entities/auth/model/auth.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-inbox-sidebar',
  imports: [],
  templateUrl: './inbox-sidebar.component.html',
  styleUrl: './inbox-sidebar.component.scss',
})
export class InboxSidebarComponent {
  private authService = inject(AuthService);

  public user = localStorage.getItem('user');

  public signOut() {
    this.authService.signOut();
  }
}
