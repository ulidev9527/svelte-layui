<script lang="ts">
    export let selected = false;
</script>

<li
    class="layui-nav-item {selected ? 'layui-this' : ''} {$$props.class}"
    style={$$props.style}
>
    <slot />
</li>
