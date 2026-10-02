export function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({ success: false, message: "Une erreur est survenue lors de l'envoi du message." });
}