import express, { Request, Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

/**
 * Function to populate a Map with logo file paths
 * @param logosPath - The directory path containing the logo SVG files
 * @returns A Map with organization names as keys and file paths as values
 */

type LogoMap = Map<string, string>;

const logosPath = `../../../client/public/images/logos`

const __fileName = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__fileName)

function fillLogoMap (logosPath: string) {
    const logoMap: LogoMap = new Map<string, string>();

    const svgFiles = fs.readdirSync(logosPath)

    svgFiles.forEach((file: string) => {

        if(path.extname(file) === '.svg') {

            const publication = path.basename(file, '.svg');

            const svgPath = `../../public/images/logos/${file}`

            logoMap.set(publication, svgPath)
        }
    })

    return logoMap
}


const logosDirectory = path.resolve(__dirname, logosPath) 

const logoMap = fillLogoMap(logosDirectory)

export { logoMap }

export const getLogoMap = (req: Request, res: Response) => {

    res.send(Object.fromEntries(logoMap))
}






