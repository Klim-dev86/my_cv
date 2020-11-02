<template>
  <ul class="collapsible">
    <li>
      <div class="collapsible-header">
        <!-- <i class="material-icons">filter_drama</i> -->
        <div class ='company-wrapper'>
          <img class='company-icon-tgb' src="@/assets/Infotr-ico.png" alt="альтернативный текст">
          <p class='company-name'>АО НПЦ ИНФОТРАНС</p>
        </div>
        <div class="proffession-wrapper">
          <div class="profession-name">Ведущий инженер-конструктор</div>
          <div class="profession-period">01.10.2019 г. - настоящее время</div>
        </div>
        <div class="uncollapse">Подробнее...</div>
        <!-- <span class="badge">Подробнее...</span> -->
      </div>
      <div class="collapsible-body">
        <ul class="duties">
          <li class="duty">Реализация проектов систем железнодорожного измерительного оборудования.</li>
          <li class="duty">Разработка 3D моделей, выполнение чертежей, сопровождение изготовления и ввода в эксплуатацию.</li>
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

// @import '~materialize-css/dist/css/materialize.min.css';

.collapsible-header {
 transition: all 0.6s ease;

}

.collapsible-header:hover {
  background:#b8b8b8;
}


.collapsible-body {
  background: #ffffff;
  padding: 10px;
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

.duties {
  list-style-type: square;
  padding: 0px;
  margin-left: 200px;
}

.duty {
  padding: 2px;
  margin: 5px;
}

.proffession-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profession-name {
  font-size: 30px;
}

.profession-period {
  
}

.uncollapse {
  margin-left: auto;
  margin-top: auto;
  margin-right: 10px;
  margin-bottom: 10px;
}

</style>