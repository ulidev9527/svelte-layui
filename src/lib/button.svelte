<script lang="ts">
    import type { T_colors } from "./types.js";

    export let theme: T_colors | undefined = undefined;
    export let border = false;
    export let disabled = false;
    export let size: "lg" | "sm" | "xs" | "fluid" | undefined = undefined;
    export let redius = false;
</script>

<button
    on:click
    {disabled}
    type="button"
    class="layui-btn
{disabled
        ? 'layui-btn-disabled'
        : theme
          ? border
              ? 'layui-btn-primary layui-border-' + theme
              : 'layui-btn-primary layui-bg-' + theme
          : ''} 
  {border ? 'layui-btn-primary' : ''} 
  {size ? 'layui-btn-' + size : ''}
  {redius ? 'layui-btn-radius' : ''}
  {$$props.class}
  "
>
    <slot />
</button>
