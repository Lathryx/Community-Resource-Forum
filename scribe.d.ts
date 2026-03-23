// declare module "scribe.js-ocr"; 

declare module "scribe.js-ocr" {
  interface OCRResult {
    text: string;
    confidence: number;
  }

  export function init(): void; 
  export function scribe(image: string): Promise<OCRResult>;
  export function extractText(image: string[]): Promise<OCRResult>;
}