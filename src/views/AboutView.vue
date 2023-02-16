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
            Brainy Bites是一个专注于为用户提供泛科技和人文领域信息资讯的知识社区。我们不仅提供官方丰富多彩的文章，同时也鼓励用户积极分享自己的知识和趣闻。在这里，您可以阅读到最新最热门的科技资讯、人文思考和文化事件，了解各地新知。我们秉承开放、分享、协作的精神，以知识共享和交流为核心，为用户打造一个多元化的学习与交流平台。我们希望建立一个全面而具有活力的泛科技与人文知识社区，为用户提供优质、有深度和多元化的知识体验。
          </p>
        </div>
        <h2>我们的特点</h2>
        <div class="block">
          <p>
            Brainy Bites是一个独具匠心的知识社区，特点在于把科技和人文领域的信息整合到一个平台上。我们提供的文章内容涵盖了科技的最新进展、人文思考的深刻见解、文化事件的细节分析等多个领域。我们的社区是一个开放的平台，任何人都可以在这里发布自己的知识分享，交流互动，与其他用户共同创造知识。
          </p>
        </div>
        <h2>我们的愿景</h2>
        <div class="block">
          <p>
            Brainy Bites的愿景是建立一个全面且具有活力的亚洲知识共享和交流平台，让每个人都可以通过这个平台获得高质量的知识体验。我们致力于把最好的思想和最深刻的见解带给用户，让用户在这里找到自己感兴趣的内容，获得知识上的提升和满足。
          </p>
        </div>
        <h2>Who we are</h2>
        <div class="block">
          <p>
            Brainy Bites is a knowledge community focused on providing users with information and information in the pan-technology and humanities fields. We not only provide official and colorful articles, but also encourage users to actively share their knowledge and anecdotes. Here, you can read the latest and hottest technology information, humanities thinking and cultural events, and learn new knowledge from all over the world. With the spirit of openness, sharing and collaboration, we focus on knowledge sharing and exchange to create a diverse learning and communication platform for our users. We hope to build a comprehensive and dynamic pan-technology and humanities knowledge community, providing users with a high-quality, in-depth and diversified knowledge experience.
          </p>
        </div>
        <h2>Our features</h2>
        <div class="block">
          <p>
            Brainy Bites is an innovative knowledge community that sets itself apart by integrating information from the fields of science, technology, and humanities into a single platform. Our content covers a wide range of topics, including the latest developments in science and technology, profound insights on humanistic thinking, and detailed analyses of cultural events. Our community is an open platform, where anyone can share their knowledge, interact, and collaborate with other users to create knowledge together.
          </p>
        </div>
        <h2>Our vision</h2>
        <div class="block">
          <p>
            Our vision is to build a comprehensive and dynamic knowledge sharing and exchange platform in Asia where everyone can have a quality knowledge experience. We are committed to bringing the best ideas and deepest insights to our users, where they can find content that interests them and gain intellectual advancement and satisfaction.          </p>
        </div>
        <span>- Brainy Bites | Knowledge creates a better world -</span>
      </div>
    </main>
  </div>
</template>

<script>
  import TopBar from "../components/index/TopBar";

  import { getCusBasicInfo } from "../control/Self";
  import { jumpInCurPage } from "../util/PageJump";

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
    span {
      font-size: 12px;
      color: gray;
    }
  }
</style>
