import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface Folder {
  name: string;
  tag: string;
}

@Component({
  selector: 'app-folder-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './folder-list.component.html',
  styleUrl: './folder-list.component.css',
})
export class FolderListComponent {
  displayedColumns: string[] = ['nom', 'tag'];
  dataSource: Folder[] = [
    {
      name: 'Dossier A',
      tag: 'Tag vert',
    },
    {
      name: 'Dossier B',
      tag: 'Tag bleu',
    },
    {
      name: 'Dossier C',
      tag: 'Tag vert',
    },
    {
      name: 'Dossier D',
      tag: 'Tag jaune',
    },
  ];
}
