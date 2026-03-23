import scribe from 'scribe.js-ocr'; 

export async function ocr(image: string): Promise<string> {
  try {
    scribe.init(); 
    
    const result = await scribe.extractText([image]);
    console.log(`OCR RESULT:\n========\n${JSON.stringify(result)}\n========`); 
    return result.text;
    // return "worked"; 
  } catch (error) {
    console.error('OCR ERROR:\n', error);
    throw new Error('Failed to perform OCR on the image.');
  }
}

// export async function testOCR(image: string) {
//   try {
//     scribe.init(); 
    
//     const result = await scribe.extractText([image]);
//     console.log('Test OCR result:', result);
//   } catch (error) {
//     console.error('Test OCR error:', error);
//   }
// }

// testOCR('https://tesseract.projectnaptha.com/img/eng_bw.png'); 