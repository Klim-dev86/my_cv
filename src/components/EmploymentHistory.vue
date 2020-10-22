<template>
  <ul class="collapsible">
    <li>
      <div class="collapsible-header">
        <!-- <i class="material-icons">filter_drama</i> -->
        <div class ='company-wrapper'>
          <img class='company-icon-tgb' src="@/assets/Infotr-ico.png" alt="альтернативный текст">
          <p class='company-name'>АО НПЦ ИНФОТРАНС</p>
        </div>
        <div class="profession">Ведущий инженер-конструктор</div>
        <div class="uncollapse">Подробнее...</div>
        <!-- <span class="badge">Подробнее...</span> -->
      </div>
      <div class="collapsible-body">
        <ul>
          <li>Реализация проектов систем железнодорожного измерительного оборудования.</li>
          <li>Разработка 3D моделей, выполнение чертежей, сопровождение изготовления и ввода в эксплуатацию.</li>
        </ul>
      </div>
    </li>



    <li>
      <div class="collapsible-header">
        <!-- <i class="material-icons">place</i> -->
        <div class ='company-wrapper'>
          <img class='company-icon-nts' src="@/assets/nts_ico.svg" alt="альтернативный текст">
          <p class='company-name'>"ООО" ТехГеоБур</p>
        </div>
        
        <span class="profession">Главный конструктор</span>
        <span class="badge">Подробнее...</span>
      </div>
      <div class="collapsible-body">
        <ul>
          <li>Участие в кооперации разработок в международной группе компаний "НьюТекСервисез".</li>
          <li>Руководство конструкторским отделом (5 человек).</li>
          <li>Определение инновационной политики компании и обеспечение конструктивно-технологического сопровождения производства серийных изделий.</li>
          <li>Разработка, проверка, нормоконтроль конструкторской документации (чертежи, инструкции, руководства, паспорта) согласно ЕСКД на механические и электротехнические изделия.</li>
          <li>Разработка программ и методик, организация и проведение испытаний изделий и их узлов.</li>
          <li>Разработка технических заданий НИОКР, составление графиков разработки,контроль и подготовка отчётной документации.</li>
          <li>Анализ качества продукции, разработка мероприятий по устранению отказов.</li>
          <li>Ведение переговоров с заказчиками, подрядчиками и смежными организациями.</li>
        </ul>

        <!-- <p>Lorem ipsum dolor sit amet.</p> -->
      </div>
    </li>
  </ul>
</template>



<style lang="scss">

@import '~materialize-css/dist/css/materialize.min.css';

.collapsible-body {
  background: #ffffff;
  // justify-content: space-between;
}

.company-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px

}

.company-icon-tgb {
  width: 70px;
}

.company-icon-nts {
  width: 110px;
}

.company-name {
  align-self: center;
}

.uncollapse {
  margin-left: auto;
  margin-right: 10em;
  margin-right: 0;
}

</style>