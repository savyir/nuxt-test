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
      let article, tags;
      try {
        try {
          article = await $content('products', params.slug).fetch()
          const tagsList = await $content('tags')
            .only(['name', 'slug'])
            .where({name: {$containsAny: article.tags}})
            .fetch()
          tags = Object.assign({}, ...tagsList.map((s) => ({[s.name]: s})))
        } catch (e) {
          console.error('content',{e})
        }

        let url = `/products/?slug=${params.slug}`;
        let item = await $axios.$get(url).catch(err => {
          console.error('axios',{err});
        }).then(res => res[0]).then(async res => {
          Object.assign(res, res.meta)
          res.img = vsp.API_URL + res.image.url;
          try {
            if (_.get(res, 'installs', false)) res.downloads = await $axios.$get(res.installs).then(npm => npm.downloads || 1000);
          } catch (e) {
            console.error('npm',{e})
          }
          res.price = res.price > 0 ? res.price : 'free (open-source)';
          return res;
        })

        // console.log({item})
        return {
          item,
          article,
          tags
        };
      } catch (e) {
        console.error('async',{e})
      }

    },
    created() {
      this._ = _;
    },
    jsonld() {
      try {
        return {
          '@context': 'https://schema.org',
          '@type': 'Product',
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": _.get(this.item, 'downloads', 11)
          },
          name: _.get(this.item,'title',''),
          image: this.vsp.API_URL + _.get(this.item, 'image.url', ''),
          "description": _.get(this.item, 'subtitle', '') + ' - ' + _.get(this.item, 'description', this.article || ''),
          // review: {}
        };
      } catch (e) {
        console.error('jsonLD',{e})
      }
    },
    layout: 'vspReservationItem'
  }
</script>
