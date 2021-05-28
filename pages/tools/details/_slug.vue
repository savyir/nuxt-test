<template>
  <div>
    <vsp-reserve-item-page :tags="tags" :article="article" :item="item"/>
  </div>
</template>
<script>
  import _ from 'lodash'

  export default {
    data() {
      return {
        item: {},
        tags: [],
        article: undefined
      }
    },
    async asyncData({$axios, $content, params, vsp}) {
      try {
        let article, tags;
        try {
          article = await $content('products', params.slug).fetch()
          const tagsList = await $content('tags')
            .only(['name', 'slug'])
            .where({name: {$containsAny: article.tags}})
            .fetch()
          tags = Object.assign({}, ...tagsList.map((s) => ({[s.name]: s})))
        } catch (e) {
          console.error({e})
        }

        let url = `/products/?slug=${params.slug}`;
        let item = await $axios.$get(url).catch(err => {
          console.error({err});
        }).then(res => res[0]).then(async res => {
          Object.assign(res, res.meta)
          res.img = vsp.API_URL + res.image.url;
          try {
            if (_.get(res, 'installs', false)) res.downloads = await $axios.$get(res.installs).then(npm => npm.downloads || 1000);
          } catch (e) {
            console.error({e})
          }
          res.price = res.price > 0 ? res.price : 'free (open-source)';
          return res;
        })

        console.log({item})
        return {
          item,
          article,
          tags
        };
      } catch (e) {
        console.error({e})
      }

    },
    created() {
      this._ = _;
    },
    layout: 'vspReservationItem'
  }
</script>
