<script lang="ts">
    export let fluid = false; // 自适应宽度
</script>

<div
    class="layui-{!fluid ? 'container' : 'fluid'} {$$props.class}"
    style={$$props.style}
>
    <slot />
</div>
