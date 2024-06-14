  <?php
    $data = [
        [
            "id" => 1,
            "title" => "Городской конкурс сочинений  «Деды наших дедов – герои Отечества», посвященного 79-ойГородской конкурс сочинений  «Деды наших дедов – герои Отечества», по годовщине Победы советского народа в Великой Отечественной войне",
            "role" => ["журналист", "историк", "патриот", "юнармеец"],
            "money" => 300,
            "balls" => 200,
            "status" => '1 место 1 этап'
        ],
    ];

    wp_localize_script('solaris_user_cabinet_portfolio', 'data', $data);
    ?>

  <section class="uc-portfolio">
      <div class="uc-portfolio__container">
          <div class="dropdown uc-dropdown__portfolio">
              <input class="dropdown-input " type="text" placeholder="сортировать по роли" value="" readonly />
              <img class="dropdown-icon" src="<?php echo get_template_directory_uri() ?>/assets/icon/appearance.svg" alt="icon-appearance">
              <ul class="dropdown-options">
                  <li class="dropdown-option">UI Design</li>
                  <li class="dropdown-option">HTML</li>
                  <li class="dropdown-option">CSS</li>
                  <li class="dropdown-option">JS</li>
              </ul>
          </div>
          <table class="uc-portfolio__table">
              <thead>
                  <tr>
                      <th>Название конкурса </th>
                      <th>Название роли</th>
                      <th>Наставник </th>
                      <th>Солярики</th>
                      <th>Баллы</th>
                      <th>Статус</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Городской конкурс сочинений
                          «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа
                          в
                          Великой Отечественной войне</td>
                      <td>
                          <p>журналист</p>
                          <p>историк</p>
                          <p>патриот</p>
                          <p>юнармеец</p>
                      </td>
                      <td>Иванова М.И</td>
                      <td>300</td>
                      <td>260 </td>
                      <td>1 место 1 этап</td>
                  </tr>
                  <tr>
                      <td>Городской конкурс сочинений
                          «Деды наших дедов – герои Отечества», посвященного 79-ой годовщине Победы советского народа
                          в
                          Великой Отечественной войне</td>
                      <td>
                          <p>журналист</p>
                          <p>историк</p>
                          <p>патриот</p>
                          <p>юнармеец</p>
                      </td>
                      <td>Иванова М.И</td>
                      <td>300</td>
                      <td>260 </td>
                      <td>1 место 1 этап</td>
                  </tr>
              </tbody>
          </table>
          <?php
            if ($data) {
            ?>
              <div class="pagination__container">
                  <ul class="pagination-list">
                      <li class="pagination-prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 1L1 7L7 13" stroke="#1F2A3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </li>
                      <li class="pagination-next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 1L7 7L1 13" stroke="#1F2A3E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </li>
                  </ul>
              </div>
          <?php  }  ?>
      </div>
  </section>