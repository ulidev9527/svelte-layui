<script lang="ts">
    export let styleType: "brief" | "card" | undefined = undefined;
</script>

<div class="layui-tab {styleType ? `layui-tab-${styleType}` : ''}">
    <slot />
    <ul class="layui-tab-title">
        <slot name="title" />
    </ul>
    <div class="layui-tab-content">
        <slot name="content" />
    </div>
</div>
