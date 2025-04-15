<script lang="ts">
    export let title: string | undefined = undefined;
    export let open = false;
</script>

<li
    class="layui-menu-item-group
    {open ? 'layui-menu-item-down' : 'layui-menu-item-up'}
    {$$props.class}"
    style={$$props.style}
>
    <div class="layui-menu-body-title" on:click={() => (open = !open)}>
        {#if title}
            {title}
        {:else}
            <slot name="title" />
        {/if}
    </div>
    <ul>
        <slot />
    </ul>
</li>
