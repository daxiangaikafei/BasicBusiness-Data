<template>
  	<div class="trhome_container">
  	<div>user id is: {{ userId }}</div>
  	<router-link :to="'/trhome/cloud' + cloudId">云图页</router-link>
        <upgradeIndex></upgradeIndex>
    </div>
</template>

<script>
import upgradeIndex from '../../components/upgradeIndex'
export default {
	name: 'home',
	data () {
		return {
			userId: 10,
			cloudId: 100
		}
	},
	mounted () {
		this.userId = this.$route.params.userId
	},
	created () {
		this.cloudId = Math.ceil(Math.random() * 100)
	},
	components: {
		upgradeIndex
	}
}
</script>

<style lang="less" scoped>
    .trhome_container{

    }
</style>