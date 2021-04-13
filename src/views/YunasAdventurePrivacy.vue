<template>
  <div class="wrapper">
    <disk-nav />
    <mobile-navbar />
    <main>
      <h1>Yuna's Adventures Privacy and terms of use</h1>
      <p class="intro">
        Your privacy is very important to us, and we take it seriously. Please
        read our Privacy Policy below and let us know if you have any questions
        or other feedback regarding it
      </p>
      <h2>PRIVACY POLICY</h2>
      <ul>
        <li>
          <p>
            <b>Personal information:</b> The only personally identifiable
            information that is collected and stored in relation to our apps is
            the email used for registration of a player account. The player
            account email will never be shared with any other entities and will
            be treated with the strictest confidentiality.
          </p>
        </li>
        <li>
          <p>
            <b>Data retention:</b> If we do happen to obtain any other personal
            information, including other emails than player account email or
            phone numbers perhaps obtained through support requests or other
            correspondence, it will be treated with the strictest
            confidentiality. Any such personal information will never be shared
            with any other entities. Any such personal information will not be
            retained beyond the resolution of the support request or other
            correspondence.
          </p>
        </li>
        <li>
          <p>
            <b>Anonymous usage information:</b> Our apps and websites may
            collect anonymous usage information to help improve the quality of
            our services and applications.
          </p>
        </li>
        <li>
          <p><b></b></p>
        </li>
        <li>
          <p>
            <b>Internet permissions:</b> Our apps do typically require internet
            permissions, for the purpose of providing links to the app store
            entry of our products and to collect anonymous usage information
            (see above).
          </p>
        </li>
        <li>
          <p>
            <b>In-app purchases:</b> Our apps may contain in-app purchases
            (IAP’s).
          </p>
        </li>
        <li>
          <p>
            <b>Advertising:</b> Some of our apps contain third-party
            advertising. We may occasionally promote other products of our own
            within our apps. We may occasionally cross-promote the products of
            other affiliated developers that offer similar products and share
            similar values as expressed on their own published privacy policies.
          </p>
        </li>
      </ul>
      <h2>QUESTIONS CONCERNING OUR PRIVACY POLICY</h2>
      <p>
        If you have any questions concerning our Privacy Policy please contact
        <b> maria.bryl@codic.se </b>
      </p>
      <h2>CHANGES TO OUR PRIVACY POLICY</h2>
      <p>
        We reserve the right to modify our Privacy Policy at any time simply by
        posting such modification on this site and without any other
        notification. Any such modification will be effective immediately upon
        posting on this site. It is your responsibility to review our Privacy
        Policy from time to time to ensure that you continue to agree with all
        of its terms.
      </p>
      <h2>LAST UPDATED</h2>
      <p>The Privacy Policy was last updated on 2021-04-13.</p>
    </main>
    <Footer />
  </div>
</template>

<script>
import DiskNav from "../components/Navigation/DiskNavbar.vue"
import MobileNavbar from "../components/Navigation/MobileNavbar.vue"

import Footer from "../components/Footer/Footer.vue"
export default {
  components: {
    DiskNav,
    MobileNavbar,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";
.wrapper {
  min-height: 100vh;
  width: 100vw;
  @include flex();
  justify-content: space-between;

  main {
    @include flex();
    width: 60%;
    padding: 6rem;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    line-height: 1.8rem;

    h1 {
      color: $main-color;
      margin: 2rem 0rem;
    }

    h2 {
      margin: 4rem 0rem 1rem 0rem;
    }

    p {
      color: #bbb;

      b {
        color: #eee;
      }
    }

    ul {
      margin: 1rem 0rem;

      li {
        margin: 1rem 0rem;
      }
    }
  }
}
</style>
