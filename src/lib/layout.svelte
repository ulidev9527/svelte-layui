<script lang="ts">
    import type { T_colors } from "./types.js";

    export let type:
        | "main"
        | "header"
        | "side"
        | "side-scroll"
        | "body"
        | "logo"
        | undefined = undefined;
    export let theme: T_colors | undefined = undefined;
    export let admin = false;
</script>

<div
    class="
    {admin ? 'layui-layout layui-layout-admin' : ''}
    {type ? 'layui-' + type : ''}
    {theme ? 'layui-bg-' + theme : ''}
    {$$props.class}
    "
    style={$$props.style}
>
    <slot />
</div>
