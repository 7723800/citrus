<script>
import AppStore from '@/components/_appStore'

export default {
  components: {
    'app-store': AppStore
  }
}
</script>

 <template>
    <div class="footer-info-wrapper">
        <div class="mid-content">
          <div class="bottom-footer">
            <div class="copy-right">© 2008-{{new Date().getFullYear()}} CITRUS<br>&nbsp;Nur-Sultan, Kenesary 4</div>
            <div class="app-store-icon"><app-store/></div>
            <div class="footer-contact-info">
              <ul class="social-icons">
                <li class="mail">
                  <a href="mailto:thecitrus.kz@mail.ru" target="_blank">
                    <i class="icn far fa-envelope"></i>
                    <i class="icn far fa-envelope"></i>
                  </a>
                </li>
                <li class="instagram">
                  <a href="https://www.instagram.com/thecitrus.kz/?hl=ru" target="_blank">
                    <i class="icn fab fa-instagram"></i>
                    <i class="icn fab fa-instagram"></i>
                  </a>
                </li>
                <li class="whattsapp">
                  <a href="https://api.whatsapp.com/send?phone=77017723800&amp;text=Здравствуйте">
                    <i class="icn fab fa-whatsapp"></i><i class="icn fab fa-whatsapp"></i>
                  </a>
                </li>
                <li class="tel"><a href="tel:+77017723800">
                  <i class="icn far fa-phone"></i>
                  <i class="icn far fa-phone"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
</template>

<style>


</style>