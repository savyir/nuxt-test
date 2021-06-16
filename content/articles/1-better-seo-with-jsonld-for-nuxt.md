---
title: better SEO in nuxtjs - part 1,  using jsonld
description: strong point of the nuxt is SSR that makes nuxt an excellent option for front-end developers. in this article we want to introduce basic usage of google schema and using it in nuxt pgaes using 'nuxt-jsonld' package.
img: https://images.unsplash.com/photo-1588065394015-68bf7e40738d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80
alt: Article 10
author: 
  name: savy
  bio: I am Ehsan, a javascript web developer who has worked in web development since 2010. I started with PHP and Joomla, pass through Laravel, and currently working on javascript frontend and backend.
  img: /ehsan-afshari.jpg
tags: 
  - nuxtjs
  - seo
  - jsonld
  - web development
---

_“Search engine marketing and search engine optimization are critically important to online businesses. You can spend every penny you have on a website, but it will all be for nothing if nobody knows your site is there.” — Marc Ostrofsky_

### beginning of a new web site
starting a new web site and providing new content can seem like a daunting task. few things are tougher than the prospect of starting from ground zero. moreover, depending on what type of content you need, it might seem difficult to align yourself into the slipstream of the traffic flow.

### get used to it
when tackling a new website, developers often have the urge to take it all down at end. However, as the saying goes , "the best way to eat an elephant is one bite at a time." like anything else, improving the SEO of a website takes time. more than anything though, it helps to start small and work your way up. 

so while your ultimate goal may be to stand in google rank #1 , try to work on main and essential pages first. when you take care of the basics, you'd be surprised how many of the big goals accomplish themselves.

that said, if you're starting from scratch, it will take significant work to get to that point. you'll find though, that it might be difficult in the beginning, as you start to gain experience, your inbound marketing  will begin to compound upon itself. past a point, when all the foundation are established, new, high-quality users will naturally seem to flow into your website. that is the goal, so keep your eyes on the prize, and let's get get started!

## get to know the external tools
it is a good idea to familiarize yourself with a group of tools to measure and control the SEO of your site. while you may not necessarily be learning every tools around, being able to work with some tools does a number of things for you.

1- [seobility](https://www.seobility.net/en/seocheck) or [geometrix](https://www.geometrix.com): these tools are free and give you most important notes for improving web page SEO. 

![seobility](/articles/seobility.png)



2- [google rich result test (schema)](https://search.google.com/test/rich-results?utm_campaign=devsite&utm_medium=jsonld): probably most important tool for online shops, blogs and video services. with this tool you can check google schema of a page.

![google schema](/articles/google-schema.png)
 


## jsonld
while your journey to building inbound marketing may start with good content, you will invariably need to create schemas. Google uses structured data to understand content. when you build a page to introduce a product you should fully markup that page with the right schema. 

So how do you do it? It’s simple: create your nuxt blog, install [nuxt-jsonld](https://www.npmjs.com/package/nuxt-jsonld), write your article, and start using [article schema](https://developers.google.com/search/docs/data-types/article) on your blog page. 

```js
import _ from 'lodash'
export default {
...
	props: ['article'],
	jsonld() {
      try {
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "datePublished": _.get(this.article, "updatedAt") || "",
          "description": _.get(this.article, "description") || "",
          "articleBody": _.get(this.article, "body") || "",
          "author": _.get(this.article, "author.name") || "",
          "name": _.get(this.article, "title") || ''
        }
      } catch (e) {
         console.error('jsonld error:', e)
      }
    }
...
}
```

<br />
what about lists (table of contents, list of products, etc)? use the [breadcrumb schema](https://developers.google.com/search/docs/data-types/breadcrumb) to address each page. set url of page for `item` property.


```js
import _ from 'lodash'
const BASE_URL=  'https://savyjs.com';
export default {
...
	props: ['articles'],
	jsonld() {
      try {
        let jsonld = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": []
        };
        let i = 1;
        for (let article of this.articles) {
          jsonld['itemListElement'].push({
            "@type": "ListItem",
            "position": i++,
            "name": article.title,
            "item": BASE_URL + '/blog/' + article.slug
          });
        }
        return jsonld;
      } catch (error) {
        console.error(error)
      }
    },
... 
}
```

most of the google users will finding it easier to click on a well defined product on search result page. make pages marked up using proper schema and test them constantly. a core with one schema per page is ideal. 
