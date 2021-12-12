<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <router-link to="/system">
            <a-icon type="user" />
            <span>系统设置</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/about">
            <a-icon type="video-camera" />
            <span>文章管理</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/login">
            <a-icon type="upload" />
            <span>分类管理</span>
          </router-link>

        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <div class="user-center">
        <a-avatar  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <a-dropdown>
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">用户名<a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">用户信息</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">修改密码</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">注销</a>
            </a-menu-item>
          </a-menu>
       </a-dropdown>
       </div>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 60px;
  background: url(./assets/logo.png );
  margin: 16px;
}
.ant-layout.ant-layout-has-sider {
  height: 100%; 
}
.user-center {
  float: right;
  padding-right:20px;
  color: #efe213;
}
</style>
