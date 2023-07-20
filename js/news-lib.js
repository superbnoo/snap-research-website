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
    postedBy: "posted by <a href=\"https://research.snap.com/team/team-member.html#neil-shah\">Neil Shah</a>, co-authored with <a href=\"https://juanhui28.github.io/\">Juanhui Li</a>, <a href=\"https://www.cse.msu.edu/~shomerha/\">Harry Shomer</a>, <a href=\"https://yaoma24.github.io/\">Yao Ma</a> and <a href=\"https://www.cse.msu.edu/~tangjili/\">Jiliang Tang</a>",
    title:
      "Rethinking the role of Graph Neural Networks in Knowledge Graph Completion",
    descriptionShort:
      "We present surprising findings at ACL 2023, exploring previously misunderstood limitations of graph neural networks on knowledge graph completion tasks.",
    description: "../news/detail/rethinking-gnns-2023.html",
    metaTitle:
      "Rethinking the role of Graph Neural Networks in Knowledge Graph Completion",
    metaDescription: "We present surprising findings at ACL 2023, exploring previously misunderstood limitations of graph neural networks on knowledge graph completion tasks.",
  },
  {
    id: 2,
    date: "July 20, 2023",
    link: "../news.html",
    slug: "accelerating-graph-2023",
    postedBy: "posted by <a href=\"https://research.snap.com/team/team-member.html#neil-shah\">Neil Shah</a>, co-authored with <a href=\"https://shiao.me/\">William Shiao</a>, <a href=\"https://scholar.google.com/citations?user=oQRhhVQAAAAJ&amp;hl=en\">Uday Singh</a>, <br/><a href=\"https://tzhao.io/\">Tong Zhao</a>, <a href=\"https://scholar.google.com/citations?user=i3U2JjEAAAAJ&amp;hl=en\">Yozen Liu</a> and <a href=\"https://www.cs.ucr.edu/~epapalex/\">Vagelis Papalexakis</a>",
    title:
      "Accelerating Graph Self-Supervised Learning with Clustering",
    descriptionShort:
      "We discuss our work accepted to KDD 2023, which shows that using clustering-inspired losses for graph self-supervised learning yields performant representations which significantly accelerating training speed.",
    description: "../news/detail/accelerating-graph-2023.html",
    metaTitle:
      "Accelerating Graph Self-Supervised Learning with Clustering",
    metaDescription: "We discuss our work accepted to KDD 2023, which shows that using clustering-inspired losses for graph self-supervised learning yields performant representations which significantly accelerating training speed.",
  },
  {
    id: 3,
    date: "July 20, 2023",
    link: "../news.html",
    slug: "accelerating-link-2023",
    postedBy: "posted by <a href=\"https://tzhao.io/\">Tong Zhao</a>, co-authored with <a href=\"https://zguo.io/\">Zhichun Guo</a>, <a href=\"https://shiao.me/\">William Shiao</a>, <br/><a href=\"https://shichangzh.github.io/\">Shichang Zhang</a>, <a href=\"https://scholar.google.com/citations?user=i3U2JjEAAAAJ&amp;hl=en\">Yozen Liu</a>, <a href=\"https://niteshchawla.nd.edu/bio/\">Nitesh V. Chawla</a> and <a href=\"https://research.snap.com/team/team-member.html#neil-shah\">Neil Shah</a>",
    title:
      "Accelerating Link Prediction Inference with Knowledge Distillation",
    descriptionShort:
      "We show how to leverage relational distillation to train MLP models which can in many cases match or even outperform GNNs on link prediction tasks, in our work at ICML 2023.",
    description: "../news/detail/accelerating-link-2023.html",
    metaTitle:
      "Accelerating Link Prediction Inference with Knowledge Distillation",
    metaDescription: "We show how to leverage relational distillation to train MLP models which can in many cases match or even outperform GNNs on link prediction tasks, in our work at ICML 2023.",
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
