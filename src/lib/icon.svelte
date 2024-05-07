<script lang="ts">
    import type { T_Icons } from "./types.js";

    export let type: T_Icons = "github";
    export let size: number | undefined = undefined;
    export let color: string | undefined = undefined;
    export let float: "right" | "left" | undefined = undefined;
</script>

<i
    class="layui-icon layui-icon-{type} {float ? 'layui-icon-' + float : ''} {$$props.class}"
    style="{size ? `font-size: ${size}px;` : ''} {color
        ? `color: ${color};`
        : ''}"
    on:click
/>
