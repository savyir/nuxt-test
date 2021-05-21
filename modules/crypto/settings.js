export default {
  SEO: [
    {text: 'عنوان سایت', value: 'title', type: 'text'},
    {text: 'کلمات کلیدی سایت', value: 'keywords', type: 'keywords'},
    {text: 'توضیحات سایت', value: 'description', type: 'textarea'},
    {
      text: 'کلمات کلیدی دلخواه سایر صفحات',
      value: 'pages_keywords',
      type: 'crud',
      subType: 'keywords',
      help: 'در قسمت نام آدرس صفحه و در قسمت مقدار کلمه ی کلیدی را وارد کنید'
    },
    {
      text: 'توضیحات دلخواه سایر صفحات',
      value: 'pages_description',
      type: 'crud',
      subType: 'keywords',
      help: 'در قسمت نام آدرس صفحه و در قسمت مقدار توضیحات سئو را وارد کنید'
    },
    {
      text: 'عنوان دلخواه سایر صفحات',
      value: 'pages_title',
      type: 'crud',
      subType: 'keywords',
      help: 'در قسمت نام آدرس صفحه و در قسمت مقدار عنوان صفحه را وارد کنید'
    }
  ],
  APEARANCE: [
    {text: 'آیکون سایت', value: 'logo', type: 'photo'},
  ],
  GLOBAL: [
    {text: 'سایت فعال باشد؟', value: 'site_enabled', type: 'boolean'},
    {text: 'متن نمایش در صورت بسته بودن سایت', value: 'site_disabled_text', type: 'editor'},
    {text: 'ثبت نام فعال باشد؟', value: 'register_enabled', type: 'boolean'},
    {text: 'ورود فعال باشد؟', value: 'login_enabled', type: 'boolean'}
  ],
}
