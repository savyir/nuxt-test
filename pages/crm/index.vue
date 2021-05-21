<template>
  <div>
    <vsp-dashboard-box :items="items" />
  </div>
</template>
<script>

  const items = [
    {
      type: 'handy',
      title: 'multicast',
      icon: 'fa-globe',
      secondIcon: 'fa-plus',
      color: 'purple',
      componentName: 'FastCast',
      emit: 'emitting',
      to: '/admin/media/podcast/create'
    },
    {title: 'savefile', icon: 'fa-save', secondIcon: 'fa-youtube', color: 'yellow darken-1'},
    {title: 'sendtoblog', icon: 'fa-vcard-o', secondIcon: 'fa-papernews-o', color: 'success'},
    {title: 'sendtoyoutube', icon: 'fa-youtube', secondIcon: 'fa-youtube', color: 'error'},
    {title: 'sendtoaparat', icon: 'fa-video-camera', secondIcon: 'fa-video', color: 'error darken-3'},
    {title: 'sendtotelegram', icon: 'fa-telegram', secondIcon: 'fa-plus', color: 'info'},
    {title: 'sendtolinkedin', icon: 'fa-linkedin', secondIcon: 'fa-plus', color: 'blue'},
    {title: 'sendtoinstagram', icon: 'fa-instagram', secondIcon: 'fa-plus', color: 'pink lighten-1'},
    {title: 'sendtofacebook', icon: 'fa-facebook', secondIcon: 'fa-plus', color: 'blue'},
    {title: 'sendtogoogle', icon: 'fa-google', secondIcon: 'fa-plus', color: 'yellow darken-2'},
    {title: 'sendtopinterest', icon: 'fa-pinterest', secondIcon: 'fa-plus', color: 'error'},
    {title: 'sendtorss', icon: 'fa-rss', secondIcon: 'fa-plus', color: 'warning'},
  ];
  export default {
    data() {
      return {
        items
      }
    }
  }
</script>
