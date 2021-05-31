<template>
  <vsp-blog-show-tag-list :articles="articles" :tags="tags"/>
</template>

<script>
  export default {
    data() {
      return {
        article: {},
        tag: {},
        tags: []
      }
    },
    layout: 'vspBlog',
    async asyncData({$content, params}) {
      const tags = await $content('tags')
        .where({slug: {$contains: params.tag}})
        .limit(1)
        .fetch()
      const tag = tags.length > 0 ? tags[0] : {}
      const articles = await $content('articles')
        .where({tags: {$contains: tag.name}})
        .sortBy('createdAt', 'asc')
        .fetch()
      return {
        tags,
        articles,
        tag
      }
    }
  }
</script>
