<template>
  <el-container>
    <el-header class="header-container">
      <a
        class="logo"
        href="/"
      >
        <img src="@/assets/logo.png">
        <div class="title">
          <span>{{ title }}</span>
        </div>
      </a>
    </el-header>
    <el-main class="main-container">
      <el-row>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
        <el-col span="6">
          <div class="img-block">
            <el-image
              :src="src"
              :preview-src-list="srcList"
            />
            <span class="img-title">默认</span>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer class="footer-container">
      <div class="copyright">
        <span>@copyright 嘟呀网&nbsp;&nbsp;&nbsp;</span>
        <a href="http://www.beian.miit.gov.cn">备案号粤ICP备18141673</a>
      </div>
    </el-footer>
  </el-container>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data: function() {
    return {
      title: '嘟呀网',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ]
    }
  }
}
</script>
<style scoped>
.header-container {
  width: 100%;
  height: 80px !important;
  background-color: #EEEEEE
}
.header-container .logo {
  width: 150px;
}
.logo{
  display:block;
  width:200px;
  height: 60px;
  margin-top: 10px;
  margin-left: 30px;
}
.logo img {
  float: left;
  width: 60px;
  height:60px;
}
.title{
  float:left;
  width: 70px;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
}
.main-container {
  width: 100%;
  background-color: #ffffff;
}
.img-block {
  margin: 10px;
}
.footer-container {
 width: 100%;
 height: 130px !important;
 background-color: #EEEEEE;
}
.copyright{
  line-height: 20px;
  margin-top: 55px;
}
</style>
