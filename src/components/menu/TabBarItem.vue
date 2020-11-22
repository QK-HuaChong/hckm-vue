<template>
  <div>
      <li>
      <a class="sidebar-sub-toggle"><i class="ti-bar-chart-alt"></i> {{titleName}}
        <span class="sidebar-collapse-icon ti-angle-down"></span></a>
      <ul>
        <li v-for="(item,index) in childrenItem" :key="index">
            <!-- <a href="chart-flot.html">Flot</a> -->
            <a href="chart-flot.html">{{item}}</a>
        </li>
      </ul>
    </li>
  </div>
</template>
<script>
export default{
    name: "TabBarItem",
    props :{
        titleName: String,
        childrenItem: Array,
    }
}
</script>
<style scoped>

</style>