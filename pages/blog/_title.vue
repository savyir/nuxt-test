<template>
  <div>
    <vsp-blog-show-content
      :article="article" :tags="tags" :next="next" :prev="prev"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        article: {},
        tags: [],
        prev: undefined,
        next: undefined
      }
    },
    async asyncData({$content, params}) {
      try {
        const article = await $content('articles', params.title).fetch()
        const tagsList = await $content('tags')
          .only(['name', 'slug'])
          .where({name: {$containsAny: article.tags}})
          .fetch()
        const tags = Object.assign({}, ...tagsList.map((s) => ({[s.name]: s})))
        const [prev, next] = await $content('articles')
          .only(['title', 'slug'])
          .sortBy('createdAt', 'asc')
          .surround(params.title)
          .fetch()
        return {
          article,
          tags,
          prev,
          next
        }
      } catch (e) {
        console.error({e})
      }
    },
    methods: {
      formatDate(date) {
        const options = {year: 'numeric', month: 'long', day: 'numeric'}
        return new Date(date).toLocaleDateString('en', options)
      }
    },
    layout: 'vspBlog'
  }
</script>
