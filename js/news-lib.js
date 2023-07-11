const newsList = [
  {
    id: 0,
    date: "August 8, 2022",
    link: "../news.html",
    slug: "neroic-2022",
    postedBy: "",
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
    postedBy: "posted by <a href=\"https://research.snap.com/team/team-member.html#neil-shah\">Neil Shah</a>",
    title:
      "Rethinking the role of Graph Neural Networks in Knowledge Graph Completion",
    descriptionShort:
      "We present surprising findings at ACL 2023, exploring previously misunderstood limitations of graph neural networks on knowledge graph completion tasks.",
    description: "../news/detail/rethinking-gnns-2023.html",
    metaTitle:
      "Rethinking the role of Graph Neural Networks in Knowledge Graph Completion",
    metaDescription: "We present surprising findings at ACL 2023, exploring previously misunderstood limitations of graph neural networks on knowledge graph completion tasks.",
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
