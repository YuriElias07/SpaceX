export const formatDate = (isoString: string) => {
  if (!isoString) return "Data desconhecida";

  return new Date(isoString).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
