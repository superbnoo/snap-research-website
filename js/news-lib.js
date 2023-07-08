const newsList = [
  {
    id: 0,
    date: "August 8, 2022",
    link: "../news.html",
    slug: "neroic-2022",
    title:
      "Snap Research creates a new way to digitize and render assets for Augmented Reality",
    descriptionShort:
      "Snap Research presents NeRoic (Neural Object Capture and Rendering from Online Image Collections), a new method that explores how to digitize and render objects more easily than ever before, at SIGGRAPH.",
    description: "../news/detail/neroic-2022.html",
    metaTitle:
      "Snap Research creates a new way to digitize and render assets for Augmented Reality",
    metaDescription: "Snap Research presents NeRoic (Neural Object Capture and Rendering from Online Image Collections), a new method that explores how to digitize and render objects more easily than ever before, at SIGGRAPH.",
  },
  {
    id: 1,
    date: "July 8, 2023",
    link: "../news.html",
    slug: "rethink-graph-2023",
    title:
      "Rethinking the role of Graph Neural Networks in Knowledge Graph Completion",
    descriptionShort:
      "Knowledge Graphs (KGs) are an efficient method to store relational and typically factual data (e.g. Freebase, NELL, and ConceptNet). They are used for various applications including search, recommendation, and question-answering systems.",
    description: "../news/detail/rethinking-gnns-2023.html",
    metaTitle:
      "Rethinking the role of Graph Neural Networks in Knowledge Graph Completion",
    metaDescription: "Knowledge Graphs (KGs) are an efficient method to store relational and typically factual data (e.g. Freebase, NELL, and ConceptNet). They are used for various applications including search, recommendation, and question-answering systems.",
  }
];

function getNews() {
  const tempNewsList = newsList.map((item) => {
    const tempItems = { ...item };
    tempItems.url = "news/news-one.html#" + tempItems.slug;
    return tempItems;
  });
  return tempNewsList.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getNewsBySlug(slug) {
  let result = newsList.filter((item) => slug.slice(1) === item.slug);
  return result;
}
