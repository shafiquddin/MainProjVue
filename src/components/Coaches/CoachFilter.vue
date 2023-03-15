<template>
  <base-card>
  <h2>Filter</h2>
    <span class="filter">
      <input type="checkbox" id="frontend" checked @change="setFilters"/>
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter">
      <input type="checkbox" id="backend" checked @change="setFilters"/>
      <label for="backend">Backend</label>
    </span>
    <span class="filter">
      <input type="checkbox" id="career" checked @change="setFilters"/>
      <label for="career">Career</label>
    </span>
  </base-card>
</template>
<script>
export default {
    emits:['change-filter'],
    data(){
        return{
            activeFilters:{
                frontend:true,
                backend:true,
                career:true
            }
        }
    },
    methods:{
        setFilters(event){
            const input = event.target.id;
            const isActive=event.target.checked;
            const updateFilter={
                ...this.activeFilters,
                [input]:isActive
            }
            this.activeFilters=updateFilter;
            this.$emit('change-filter',updateFilter)
        }
    }
}
</script>
<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>