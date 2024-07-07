import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PDFDocument } from 'pdf-lib';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-upload-ia',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './upload-ia.component.html',
  styleUrl: './upload-ia.component.css',
})
export class UploadIaComponent {
  textInput: string = '';

  private readonly resumeService = inject(ResumeService);

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
  }

  async onFileDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf') {
        const text = await this.extractTextFromPDF(file);
        this.sendTextToService(text, 'Some instructions');
      }
    }
  }

  async onFileClick(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type === 'application/pdf') {
        const text = await this.extractTextFromPDF(file);
        this.sendTextToService(text, 'Some instructions');
      }
    }
  }

  async extractTextFromPDF(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    let text = '';
    for (const page of pdfDoc.getPages()) {
      // text += await page.getTextContent();
    }
    return text;
  }

  onEnter() {
    const instructions = 'Some instructions'; // You can customize this as needed
    this.sendTextToService(this.textInput, instructions);
  }

  sendTextToService(prompt: string, instructions: string) {
    this.resumeService.sendText(prompt, instructions).subscribe(
      (response) => {
        console.log('Text sent to service successfully:', response);
      },
      (error) => {
        console.error('Error sending text to service:', error);
      }
    );
  }
}
