import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ResumeService } from '../../services/resume.service';

export interface MyResume {
  id: number;
  name: string;
  content: string;
}

@Component({
  selector: 'app-my-resume-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './my-resume-list.component.html',
  styleUrl: './my-resume-list.component.css',
})
export class MyResumeListComponent implements OnInit {
  displayedColumns: string[] = ['nom', 'contenu', 'dossier', 'tag'];
  private resumeService = inject(ResumeService);
  dataSource: MyResume[] = [];
  // dataSource: MyResume[] = [
  //   {
  //     name: 'Document 1',
  //     contenu: 'Contenu 1',
  //     dossier: 'Dossier A',
  //     tag: 'Tag1',
  //   },
  //   {
  //     name: 'Document 2',
  //     contenu: 'Contenu 2',
  //     dossier: 'Dossier B',
  //     tag: 'Tag2',
  //   },
  //   {
  //     name: 'Document 3',
  //     contenu: 'Contenu 3',
  //     dossier: 'Dossier C',
  //     tag: 'Tag3',
  //   },
  // ];

  ngOnInit(): void {
    this.loadMyResume();
  }

  loadMyResume() {
    const idUtilisateur = 1;
    this.resumeService.getResumeOfFolder(idUtilisateur).subscribe({
      next: (data: MyResume[]) => {
        this.dataSource = data;
      },
      error: (error) => {
        console.error('Error fetching resume:', error);
      },
    });
    // this.resumeService.getFolders(idUtilisateur).subscribe({
    //   next: (data: Folder[]) => {
    //     this.dataSource = data;
    //   },
    //   error: (error) => {
    //     console.error('Error fetching folders:', error);
    //   },
    // });
  }
}
