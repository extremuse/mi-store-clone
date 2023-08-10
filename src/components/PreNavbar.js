import React from 'react'
import "../styles/PreNavbar.css"

const CartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25"><path d="M465-613v-123H341v-60h124v-123h60v123h123v60H525v123h-60ZM289.788-80Q260-80 239-101.212q-21-21.213-21-51Q218-182 239.212-203q21.213-21 51-21Q320-224 341-202.788q21 21.213 21 51Q362-122 340.788-101q-21.213 21-51 21Zm404 0Q664-80 643-101.212q-21-21.213-21-51Q622-182 643.212-203q21.213-21 51-21Q724-224 745-202.788q21 21.213 21 51Q766-122 744.788-101q-21.213 21-51 21ZM290-287q-42 0-61.5-34t.5-69l61-111-150-319H62v-60h116l170 364h292l156-280 52 28-153 277q-9.362 16.667-24.681 25.833Q655-456 634-456H334l-62 109h494v60H290Z"/></svg>;

const preNavbar = () => {
  return (
    <div className="preNav">
        <div className='preNav-inner'>
        <div>
                 <a  href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
                 <a  href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
                 <a  href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
                 <a  href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE </a>
             </div>
             <div>
             <a  href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
                 <a  href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
                 <a  href="https://store.mi.com/in/site/login"> {CartIcon} &nbsp; CART (0)</a>
             </div>
             </div>
    </div>

  )
}

export default preNavbar