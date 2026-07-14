import { Component, ElementRef, OnInit, output, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-captcha',
  imports: [FormsModule],
  templateUrl: './text-captcha.html',
  styleUrl: './text-captcha.css',
})
export class TextCaptchaComponent implements OnInit {
  @ViewChild('captchaCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  
  // Output event to tell the login form if the captcha is valid
  captchaValid = output<boolean>();

  generatedText = '';
  userInput = signal('');

  ngOnInit() {
    this.generateNewCaptcha();
  }

  generateNewCaptcha() {
    this.userInput.set('');
    this.captchaValid.emit(false);
    
    // 1. Generate random 6-character alphanumeric string
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    this.generatedText = Array.from({ length: 6 }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
    
    this.drawCaptcha();
  }

  drawCaptcha() {
    const ctx = this.canvas.nativeElement.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, 180, 50);

    // Background styling
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, 180, 50);

    // Add noise lines to confuse basic OCR bots
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.4)`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * 180, Math.random() * 50);
      ctx.lineTo(Math.random() * 180, Math.random() * 50);
      ctx.stroke();
    }

    // Render the text with slight rotation distortions
    ctx.font = 'bold 26px serif';
    ctx.textBaseline = 'middle';
    
    for (let i = 0; i < this.generatedText.length; i++) {
      ctx.fillStyle = `rgb(${Math.random() * 150},${Math.random() * 150},${Math.random() * 150})`;
      ctx.save();
      // Space characters across the canvas width
      ctx.translate(20 + i * 25, 25);
      // Random rotation between -15 and +15 degrees
      ctx.rotate((Math.random() * 30 - 15) * Math.PI / 180);
      ctx.fillText(this.generatedText[i], 0, 0);
      ctx.restore();
    }
  }

  // Check the text on every keystroke
  onUserInputChange(value: string) {
    this.userInput.set(value);
    // Emits true if it matches exactly
    this.captchaValid.emit(value === this.generatedText);
  }
}
