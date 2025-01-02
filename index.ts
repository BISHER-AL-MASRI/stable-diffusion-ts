import axios from 'axios';
import fs from 'fs';
import path from 'path';

const API_URL = 'https://stablediffusion-two.vercel.app/generate-image';

export function generate(prompta: String, cb: (result: any) => void, file_path?: string,) {
    let prompt = prompta;
    if (prompt.endsWith('{enhanced}')) {
        prompt = prompt.replace('{enhanced}', "realistic, smoothening, epic cinematic lighting, dark villanous looking background.");
    }

    const generateImage = async () => {
        try {
            const response = await axios.post(API_URL, { prompt }, { responseType: 'arraybuffer' });
            
            if (response.status === 200) {
                if (file_path) {
                    const filePath = path.join(file_path, 'generated_image.png');
                    fs.writeFileSync(filePath, response.data, 'binary');
                } else {
                    const currentDir = process.cwd();
                    const filePath = path.join(currentDir, 'generated_image.png');
                    fs.writeFileSync(filePath, response.data, 'binary');
                }
            } else {
                console.log(`Error: ${response.status} - ${response.statusText}`);
                cb({ error: true });
            }
        } catch (error) {
            console.error('Error generating image:', error);
            cb({ error: true });
        }
    };

    generateImage();
}