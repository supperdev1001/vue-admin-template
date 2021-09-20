<template>
  <div>
    <b-field>
        Unscheduled Jobs
    </b-field>
    <b-table 
      v-if="data.length"
      ref="table"
      :data="data"
      :default-sort-direction="defaultSortDirection"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"
    >
      <b-table-column
          field="jobName"
          label="Job name"
          sortable
          v-slot="props"
      >
        {{ props.row.jobName }}
      </b-table-column>
      <b-table-column
          field="jobTotal"
          label="Job Total"
          sortable
          v-slot="props"
      >
        {{ props.row.jobTotal }}
      </b-table-column>
      <b-table-column
          field="urgency"
          label="Urgency"
          sortable
          v-slot="props"
      >
        <b-tag v-if="props.row.urgency == 'medium'" type="is-warning is-light">Medium</b-tag>
        <b-tag v-if="props.row.urgency == 'very_high'" type="is-danger is-light">Very High</b-tag>
      </b-table-column>
      <b-table-column
          field="acceptedDate"
          label="Accepted Date"
          sortable
          v-slot="props"
      >
        {{ props.row.acceptedDate }}
      </b-table-column>
      <b-table-column
          field="earliestAvaliable"
          label="Earliest avaliable"
          sortable
          v-slot="props"
      >
        {{ props.row.earliestAvaliable }}
      </b-table-column>
      <b-table-column
          field="finishDate"
          label="Finish by Date"
          sortable
          v-slot="props"
      >
        {{ props.row.finishDate }}
      </b-table-column>
      <b-table-column
          field="verified"
          label="Verified"
          sortable
          v-slot="props"
      >
        <b-tag v-if="props.row.verified == 1" type="is-success is-light">Verified</b-tag>
        <b-tag v-if="props.row.verified == 0" type="is-light">Not verified</b-tag>
      </b-table-column>
      <b-table-column
          field="carpentry"
          label="Carpentry"
          sortable
          v-slot="props"
      >
        {{ props.row.carpentry }}
      </b-table-column>
      <b-table-column>
        ...
      </b-table-column>
    </b-table>
  </div>
</template>

<script>

export default {
  name: 'NewDashboard',
  components: {
  },
  data () {
    return {
      defaultSortDirection: 'asc',
      sortIcon: 'sort',
      sortIconSize: 'is-small',
      data: [
        { 
          jobName: 'John Smith', 
          jobTotal: '$8,000', 
          urgency: 'very_high',
          acceptedDate: '08/01/2021',
          earliestAvaliable: '08/24/2021',
          finishDate: '09/10/2021',
          verified: 0, //'Not verified'
          carpentry: 'Yes'
        },
        { 
          jobName: 'Adam Jameson', 
          jobTotal: '$7,350', 
          urgency: 'medium',
          acceptedDate: '08/04/2021',
          earliestAvaliable: '08/25/2021',
          finishDate: '09/12/2021',
          verified: 1,//'Verified'
          carpentry: ''
        },
      ],
      demoEvents: [{
        date: '2016/11/12', // Required
        title: 'Foo' // Required
      }, {
        date: '2016/12/15',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }]
    }
  },
  methods: {
    
  }
}
</script>
