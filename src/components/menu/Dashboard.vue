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
    <head-layout></head-layout>
  </div>
</template>
<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
import HeadLayout from "../layout/HeadLayout";

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
    HeadLayout,
  },
};
</script>
<style scoped>

</style>