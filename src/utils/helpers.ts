export const getSearchParams = () => {
  if (!isClient()) return new URLSearchParams();

  return new URLSearchParams(window.location.search);
};

export const isClient = () => typeof window !== 'undefined';

export const getPageValue = (page: string | number | null) => {
  const parsedPage = Number(page);
  if (!page && isNaN(parsedPage)) return undefined;

  return parsedPage > 1 ? parsedPage : undefined;
};
