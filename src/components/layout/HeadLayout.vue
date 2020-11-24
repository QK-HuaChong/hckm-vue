<template>
  <div>
    <div class="header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="float-left">
              <div class="hamburger sidebar-toggle">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </div>
            </div>
            <div class="float-right">
              <div class="dropdown dib">
                <div class="header-icon" data-toggle="dropdown">
                  <i class="ti-bell"></i>
                  <div class="drop-down dropdown-menu dropdown-menu-right">
                    <div class="dropdown-content-heading">
                      <span class="text-left">Recent Notifications</span>
                    </div>
                    <div class="dropdown-content-body">
                      <ul>
                        <li>
                          <a href="#">
                            <img
                              class="pull-left m-r-10 avatar-img"
                              src="assets/images/avatar/3.jpg"
                              alt=""
                            />
                            <div class="notification-content">
                              <small class="notification-timestamp pull-right"
                                >02:34 PM</small
                              >
                              <div class="notification-heading">Mr. John</div>
                              <div class="notification-text">
                                Hi Teddy, Just wanted to let you ...
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="text-center">
                          <a href="#" class="more-link">See All</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dropdown dib">
                <div class="header-icon" data-toggle="dropdown">
                  <i class="ti-email"></i>
                  <div class="drop-down dropdown-menu dropdown-menu-right">
                    <div class="dropdown-content-heading">
                      <span class="text-left">2 New Messages</span>
                      <a href="email.html">
                        <i class="ti-pencil-alt pull-right"></i>
                      </a>
                    </div>
                    <div class="dropdown-content-body">
                      <ul>
                        <li>
                          <a href="#">
                            <img
                              class="pull-left m-r-10 avatar-img"
                              src="assets/images/avatar/2.jpg"
                              alt=""
                            />
                            <div class="notification-content">
                              <small class="notification-timestamp pull-right"
                                >02:34 PM</small
                              >
                              <div class="notification-heading">Mr. John</div>
                              <div class="notification-text">
                                Hi Teddy, Just wanted to let you ...
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="text-center">
                          <a href="#" class="more-link">See All</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dropdown dib">
                <div
                  class="header-icon"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="user-avatar"
                    >John
                    <i class="ti-angle-down f-s-10"></i>
                  </span>
                  <div
                    class="drop-down dropdown-profile dropdown-menu dropdown-menu-right"
                    x-placement="bottom-end"
                    style="
                      position: absolute;
                      transform: translate3d(61px, 77px, 0px);
                      top: 0px;
                      left: 0px;
                      will-change: transform;
                    "
                  >
                    <div class="dropdown-content-heading">
                      <span class="text-left">Upgrade Now</span>
                      <p class="trial-day">30 Days Trail</p>
                    </div>
                    <div class="dropdown-content-body">
                      <ul>
                        <li>
                          <a href="#">
                            <i class="ti-user"></i>
                            <span>Profile</span>
                          </a>
                        </li>

                        <li>
                          <a href="#">
                            <i class="ti-email"></i>
                            <span>Inbox</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="ti-power-off"></i>
                            <span>Logout</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'HeadLayout'
};
</script>
<style scoped>
@import "../../assets/css/style.css"
</style>