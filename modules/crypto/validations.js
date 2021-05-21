const validations = {
  // user validations
  isPhone:
    (v) => {
      let match = 11;
      return ((v || '').length == match && _.startsWith(v, '09')) ||
        `شماره همراه باید یازده رقم باشد`
    },
  /**
   * Passwords must be
   * - At least 8 characters long, max length anything
   * - Include at least 1 lowercase letter
   * - 1 capital letter
   * - 1 number
   * - 1 special character => !@#$%^&*
   */
  isPassword:
    (v) => {

      let strength = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(v);
      if (!strength) return 'رمز عبور باید شامل حداقل ۸ حرف، یک حرف بزرگ، یک حرف کوچک، یک علامت و یک عدد باشد'
      return true;
    }, checkPassword:
    (v) => {

      let strength = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(v);
      if (!strength) return 'رمز عبور صحیح نمی باشد'
      return true;
    }, isCode:
    (v) => {
      let match = 6;
      return (v || '').length == match ||
        `کد تایید را کامل وارد کنید`
    }, isNumber: v => (!isNaN(v)) || 'ورودی باید شماره باشد'

}


export default validations;
