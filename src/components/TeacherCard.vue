<template>
  <div class="teacher-card">
    <img
      class="contactImg"
      :src="require(`../assets/images/teachers/${fullName}.png`)"
      alt=""
    />
    <section class="contact-info">
      <h4>{{ fullName }}</h4>
      <div class="footer">
        <p class="contact-title">Färdigheter</p>
        <ul>
          <li v-for="(skill, index) in skills" :key="index">
            {{ skill }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    fullName: String,
    title: String,
    skills: Array,
  },

  data: () => {
    return {
      name: "MariaBryl",
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";
.teacher-card {
  @include flex();
  justify-content: space-between;
  background: #ffffff06;
  width: 18rem;
  height: 40rem;
  margin: 4rem 1rem;
  border-radius: 12px;

  img {
    max-width: 9rem;
    margin: 4rem 0rem 0rem 0rem;
  }

  .contact-info {
    width: 100%;
    height: 60%;
    @include flex();
    justify-content: flex-end;

    h4 {
      margin-bottom: 4rem;
    }

    .footer {
      width: 100%;
      min-height: 80%;
      background: #ffffff06;
      @include flex();
      align-items: flex-start;
      justify-content: flex-start;
      padding: 1.4rem;

      .contact-title {
        color: #888;
      }

      ul {
        height: 100%;
        @include flex();
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 1rem 0rem;

        li {
          margin: 0.5rem 1rem;
          color: #ddd;
          text-transform: capitalize;
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .teacher-card {
  }
}

// .contact-info {
//   width: 100%;
//   height: 60%;
//   @include flex();
//   justify-content: space-between;

//   h4 {
//     margin-bottom: 4rem;
//   }

//   .contact-title {
//     color: #888;
//     margin: 1.5rem 0rem;
//   }

//   p {
//     font-size: 0.9rem;
//     margin: 0.2rem 0rem;
//     color: #e2e2e2;
//     align-self: flex-start;
//     text-align: left;

//     &::first-letter {
//       text-transform: uppercase;
//     }
//   }

//   .footer {
//     width: 100%;
//     min-height: 100%;
//     background: #ffffff06;
//     @include flex();
//     align-items: flex-start;
//     justify-content: flex-start;
//     padding: 1.4rem;

//     ul {
//       height: 100%;
//       @include flex();
//       flex-direction: row;
//       flex-wrap: wrap;
//       align-items: flex-start;
//       justify-content: flex-start;

//       li {
//         margin: 1rem;
//       }
//     }
//   }
// }
</style>
