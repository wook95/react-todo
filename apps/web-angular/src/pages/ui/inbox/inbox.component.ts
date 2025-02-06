import { Component } from '@angular/core';
import { InboxSidebarComponent } from '@/widgets/inbox-sidebar/ui';

@Component({
  selector: 'app-inbox',
  imports: [InboxSidebarComponent],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss',
})
export class InboxComponent {}
