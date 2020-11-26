<template>
  <div sidebar-hide>
    <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
      <div class="nano">
        <div class="nano-content active" style="">
          <ul class="d-block">
            <tab-bar>
              <tab-bar-item :titleName="userName" :childrenItem="children"
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

import {request} from "@/network/request"

export default {
  
  name: "Dashboard",
  created() {
    request({
    url: '/hckm-user/',
    }).then(res =>{
        console.log(res);
        this.userName = res.data;
    }).catch(err =>{
        console.log(err)
    })
  },
  data() {
    return {
      children: ["A", "B", "C"],
      userName: '',
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