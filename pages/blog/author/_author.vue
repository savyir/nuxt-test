<template>
  <vsp-blog-author-page :articles="articles" />
</template>
<script>
  export default {
    data() {
      return {
        articles: []
      }
    },
    async asyncData({$content, params}) {
      try {
        const articles = await $content('articles')
          .where({
            'author.name': {
              $regex: [params.author, 'i']
            }
          })
          .without('body')
          .sortBy('createdAt', 'asc')
          .fetch()
        return {
          articles
        }
      } catch (e) {
        console.error({e})
      }
    },
    layout: 'vspBlog'
  }
</script>
