import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface MyResume {
  nom: string;
  contenu: string;
  dossier: string;
  tag: string;
}
@Component({
  selector: 'app-my-resume-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './my-resume-list.component.html',
  styleUrl: './my-resume-list.component.css',
})
export class MyResumeListComponent {
  displayedColumns: string[] = ['nom', 'contenu', 'dossier', 'tag'];
  dataSource: MyResume[] = [
    {
      nom: 'Document 1',
      contenu: 'Contenu 1',
      dossier: 'Dossier A',
      tag: 'Tag1',
    },
    {
      nom: 'Document 2',
      contenu: 'Contenu 2',
      dossier: 'Dossier B',
      tag: 'Tag2',
    },
    {
      nom: 'Document 3',
      contenu: 'Contenu 3',
      dossier: 'Dossier C',
      tag: 'Tag3',
    },
  ];
}
