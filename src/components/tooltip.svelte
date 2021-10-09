<script>
	import { tooltipStore } from '$src/stores/';
	import { fade } from 'svelte/transition';
</script>

<div class="tooltip">
	{#if $tooltipStore.msg !== ''}
		<div class="tooltip__box" transition:fade>
			{$tooltipStore.msg}
		</div>
	{/if}
</div>

<style lang="scss">
	.tooltip {
		position: fixed;
		&__box {
			color: #fff;
			background: #000;
		}
	}
</style>
