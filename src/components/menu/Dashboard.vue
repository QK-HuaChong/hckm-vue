<template>
  <div sidebar-hide>
    <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
      <div class="nano">
        <div class="nano-content active" style="">
          <ul class="d-block">
            <tab-bar>
              <tab-bar-item titleName="购物" :childrenItem="children"
              ></tab-bar-item>
            </tab-bar>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";

export default {
  name: "Dashboard",
  data() {
    return {
      children: ["A", "B", "C"],
    };
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style scoped>
@import "../../assets/css/menuber/sidebar.css";
</style>