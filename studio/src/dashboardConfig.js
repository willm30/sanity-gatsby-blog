export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61f955cb8bfcd5fc0278b7a9",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-iicyenvw",
                  apiId: "2c00d89f-e6cd-4741-babb-6e238cdca7a8",
                },
                {
                  buildHookId: "61f955cbe5010e0c3cfb701c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-9dzzw5wo",
                  apiId: "761bb64d-b060-40d2-9bbe-c12167f9c4bb",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/willm30/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-9dzzw5wo.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
