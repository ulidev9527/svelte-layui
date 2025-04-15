<script lang="ts">
    import { GridCol, GridRow, Tab, TabTitle, TabContent } from "$lib/component/index.js";

    export let title: string;
    export let code: string;
</script>

<GridRow>
    <GridCol size="xs2">{title}</GridCol>
    <GridCol size="xs10">
        <Tab>
            <svelte:fragment slot="title">
                <!-- <TabTitle>预览</TabTitle>
                <TabTitle>代码</TabTitle> -->
            </svelte:fragment>
            <svelte:fragment slot="content">
                <!-- <TabContent><slot /></TabContent>
                <TabContent>{code}</TabContent> -->
                <slot></slot>
            </svelte:fragment>
        </Tab>
    </GridCol>
</GridRow>
