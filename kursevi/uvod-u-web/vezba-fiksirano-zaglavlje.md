---
title: "Vežba: napravi fiksirano zaglavlje"
layout: lekcija-html
permalink: /vezba-fiksirano-zaglavlje
---

Napravi fiksirano zaglavlje koje se neće pomerati dok se stranica skroluje.

{:.html-ulaz.resenje}
```html
<style>
  body {
    margin: 0;
    padding-top: 120px; /* ostavlja prostor za zaglavlje */
  }

  header {
    background: black;
    color: #ffffff;
    position: fixed;
    width: 100%;
    top: 0;
  }
</style>


<body>
  <header>
    <h1>Logo</h1>
    <p>Ovaj header je fiksiran</p>
  </header>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe neque ipsam placeat est fugiat? Non at porro accusamus doloribus, dolorem nulla aut quae dolore mollitia laboriosam perferendis quo modi, explicabo expedita illo assumenda odio
    eligendi, soluta adipisci ipsum sapiente animi? Veritatis necessitatibus nesciunt illo beatae sunt voluptas rem, quia earum doloremque nam quo recusandae obcaecati corporis atque ratione. Ullam nostrum iure enim repellat voluptas ea maiores
    exercitationem laborum dolore voluptatibus tenetur at, eaque tempora harum? Sapiente, at natus. Ab dignissimos obcaecati iure, magnam aliquam impedit possimus consectetur culpa optio nisi officiis. Delectus quis commodi aperiam laudantium
    veritatis cum. Voluptas, consequuntur!</p>
  <p>Itaque veritatis amet aliquid nostrum, magni magnam ipsa eveniet maxime nisi culpa quod corporis veniam optio asperiores officia excepturi expedita odio. Veniam, perferendis excepturi? Voluptas cum inventore deleniti quam consequuntur ex, id
    harum possimus laudantium voluptatibus illum magnam velit, qui alias quos obcaecati sapiente explicabo. Aliquam sequi cupiditate suscipit at impedit exercitationem rem blanditiis in mollitia expedita. Accusantium eos iusto facere officia
    perferendis illum asperiores ex? Distinctio eum consequatur ea consequuntur temporibus dicta deleniti labore doloremque ad, exercitationem minima quas tempora quidem magnam qui ab omnis sint ipsa sequi esse placeat mollitia soluta error earum?
    Nihil iste natus earum reiciendis.</p>
  <p>Nobis velit sint sunt quidem sequi, voluptatem fugiat facere quis et minima provident nam tenetur ab magni iure, error obcaecati assumenda ipsam repudiandae. Blanditiis maiores qui incidunt placeat itaque deleniti cumque eum, suscipit
    necessitatibus? At asperiores amet deleniti a fuga, quae possimus dolorem officia laborum necessitatibus aut earum. Facere aliquid necessitatibus, eum consequatur, expedita ab repudiandae facilis laudantium atque, placeat repellendus
    dignissimos ipsam ipsum eveniet tempora animi assumenda error incidunt? Nihil velit qui aut culpa ducimus, dolores fugit. Non inventore hic optio animi sint odio, modi fuga reiciendis. Quis vero corrupti consequuntur rem id reprehenderit
    voluptatum soluta eveniet voluptas et.</p>
  <p>Nobis, quibusdam asperiores? Alias dolores, expedita exercitationem atque sit odit fuga eos odio molestias eius unde, illum minima inventore voluptatem quia laborum cumque dolorem incidunt autem consectetur! Mollitia tempora atque corrupti
    porro, autem, consectetur, fugit impedit architecto voluptatem est ullam quaerat velit eos facilis nulla quo non. Accusamus inventore quaerat rem excepturi a reiciendis, ratione ipsa exercitationem vitae eveniet quia dolorem eos ut incidunt
    sapiente recusandae suscipit, sit unde provident facere voluptas delectus voluptates eius! Voluptatum repellendus distinctio in molestiae accusamus dolorum quos perferendis nemo facilis repellat optio, minima soluta ratione cumque est mollitia
    dolores! Doloremque harum aliquid error reiciendis!</p>
</body>
```