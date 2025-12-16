/**
 * Generate a unique ticket ID
 * Format: DB-{campaignId}-{6 digit random number}
 * Example: DB-1-834921
 */
export const generateTicketId = (campaignId) => {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `DB-${campaignId}-${random}`;
};
