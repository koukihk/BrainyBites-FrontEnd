<template>
  <div>
    <header>
      <top-bar class="top-bar" :customer="customer"></top-bar>
    </header>
    <main>
      <div class="content">
        <img alt="Knowledge creates a better world" src="../assets/image/Slogan.png"/>
        <h2>我们是谁</h2>
        <div class="block">
          <p>
            Brainy Bites是一个面向全球的知识社区网站，旨在收集和传播计算机科学领域的知识。我们的愿景是打造一个以用户为中心的知识分享平台，鼓励全球范围内的计算机科学爱好者、学生、教师和专业人士分享他们的知识和经验，从而帮助彼此成长和发展。
          </p>
        </div>
        <h2>我们的特点</h2>
        <div class="block">
          <p>
            1. 多样性：我们欢迎来自各种不同文化背景、语言、学科背景和经验水平的人员参与。这种多样性不仅仅使我们的网站更具包容性，也使我们的知识库更加丰富多彩。
          </p>
          <p>
            2. 实用性：我们的目标是将复杂的计算机科学概念转化为易于理解和实践的实用技能。我们的知识库中不仅有理论性的知识，还包括实践技能和应用案例，以帮助用户更好地掌握所学内容。
          </p>
          <p>
            3. 互动性：我们鼓励用户之间的交流和互动，用户可以在网站上与其他人共享他们的见解和经验，从而促进彼此之间的学习和提高。
          </p>
        </div>
        <h2>我们的愿景</h2>
        <div class="block">
          <p>
            我们希望通过Brainy Bites，打破学习计算机科学的障碍，使知识更加公平和平等地分布，并让所有人都可以充分利用技术来创造更美好的未来。
          </p>
        </div>
        <h2>Who we are</h2>
        <div class="block">
          <p>
            Brainy Bites is a global knowledge community website that aims to collect and disseminate knowledge in the field of computer science. Our vision is to create a user-centric platform for knowledge sharing that encourages computer science enthusiasts, students, teachers, and professionals from around the world to share their knowledge and experience, thereby helping each other to grow and develop.
          </p>
        </div>
        <h2>Our features</h2>
        <div class="block">
          <p>
            1. Diversity: We welcome participation from people of different cultural backgrounds, languages, academic backgrounds, and experience levels. This diversity not only makes our website more inclusive but also makes our knowledge base more rich and colorful.
          </p>
          <p>
            2. Practicality: Our goal is to translate complex computer science concepts into practical skills that are easy to understand and apply. Our knowledge base includes not only theoretical knowledge but also practical skills and application cases to help users better master the content they are learning.
          </p>
          <p>
            3. Interactivity: We encourage interaction and communication among users. Users can share their insights and experiences with others on the website, thereby promoting mutual learning and improvement.
          </p>
        </div>
        <h2>Our hope</h2>
        <div class="block">
          <p>
            Through Brainy Bites, we hope to break down barriers to learning computer science, make knowledge more fairly and equally distributed, and empower everyone to make full use of technology to create a better future.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import TopBar from "../components/index/TopBar";

  import { getCusBasicInfo } from "../control/Self";
  import { jumpInCurPage, jumpInNewPage } from "../util/PageJump";

  export default {
    name: "AboutView",
    components: { TopBar },
    mounted: function () {
      window.addEventListener('scroll', this.getMoreTinyArt, false)
      getCusBasicInfo(0)
          .then((response) => {
              if (response.data) {
                  this.customer = response.data;
              } else {
                  jumpInCurPage('/port');
              }
          })
    },
    data: function () {
      return {
        customer: { }
      }
    }
  }
</script>

<style scoped src="../assets/css/Normal.css"></style>
<style lang="scss" scoped>
  .content {
    padding-bottom: 35px;
    line-height: 27px;
    h2 {
      text-align: left;
      font-weight: 400;
      color: #1f2f3d;
      margin-bottom: 10px;
    }
    .block {
      margin-bottom: 55px;
      p {
        text-align: left;
        color: #2c3e50;
      }
    }
  }
</style>
