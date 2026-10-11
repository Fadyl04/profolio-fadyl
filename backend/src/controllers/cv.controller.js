import { generateCvPdf } from '../services/cv.service.js';

export function downloadCv(req, res, next) {
    console.log('========== TÉLÉCHARGEMENT DU CV : DÉBUT ==========');

    console.log('📥 Requête reçue :', req.method, req.originalUrl);
    console.log('🌐 Paramètres de la requête :', req.query);
    console.log('🌍 Langue demandée :', req.query.lang);

    try {
        const lang = req.query.lang === 'en' ? 'en' : 'fr';

        console.log('✅ Langue sélectionnée :', lang);

        console.log('📄 Génération du PDF en cours...');
        const doc = generateCvPdf(lang);

        console.log('✅ Document PDF généré.');
        console.log('📦 Type de document :', doc.constructor.name);

        const filename = `BOURAIMA-Fadyl-CV-${lang}.pdf`;

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader(
            'Content-Disposition',
            `attachment; filename="${filename}"`
        );

        console.log('📌 Content-Type : application/pdf');
        console.log('📌 Nom du fichier :', filename);

        doc.on('error', (error) => {
            console.error('❌ Erreur pendant la génération ou l’envoi du PDF :', error);

            if (!res.headersSent) {
                next(error);
            } else {
                res.destroy(error);
            }
        });

        res.on('finish', () => {
            console.log('✅ Réponse HTTP terminée.');
            console.log('📊 Statut HTTP :', res.statusCode);
            console.log('📄 Fichier envoyé :', filename);
            console.log('========== TÉLÉCHARGEMENT DU CV : FIN ==========');
        });

        res.on('close', () => {
            if (!res.writableFinished) {
                console.warn('⚠️ Connexion fermée avant la fin de l’envoi du PDF.');
            }
        });

        console.log('🚀 Envoi du PDF au navigateur...');

        doc.pipe(res);
        doc.end();

    } catch (error) {
        console.error('❌ Erreur dans downloadCv() :', error);
        console.error('📌 Message :', error.message);
        console.error('📚 Stack trace :', error.stack);

        if (res.headersSent) {
            res.destroy(error);
            return;
        }

        next(error);
    }
}