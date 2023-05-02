import { surpriseMePrompts } from '../constants';
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt) {
  // Get random index
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  // Get random prompt with the randomIndex
  const randomPrompt = surpriseMePrompts[randomIndex];
  // If the prompt is the same and the previous, try again
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
