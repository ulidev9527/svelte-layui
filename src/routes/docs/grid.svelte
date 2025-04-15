<script lang="ts">
    import LayuiCol from "$lib/component/grid-col.svelte";
    import LayuiRow from "$lib/component/grid-row.svelte";
</script>

<h1>栅格</h1>
<LayuiRow>
    <LayuiCol size={["xs6"]} bgColor="green">6/12</LayuiCol>
    <LayuiCol size={["xs6"]} bgColor="blue">6/12</LayuiCol>
</LayuiRow>
<LayuiRow>
    <LayuiCol size={["xs3"]} bgColor="green">3/12</LayuiCol>
    <LayuiCol size={["xs3"]} bgColor="blue">3/12</LayuiCol>
    <LayuiCol size={["xs3"]} bgColor="green">3/12</LayuiCol>
    <LayuiCol size={["xs3"]} bgColor="blue">3/12</LayuiCol>
</LayuiRow>
