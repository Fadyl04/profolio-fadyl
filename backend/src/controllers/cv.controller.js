import { generateCvPdf } from '../services/cv.service.js';

export function downloadCv(req, res, next) {
    try {
        const lang = req.query.lang === 'en' ? 'en' : 'fr';
        const doc = generateCvPdf(lang);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="BOURAIMA-Fadyl-CV-${lang}.pdf"`);
        doc.pipe(res);
        doc.end();
    } catch (error) {
        next(error);
    }
}