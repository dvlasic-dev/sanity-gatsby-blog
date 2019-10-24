export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db1bcb5875c217c94c1e7e1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xrv83u6p',
                  apiId: '5067e8fb-bcba-46b7-8549-3e135715643c'
                },
                {
                  buildHookId: '5db1bcb53ba646a0c1806948',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-q47mcvct',
                  apiId: '6918a267-2ea4-412d-a907-b29c075d1a18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dvlasic-dev/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-q47mcvct.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
