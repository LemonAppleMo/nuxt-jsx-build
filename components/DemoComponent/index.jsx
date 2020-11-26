import Vue from "vue";
import style from "./style.css?module";

export default Vue.extend({
  render() {
    return <div class={style.demoWrap}>
      demo componoent
    </div>;
  }
});
