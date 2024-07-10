import { Component, inject, Inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-resume-list',
  standalone: true,
  imports: [MatTableModule, MatDialogModule],
  templateUrl: './resume-list.component.html',
  styleUrl: './resume-list.component.css',
})
export class ResumeListComponent {
  displayedColumns: string[] = ['nom', 'contenu'];
  dataSource: { id: number; name: string; content: string }[];

  private dialog = inject(MatDialog);
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.dataSource = data.resumes;
  }

  openResumeDetail(row: any): void {
    this.dialog.open(ResumeComponent, {
      minWidth: '60vw',
      minHeight: '60vh',
      data: { resume: row },
    });
  }
}
