const linkTitle: { [key: string]: string } = {
  category: "Разделы",
  categories: "Разделы",
  about: "О проекте",
  feedback: "Связаться с нами",
  search: "Результаты поиска",
};
export const gеtLinkTitle = (
  i: number,
  navigationPage: string,
  categoryTitle: string
) => {
  let result = "Главная";
  switch (i) {
    case 1:
      result = linkTitle[navigationPage];
      break;
    case 2:
      result = categoryTitle;
  }
  return result;
};
export const getLinkPatch = (
  i: number,
  navigationPage: string,
  pathname: string
) => {
  let result = "/";
  const match = pathname
    ? pathname.match(new RegExp(`.*${navigationPage}`))
    : null;
  if (i) {
    result = match ? match[0] : "/";
  }
  if (i === 1 && navigationPage === "category") {
    result = "/categories";
  }
  return result;
};
