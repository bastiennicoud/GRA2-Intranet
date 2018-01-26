<template>
  <div id="absence">
    <section class="container">

      <h1 class="title is-spaced">Absences de la journée</h1>

      <p class="subtitle">Mon cours : <strong>Physique</strong> :</p>

      <button class="button field is-success">
        <b-icon icon="check"></b-icon>
        <span>Tous présents</span>
      </button>

      <b-table
        :data="tableData"
        :striped="true"
        :hoverable="true"
        default-sort="user.first_name">

        <template slot-scope="props">

          <b-table-column field="id" label="ID" width="40" sortable numeric>
            {{ props.row.id }}
          </b-table-column>

          <b-table-column field="user.first_name" label="Prénom" sortable>
            {{ props.row.user.first_name }}
          </b-table-column>

          <b-table-column field="user.last_name" label="Nom" sortable>
            {{ props.row.user.last_name }}
          </b-table-column>

          <b-table-column field="date" label="08:00 08:45 ITIL" sortable centered>
            <span class="tag is-success" :class="props.row.itil === 0 ? 'is-success' : 'is-danger'">
              {{ props.row.itil === 0 ? 'Présent' : 'Absent' }}
            </span>
          </b-table-column>

          <b-table-column field="date" label="08:50 09:35 ITLI" sortable centered>
            <span class="tag is-success" :class="props.row.physique === 0 ? 'is-success' : 'is-danger'">
              {{ props.row.physique === 0 ? 'Présent' : 'Absent' }}
            </span>
          </b-table-column>

          <b-table-column field="date" label="09:50 10:35 Physique" sortable centered>
            <span class="tag is-success" :class="props.row.gra === 0 ? 'is-success' : 'is-danger'">
              {{ props.row.gra === 0 ? 'Présent' : 'Absent' }}
            </span>
          </b-table-column>

          <b-table-column field="date" label="10:40 11:25 Physique" sortable centered>
            <span class="tag is-success" :class="props.row.gra === 0 ? 'is-success' : 'is-danger'">
              {{ props.row.gra === 0 ? 'Présent' : 'Absent' }}
            </span>
          </b-table-column>

          <b-table-column field="date" label="11:30 12:15 Physique" sortable centered>
            <span class="tag is-success" :class="props.row.physique === 0 ? 'is-success' : 'is-danger'">
              {{ props.row.gra === 0 ? 'Présent' : 'Absent' }}
            </span>
          </b-table-column>

          <b-table-column field="date" label="13:30 14:15 GRA2" sortable centered>
            <span class="tag is-success" :class="props.row.gra === 0 ? 'is-success' : 'is-danger'">
              {{ props.row.gra === 0 ? 'Présent' : 'Absent' }}
            </span>
          </b-table-column>

          <b-table-column field="date" label="14:20 15:05 GRA2" sortable centered>
            <span class="tag is-success" :class="props.row.itil === 0 ? 'is-success' : 'is-danger'">
              {{ props.row.gra === 0 ? 'Présent' : 'Absent' }}
            </span>
          </b-table-column>

          <b-table-column field="date" label="15:20 16:05 GRA2" sortable centered>
            <span class="tag is-success" :class="props.row.gra === 0 ? 'is-success' : 'is-danger'">
              {{ props.row.gra === 0 ? 'Présent' : 'Absent' }}
            </span>
          </b-table-column>

          <b-table-column field="date" label="16:10 16:55 GRA2" sortable centered>
            <span class="tag is-success" :class="props.row.gra === 0 ? 'is-success' : 'is-danger'">
              {{ props.row.gra === 0 ? 'Présent' : 'Absent' }}
            </span>
          </b-table-column>

        </template>
      </b-table>

      <b-pagination class="mg-top"
        :total="total"
        :current.sync="current"
        :order="order"
        :size="size"
        :simple="isSimple"
        :per-page="perPage">
      </b-pagination>

    </section>

  </div>
</template>

<script>
export default {
  data () {
    return {
      total: 30,
      current: 4,
      perPage: 2,
      order: '',
      size: '',
      isSimple: false,
      // test datas (retrivet from a api in real case)
      tableData: [
        {
          id: 1,
          user: { first_name: 'Antonion', last_name: 'Giordano' },
          itil: 0,
          physique: 1,
          gra: 1
        },
        {
          id: 2,
          user: { first_name: 'Nicolas', last_name: 'Henry' },
          itil: 1,
          physique: 0,
          gra: 0
        },
        {
          id: 3,
          user: { first_name: 'Julien', last_name: 'Richoz' },
          itil: 0,
          physique: 0,
          gra: 0
        },
        {
          id: 4,
          user: { first_name: 'Quentin', last_name: 'Neves' },
          itil: 0,
          physique: 0,
          gra: 0
        },
        {
          id: 5,
          user: { first_name: 'Davide', last_name: 'Carboni' },
          itil: 0,
          physique: 0,
          gra: 0
        },
        {
          id: 6,
          user: { first_name: 'Benjamin', last_name: 'Delacombaz' },
          itil: 0,
          physique: 0,
          gra: 0
        },
        {
          id: 7,
          user: { first_name: 'Bastien', last_name: 'Nicoud' },
          itil: 0,
          physique: 0,
          gra: 0
        },
        {
          id: 8,
          user: { first_name: 'Kevin', last_name: 'Jordil' },
          itil: 1,
          physique: 1,
          gra: 1
        },
        {
          id: 9,
          user: { first_name: 'Stevent', last_name: 'Avelino' },
          itil: 0,
          physique: 0,
          gra: 0
        }
      ],
      defaultSortDirection: 'asc'
    }
  }
}
</script>

<style lang="scss" scoped>
#absence {
  margin-bottom: 60px;
}

.mg-top {
  margin-top: 40px;
}
</style>
