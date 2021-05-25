<template>
  <vsp-blog-show-list
    :articles="articles"
    :tags="tags"
  />
</template>
<script>
  export default {
    layout: 'vspBlog',
    async asyncData({$content, params}) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'desc')
        .limit(10)
        .fetch()
      const tags = await $content('tags', params.slug)
        .only(['name', 'description', 'img', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()
      return {
        articles,
        tags
      }
    },
    data() {
      return {
        articles: [],
        tags: []
      }
    }
  }
</script>

<style class="postcss">
  .article-card {
    border-radius: 8px;
  }

  .article-card a {
    background-color: #fff;
    border-radius: 8px;
  }

  .article-card img div {
    border-radius: 8px 0 0 8px;
  }
</style>
