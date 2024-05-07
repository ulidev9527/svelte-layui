<script lang="ts">
    import type { T_colors, T_grid_col_size } from './types.js';
    export let size: T_grid_col_size[]| T_grid_col_size= [];
    export let bgColor: T_colors | undefined = undefined;
</script>

<div
    class={ typeof(size) == "string" ? "layui-col-" + size :  size.map((s) => "layui-col-" + s).join(" ") +
        (bgColor ? " layui-bg-" + bgColor : "")}
>
    <slot />
</div>
