<template>
  <v-container class="text-center grey" style="margin-top: -80px;">
    <v-card rounded light class="pa-5">
      <vsp-reserve-item-list :items="items"/>
    </v-card>
  </v-container>
</template>
<script>
  const items = [
    {
      title: 'تور ویژه ترکیه',
      subTitle: 'تنها ۲۴ ساعت باقی مانده!',
      img: '/landing/img/hotels/slider/thumbs/img (1).jpg',
      stars: 5,
      fields: [
        {icon: "flag", title: 'عنوان اول', value: 'مقدار اول'},
        {icon: "star", title: 'عنوان دوم', value: 'مقدار دوم'},
        {icon: "check", title: 'عنوان سوم', value: 'مقدار سوم'},
        {icon: "money", title: 'عنوان چهارم', value: 'مقدار چهارم'},
      ],
      price: 150000,
      id: 45,
      to: '#savy'
    },
    {
      title: 'تور ویژه کیش',
      subTitle: 'تنها ۲۴ ساعت باقی مانده!',
      img: '/landing/img/hotels/slider/thumbs/img (2).jpg',
      stars: 5,
      fields: [
        {icon: "flag", title: 'عنوان اول', value: 'مقدار اول'},
        {icon: "star", title: 'عنوان دوم', value: 'مقدار دوم'},
        {icon: "check", title: 'عنوان سوم', value: 'مقدار سوم'},
        {icon: "money", title: 'عنوان چهارم', value: 'مقدار چهارم'},
      ],
      price: 150000,
      id: 45,
      to: '#savy'
    },
    {
      title: 'تور ویژه لهستان',
      subTitle: 'تنها ۲۴ ساعت باقی مانده!',
      img: '/landing/img/hotels/slider/thumbs/img (3).jpg',
      stars: 5,
      fields: [
        {icon: "flag", title: 'عنوان اول', value: 'مقدار اول'},
        {icon: "star", title: 'عنوان دوم', value: 'مقدار دوم'},
        {icon: "check", title: 'عنوان سوم', value: 'مقدار سوم'},
        {icon: "money", title: 'عنوان چهارم', value: 'مقدار چهارم'},
      ],
      price: 150000,
      id: 45,
      to: '#savy'
    },
    {
      title: 'تور ویژه تایلند',
      subTitle: 'تنها ۲۴ ساعت باقی مانده!',
      img: '/landing/img/hotels/slider/thumbs/img (4).jpg',
      stars: 5,
      fields: [
        {icon: "flag", title: 'عنوان اول', value: 'مقدار اول'},
        {icon: "star", title: 'عنوان دوم', value: 'مقدار دوم'},
        {icon: "check", title: 'عنوان سوم', value: 'مقدار سوم'},
        {icon: "money", title: 'عنوان چهارم', value: 'مقدار چهارم'},
      ],
      price: 150000,
      id: 45,
      to: '#savy'
    },
    {
      title: 'تور ویژه قطر',
      subTitle: 'تنها ۲۴ ساعت باقی مانده!',
      img: '/landing/img/hotels/slider/thumbs/img (5).jpg',
      stars: 5,
      fields: [
        {icon: "flag", title: 'عنوان اول', value: 'مقدار اول'},
        {icon: "star", title: 'عنوان دوم', value: 'مقدار دوم'},
        {icon: "check", title: 'عنوان سوم', value: 'مقدار سوم'},
        {icon: "money", title: 'عنوان چهارم', value: 'مقدار چهارم'},
      ],
      price: 150000,
      id: 45,
      to: '#savy'
    },
    {
      title: 'تور ویژه گرجستان',
      subTitle: 'تنها ۲۴ ساعت باقی مانده!',
      img: '/landing/img/hotels/slider/thumbs/img (6).jpg',
      stars: 5,
      fields: [
        {icon: "flag", title: 'عنوان اول', value: 'مقدار اول'},
        {icon: "star", title: 'عنوان دوم', value: 'مقدار دوم'},
        {icon: "check", title: 'عنوان سوم', value: 'مقدار سوم'},
        {icon: "money", title: 'عنوان چهارم', value: 'مقدار چهارم'},
      ],
      price: 150000,
      id: 45,
      to: '#savy'
    },
  ];
  export default {
    layout: 'vspSpring',
    data() {
      return {
        items,
      }
    },
    computed: {
      heads() {
        return [
          {
            title: '',
            icon: '',
            number: ''
          }
        ]
      }
    }
  }
</script>
