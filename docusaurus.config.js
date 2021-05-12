/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Furnitrace Docs",
  tagline: "Capstone Project Docs",
  url: "https://caps007docs.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "globallogic", // Usually your GitHub org/user name.
  projectName: "furnitrace-documentation", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Furnitrace Docs",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Requirements",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://gitlab-gl.stackroute.in/team007",
          label: "Gitlab",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Requriements",
              to: "/docs/intro",
            },
          ],
        },

        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              href: "https://gitlab-gl.stackroute.in/team007",
              label: "Gitlab",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Furnitrace, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
