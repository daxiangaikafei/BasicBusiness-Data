<template>
  	<div class="cloud_container">
        <div>藤榕官网子页面，测试多层页面嵌套</div>
        <div>cloud id is: {{ cloudId }}</div>
    </div>
</template>

<script>
export default {
	name: 'cloud',
	data () {
		return {
			cloudId: '' //从藤榕官网页面传过来的userid
		}
	},
	mounted () {
		this.cloudId = this.$route.params.cloudId
	}
}
</script>

<style lang="less" scoped>
    .trhome_container{

    }
</style>